const apiKey = "6adb1e8b4d4c0af1c1fd8c928b910d67";
const url = "http://localhost:3000/getRecipe";

var response;
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
    
    .then(function(data) {
      
      console.log(data);
      response = JSON.parse(data);
      let html = "";
      response.recipes.map((recipe, index) => {
        
        html += `
        <li>
          <img src=${recipe.image_url} + '?key=${apiKey}'/>
          <span>${recipe.title}</span>
        </li>
      `;

      // <li id=${this.index} class="col-lg-4 col-md-4 col-xs-12">            
      //       <img src=${this.recipe.image_url} class="recipe-img" />
      //       <span class="recipe-title">
      //       <p><b>Title:</b> ${this.recipe.title}</p>
      //       <p><b>Publisher:</b> ${this.recipe.publisher}</p>
      //       <p><b>Social Rank:</b> ${this.recipe.social_rank}</p>
      //       <a class="recipe-link" href="${this.recipe.source_url}"> 
      //       <p><b>Recipe Website:</b> "Click Here"</p>
      //       </span>
      //       </a>
      //   </li>;
      });
      document.getElementById("recipes").innerHTML = html;
    })
    .catch(function(error) {
      console.log(error);
    });
}
