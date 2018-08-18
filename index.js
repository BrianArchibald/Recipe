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
        
        html += 
      //   <li>
      //     <img src=${recipe.image_url} + '?key=${apiKey}'/>
      //     <span>${recipe.title}</span>
      //   </li>
      // ;

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
      document.getElementById("recipes").innerHTML = html;
    })
    .catch(function(error) {
      console.log(error);
    });
}
