// -------------------getting DOM element

const username = document.getElementById('username');
const progressbarfull = document.getElementById('progressbarfull');
const pockemonimg = document.getElementById('pokemonimg');
const optionsContainer = document.getElementById('options');
const maincontainer = document.getElementById('container');
const loadingcontainer = document.getElementById('loadingContainer');



// create and initialize global variable 

const usedPokemonId = [];
let showLoading = false;
let count = 0;
let total = 5;
let pass = 0;

// --------------------function to fetch pockeman
/** function to fetch pokeman using RESTFUL API  with ID  */

async function fetchPokemonById(id){

    //showLoading = true;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
}

 
 /** ---------function to generate random number to fetch pokeman */

function getRandomPokemonId(){

    return Math.floor(Math.random() * 151) + 1;
}

 /** --------------------Function to generate multiple choice for the question using getRandomPokemanId 
    *     and one must be correct out of them-----------------  */

//  async function test(){
//     const data = await fetchPokemonById(getRandomPokemonId());
//     console.log(data.name);
//  }

//  test();

async function loadQuestionWithOption(){

    //------check if the pokemon question is already played

    let pokemonId = getRandomPokemonId();

    while(usedPokemonId.includes(pokemonId)){

        pokemonId = getRandomPokemonId();
    }

    //------if it is not fetch pokemon data

    const pokemon = await fetchPokemonById(pokemonId);

    let options = [pokemon.name];
    let optionsId = [pokemonId];

    //-----------------generate 3 ramaining random options

    let randomPokemanId = getRandomPokemonId();

    while(optionsId.length < 4){

        while(optionsId.includes(randomPokemanId)){

            randomPokemanId = getRandomPokemonId();
        }

        const randomPokemon = await fetchPokemonById(randomPokemanId);
        const randomPokemonOption = randomPokemon.name;

        options.push(randomPokemonOption);
        optionsId.push(randomPokemanId);
    
    }
    
    //----------shuffle options so that correct option should not be always on first place

    shuffleOptions(options);

    //------------- set the image DOM element to the pokemon 

    pockemonimg.src = pokemon.sprites.other.dream_world.front_default;

    optionsContainer.innerHTML = ""; // Reset
    options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = (event) => checkAnswer(option === pokemon.name, event);
      optionsContainer.appendChild(button);
    });
  

}

loadQuestionWithOption();

function checkAnswer(isCorrect, event){

    //-----------check button if it is selected

    const selectedButton = document.querySelector(".selected");

    if(selectedButton){
        return;
    }

    event.target.classList.add('selected');

    count++;

    if(isCorrect){

        pass++;
        event.target.classList.add('correct');
    }
    else{

        event.target.classList.add('incorrect');
    }

    //---------------------load question with 1 sec delay

    setTimeout(()=>{

        loadQuestionWithOption();
    },1000);
}

/**---------------- function to shuffle option so that correct option should not display at first place */

function shuffleOptions(array){
    
    return array.sort(() => Math.random() - 0.5); 
}