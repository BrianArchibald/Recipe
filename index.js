const apiKey = "6adb1e8b4d4c0af1c1fd8c928b910d67";
const url = "http://localhost:3000/getRecipe";
//const input = document.getElementById("food");

// Request: http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken

// food.replace(/," "/g, %20);
// var food = document.getElementById("food").value;
// food.replace(",", "%20")

//food.replace(/,/g, "");

document.getElementById("ingredients").addEventListener("submit", function(e) {


      
    //document.getElementById("loading").style.display = "block";  
    submitFood(document.getElementById("food"));

      

    e.preventDefault();
}, false);

var response;
function submitFood() {
  let preFood = document.getElementById("food").value;
  let food = preFood.replace(/,/g, "");

  //document.getElementById("recipes").style.display = "hidden";

  console.log(food);
  
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
        if(response.count > 0) {
      

        response.recipes.map((recipe, index) => {
       

          

        // document.getElementById("loading").style.display = "none";
        // document.getElementById("recipe-container").style.display = "visible";
        
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

            
              document.getElementById("no-data-container").innerHTML = noData;  
              noData = 
              `<div class="no-data">No Items Found.</div>`;
            }
          
      document.getElementById("recipes").innerHTML = html;
    })
    .catch(function(error) {


      console.log(error);
    });
}
