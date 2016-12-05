$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	$('.icon-arrow-left-alt').hide();

	// Pinta una noticia en el párrafo que está dentro del DIV callout-news.
	function printNews(){
		var noticia = $('#noticia');

		noticia.append('NUEVAS RECETAS');
	};
	//Mandar llamar la función
	printNews();
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	//FORMA 1
	/*
	for (var i = 0; i < recipesArray.length; i++){
		var recipe = recipesArray[i];
		renderRecipe(recipe);
	}	
	*/

	//FORMA 2 Mandar llamar el arreglo con each
	/*_.each(recipesArray, renderRecipe);*/

	var objectRecipe = _.where(recipesArray, {highlighted:true});
	console.log(objectRecipe);

	renderRecipe(objectRecipe);

	/*$.each(recipesArray, function (ind, objectRecipe) { 
	  console.log('¡Hola :'+objectRecipe+'!'); 
	}); */

	
};


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


