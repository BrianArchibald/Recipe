const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const request = require("request");
require('dotenv').config()
const URL = "https://www.food2fork.com/api/search";
const path = require('path');


const APIKey = process.env.APIKey;

app.use(cors());
app.use(bodyParser.text());

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/getRecipe", (req, res, next) => {
  request.post(
    {
      url: URL,
      formData: {
      	key: APIKey,
      	q: JSON.parse(req.body).query
      }
    },
    (err, response) => {
      if (err) return res.json({ message: "Failed" });
      res.json(response.body);
    }
  );
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening...");
});
