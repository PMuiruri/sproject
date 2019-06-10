const express = require("express");
const app = express();
const port = 3030;
const axios = require("axios");
const CircularJSON = require("circular-json");


const getEvents = () => {
  try {
    return axios
      .get("http://open-api.myhelsinki.fi/v1/events/?limit=100")
      .then(response => CircularJSON.stringify(response.data));
  } catch (error) {
    console.error("Axios error: " + error);
  }
};
const getTagSearch = () => {
  try {
    return axios
      .get("http://open-api.myhelsinki.fi/v1/events/?tags_search=sports")
      .then(response => CircularJSON.stringify(response.data));
  } catch (error) {
    console.error("Axios error: " + error);
  }
};
app.get("/", async (req, res, next) => {
  try {
    const events = await getEvents();
    res.header("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(events));
  } catch (error) {
    next(error);
  }
});

app.get("/tags", async (req, res, next) => {
  try {
    const events = await getTagSearch();
    res.header("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(events));
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => console.log("Server running in port: " + port));
