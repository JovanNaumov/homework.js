var favoriteRecipe = {
    title:  "Wrap",
    servings: "Servers:1",
     
};

    console.log(favoriteRecipe);  
    console.log(favoriteRecipe.title);
    console.log(favoriteRecipe.servings);

    var ingredients2 = "ingredients:";
    console.log(ingredients2);
    var ingredients = [
        "tortila" , "tomatto" , "onions" , "chicken " 
    ];
    console.log(ingredients[0]);
    console.log(ingredients[1]);
    console.log(ingredients[2]);
    console.log(ingredients[3]);

    //hw2

    var programming_languages = ["Python" , "Java" , "C++" , "#C" , "JavaScript" , "SQL" , "PHP" , "GO"];
    console.log(programming_languages);
    console.log(programming_languages.length);
    var removelast = programming_languages.pop();
    console.log(programming_languages);
    var new_lang = programming_languages.splice(2,1, "Kotlin");
    console.log(programming_languages);