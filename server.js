const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const request = require("request");
const APIKey = process.env.APIKey;
const URL = "https://www.food2fork.com/api/search";
require('dotenv').config()

app.use(cors());
app.use(bodyParser.text());

app.get('/', (req, res) => {
  return res.json({
    message: 'Welcome',
  })
})

console.log(process.env.APIKey)

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
