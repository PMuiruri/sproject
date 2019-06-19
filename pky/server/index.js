const express = require("express");
const fs = require("fs");
const https = require("https");
const app = express();
const port = 3000;
const path = require("path");
const axios = require("axios");
const CircularJSON = require("circular-json");

app.use(express.static(path.join(__dirname, "../build")));

const getAllEvents = () => {
  try {
    return axios
      .get("http://open-api.myhelsinki.fi/v1/events/?limit=100")
      .then(response => CircularJSON.stringify(response.data));
  } catch (error) {
    console.error("Axios error: " + error);
  }
};
const getTagSearch = tag => {
  try {
    console.log(`http://open-api.myhelsinki.fi/v1/events/?tags_search=${tag}`);
    return axios
      .get(
        `http://open-api.myhelsinki.fi/v1/events/?tags_search=${tag}&limit=100`
      )
      .then(response => CircularJSON.stringify(response.data));
  } catch (error) {
    console.error("Axios error: " + error);
  }
};
const getLocation = (lat, long) => {
  try {
    console.log(
      `http://open-api.myhelsinki.fi/v1/events/?distance_filter=${lat},${long},10`
    );
    return axios
      .get(
        `http://open-api.myhelsinki.fi/v1/events/?distance_filter=${lat},${long},10&limit=100`
      )
      .then(response => CircularJSON.stringify(response.data));
  } catch (error) {
    console.error("Axios error: " + error);
  }
};
// const getLocality =(locality)=>{
//   try {
//     return axios
//       .get(`http://open-api.myhelsinki.fi/v1/events/`)
//       .then(response => {response.filter(data =>{
//           return data.data.location.address.locality === locality;
//         })
//         CircularJSON.stringify(response.data)})
//   } catch (error) {
//     console.error("Axios error: " + error);
//   }
// };

app.get("/events", async (req, res, next) => {
  try {
    const events = await getAllEvents();
    res.header("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(events));
  } catch (error) {
    next(error);
  }
});

app.get("/tags", async (req, res, next) => {
  console.log("Query " + req.query.tag);
  try {
    const events = await getTagSearch(req.query.tag);
    res.header("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(events));
  } catch (error) {
    next(error);
  }
});
app.get("/location", async (req, res, next) => {
  console.log("Query " + req.query.lat);
  console.log("Query " + req.query.long);
  try {
    const events = await getLocation(req.query.lat, req.query.long);
    //const events = await getLocation();
    res.header("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(events));
  } catch (error) {
    next(error);
  }
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});
https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
  .listen(port, function() {
    console.log(
      `app listening on port ${port} Go to https://localhost:${port}/`
    );
  });
