const apiKey = "6adb1e8b4d4c0af1c1fd8c928b910d67";
const url = "http://localhost:3000/getRecipe";
var response;

// starts API call with ingredient from input
function submitFood() {
  var food = document.getElementById("food").value;

  fetch(url, {
    method: "post",
    body: JSON.stringify({
    query: food
    }),
    headers: {
      Accept: "application/json"
    }
  })

    .then(resp => resp.json())
    // console.log(resp);
    .then(function(data) {
      console.log(data);

      document.getElementById("recipes").innerHTML = html;
      response = JSON.parse(data);
      let html = "";

      if(data != undefined){

      response.recipes.map((recipe, index) => {
        
        html += 
      //   <li>
      //     <img src=${recipe.image_url} + '?key=${apiKey}'/>
      //     <span>${recipe.title}</span>
      //   </li>
      // ;   // also need the back ticks above

              `<li id=${index} class="col-lg-4 col-md-4 col-xs-12"> 
              <a class="recipe-link" href="${this.recipe.source_url}">           
              <img src=${recipe.image_url} + "?key=${apiKey}" class="recipe-img" />
              <span class="recipe-title">
              <p><b>Title:</b> ${recipe.title}</p>
              <p><b>Publisher:</b> ${recipe.publisher}</p>
              <p><b>Social Rank:</b> ${recipe.social_rank}</p>
              </span>
              </a>
              </li>`;
      });
      }else{
          html = `<div class="alert alert-primary" role="alert">
                  No items found.
                  </div>`;
          }
       // document.getElementById("recipes").innerHTML = html;
      })

    .catch(function(error) {
      console.log(error);
    });
}
