function initForm() {
  // debugger;
  const formTemplate = document.getElementById('recipe-form-template').innerHTML;
  console.log(formTemplate);
  const template = Handlebars.compile(formTemplate);
  console.log("template:", template)
  document.getElementsByTagName("main")[0].innerHTML = formTemplate;
}


function createRecipe() {
  // debugger;
  const recipeName = document.getElementsByName('name')[0].value;
  const recipeDescription = document.getElementsByName('description')[0].value;
  const recipeIngredients = document.getElementsByName('ingredients');

  console.log(recipeName);
  console.log(recipeDescription);
  console.log(recipeIngredients);

}


function init() {
  //put any page initialization/handlebars initialization here
  initForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
