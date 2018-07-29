// function createNode(element) {
// 	// create type of element you pass in the param
// 	return document.createElement(element);
// }

// function append(parent, el) {
// 	// apped the second param to the first one
// 	return parent.appendChild(el);
// }

//const recipeList = document.getElementById("recipes");
// const url = "http://food2fork.com/api/search";
const url = "http://localhost:3000/getRecipe";
//var ingredients = "";
//const apiKey = "key={6adb1e8b4d4c0af1c1fd8c928b910d67}";
//const url = apiPath + apiKey + '&q=' + ingredients;
// const http = require('http');
// var FormData = require('form-data');
// var fs = require('fs');


const form = new FormData();
// form.append("key", "6adb1e8b4d4c0af1c1fd8c928b910d67");
// form.append("q", "potato");

fetch(url, {
  method: "post",
  body: JSON.stringify({
  	"query" : document.getElementById
  }),
  headers: {
    'Accept': 'application/json'
  },
})
  .then(resp => resp.json())
  // console.log(resp);

  .then(function(data) {
    // create and append the recipe list to the ul
    //let recipes = data;
    console.log(data)

    let html = "";
    data.recipes.map((recipe, index) => {
      html += `
        <li>
          <img src=${recipe.image_url + '?key=6adb1e8b4d4c0af1c1fd8c928b910d67'}/>
          <span>${recipe.title}</span>
        </li>
      `;

     
    });

    document.getElementById('recipes').innerHTML = html;
  })

  .catch(function(error) {
    // if there is an error, catch here
    console.log(error);
  });

// const submitButton = document.getElementById("submit");

// submitButton.addEventListener(onclick, askForRecipes);

// function askForRecipes() {
//   loadJSON(url, gotData);
// }

////////////////////////////    ///////

// document.getElementById("ingredients").addEventListener("submit", searchReq);

// function searchReq(e) {
//   e.preventDefault(); // stops form from submitting to a file

//   let ingredient = document.getElementById("food").value;

//   let firsthalfUrl =
//     "http://food2fork.com/api/search?key={6adb1e8b4d4c0af1c1fd8c928b910d67}&q=";
//   let secondhalfUrl = ingredient;
//   let url = firsthalfUrl + secondhalfUrl;

//   fetch(url, {
//     method: "GET",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify({ title: title, body: body })
//   })
//     .then(res => res.json())
//     .then(data => console.log(data));
// }