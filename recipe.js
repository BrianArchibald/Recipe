// function createNode(element) {
// 	// create type of element you pass in the param
// 	return document.createElement(element);
// }

// function append(parent, el) {
// 	// apped the second param to the first one
// 	return parent.appendChild(el);
// }


const recipeList = document.getElementById('recipes');
const url = "http://food2fork.com/api/search?"
//var ingredients = "";
//const apiKey = "key={6adb1e8b4d4c0af1c1fd8c928b910d67}";
//const url = apiPath + apiKey + '&q=' + ingredients;

fetch(url, {
	key: 6adb1e8b4d4c0af1c1fd8c928b910d67,
	q: //ingredients separated by commas,
	sort: r
})


	// transform into json
	.then((resp) => resp.json()) 
	console.log(resp);
	
	.then(function(data) {
		// create and append the recipe list to the ul
		let recipes = data.results;

		return recipes.map(function(recipe) {
			let li = createNode('li'),
				img = createNode('img'),
				span = createNode('span');

		img.src = recipe.picture.food2fork; // need to set the image source

		span.innerHTML = `${recipe.name}`; // HTML of span to be name of recipe

		append(li, img);
		apppend(li, span);
		append(ul, li);

		})
	})

	.catch(function(error) {
		// if there is an error, catch here
		console.log(error);
	});


	const submitButton = document.getElementById('submit');

	submitButton.addEventListener(onclick, askForRecipes);

	function askForRecipes() {
		loadJSON(url, gotData)
	}