const APIKey = process.env.APIKey;
const url = "http://localhost:3000/getRecipe";

document.getElementById("ingredients").addEventListener("submit", function(e) {
    submitFood(document.getElementById("food"));
    e.preventDefault();
}, false);

var response;
function submitFood() {
  let preFood = document.getElementById("food").value;
  let food = preFood.replace(/,/g, "");
  
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
      response = JSON.parse(data);
      let html = "";
        if(response.count > 0) {
        response.recipes.map((recipe, index) => {
       
          html += 
          `<li id=${index}>            
                <img src=${recipe.image_url} class="recipe-img" />
                <span class="recipe-info">
                <p class="recipe-title">${recipe.title}</p>
                <p class="publisher"><b>By</b> ${recipe.publisher}</p>
                <a class="a-link" href="${recipe.source_url}"> 
                <p class="link"><b>Click for Recipe</p>
                </span>
                </a>
            </li>`;
        });
        }else{
                html = 
                `<div class="no-data">No Items Found.</div>`;
              }  
        document.getElementById("recipes").innerHTML = html;
      })
      .catch(function(error) {
        console.log(error);
      });
}
