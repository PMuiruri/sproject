const express = require("express");
const app = express();
const port = 3030;
const axios = require("axios");
const CircularJSON = require("circular-json");

//function to get all events from the api
const getAllEvents = () => {
  try {
    return axios
      .get("http://open-api.myhelsinki.fi/v1/events/?limit=100")
      .then(response => CircularJSON.stringify(response.data));
  } catch (error) {
    console.error("Axios error: " + error);
  }
};
//function to get all events from the api
const getAllPlaces = url => {
console.log('here');
  try {
    console.log(url);
    return axios
      .get(url)
      .then(response => CircularJSON.stringify(response.data));
  } catch (error) {
    console.error("Axios error: " + error);
  }
};
//function to get all events from the api
const getAllActivities = () => {
  try {
    console.log("http://open-api.myhelsinki.fi/v1/activities/?limit=100");
    return axios
      .get("http://open-api.myhelsinki.fi/v1/activities/?limit=100")
      .then(response => CircularJSON.stringify(response.data));
  } catch (error) {
    console.error("Axios error: " + error);
  }
};
//function to get events based on tags
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
//function to get all events based on location
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
// function to get results and filter based on the locality
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
app.get("/places/:endpoint", async (req, res, next) => {
  console.log("Query " + req.params.endpoint);
  let url = `http://open-api.myhelsinki.fi/v1/${req.params.endpoint}/?limit=100`;
  try {
    const events = await getAllPlaces(url);
    res.header("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(events));
  } catch (error) {
    next(error);
  }
});
app.get("/activities", async (req, res, next) => {
  try {
    const events = await getAllActivities();
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

app.listen(port, () => console.log("Server running in port: " + port));
