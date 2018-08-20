const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const request = require("request");
const APIKey = "6adb1e8b4d4c0af1c1fd8c928b910d67";
const URL = "http://food2fork.com/api/search";

app.use(cors());
app.use(bodyParser.text());
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
app.listen(3000, () => {
  console.log("Server is listening...");

});

