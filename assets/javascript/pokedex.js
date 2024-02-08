const pokemonCount = 151;
var pokedex = {} // {1 : {"name : "bulbasaur", "img" : url, "type" : ["grass", "poison"] etc.} }

window.onload = async function() {
    /*test fetching first pokemon data*/
    //getPokemon(1);


    /*Handles looping through [apiurl]pokemon/1....pokemon/2 etc. etc. */
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);
        //console.log(i);

        //Loops through 151 pokemon and creates divs in format of: .div id="1" class="pokemon-name">THEPOKEMON</div>
        let pokemon = document.createElement("div");
        pokemon.id = i;
        pokemon.innerText = i.toString() + ". " + pokedex[i]["name"].toUpperCase();
        pokemon.classList.add("pokemon-name");

        pokemon.addEventListener("click", updatePokemon);

        document.getElementById("pokemon-list").append(pokemon);
        
    }

    //Initialize page on load with first pokemon (bulbasaurs) description
    document.getElementById("pokemon-description").innerText = pokedex[1]["description"];

    console.log(pokedex);
}

async function getPokemon(num){
    /*creating variable to run through 151 iterations using num to string to grab first original 151 pokemon*/
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let res = await fetch(url);

    let pokemon = await res.json();
    //console.log(pokemon);

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["front_default"];

    res = await fetch(pokemon["species"]["url"]);
    let pokemonDescription = await res.json();

    pokemonDescription = pokemonDescription["flavor_text_entries"][9]["flavor_text"];

    pokedex[num] = {"name" : pokemonName, "img" : pokemonImg, "types" : pokemonType, "description" : pokemonDescription };
}

function updatePokemon(){
    // Grabs the pokemon-img element, and sets its source to our api array, this.id is = to the i of our for loop, so it will fetch that pokemon numbers img from our populated array
    document.getElementById("pokemon-img").src = pokedex[this.id]["img"];

    //clear previous shown types
    let typesDiv = document.getElementById("pokemon-types");
    //while this div has tags in it: clear it
    while (typesDiv.firstChild) {
        typesDiv.firstChild.remove();
    }

    //update shown types
    let types = pokedex[this.id]["types"]; //returns array as potentially multiple types per entry (pokemon)
    for(let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        type.innerText = types[i]["type"]["name"].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]); //using to add background color and font color
        typesDiv.append(type); //Appends our spans we're creating to the div
    }

    //update description
    document.getElementById("pokemon-description").innerText = pokedex[this.id]["description"];
}