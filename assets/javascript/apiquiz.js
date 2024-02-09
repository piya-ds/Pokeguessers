// -------------------getting DOM element

const username = document.getElementById('username');
const progressbarfull = document.getElementById('progressbarfull');
const pockemonimg = document.getElementById('pokemonimg');
const optionsContainer = document.getElementById('options');
const maincontainer = document.getElementById('container');
const loadingcontainer = document.getElementById('submitquiz');
const submitButton = document.getElementById('finishquiz')



// create and initialize global variable 

const usedPokemonId = [];
let showLoading = false;
let count = 0;
let total = 10;
let pass = 0;

// --------------------function to fetch pockeman
/** function to fetch pokeman using RESTFUL API  with ID  */

async function fetchPokemonById(id){

    showLoading = true;
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

    // if (showLoading ) {
    //     showLoadingWindow();
    //    // hidePuzzleWindow();
    //   }
    

    if(count == 10){

        hidePuzzleWindow();
    }
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

        if (options.length === 4) {
            showLoading = false;
        }

    
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
    
    //----------Hide / Unhide HTML elements based on async status

    // if (!showLoading) {
    //     hideLoadingWindow();
    //     showPuzzleWindow();
    //   }
    
      
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

        event.target.classList.add('wrong');
    }

    //---------------------load question with 1 sec delay

    setTimeout(()=>{

        showLoading = true;
        loadQuestionWithOption();
    },1000);

    submitButton.addEventListener('onClick', () => {

        if(pass >= 7){
           showConfetti();
        }
    })
}

/**---------------- function to shuffle option so that correct option should not display at first place */

function shuffleOptions(array){

    return array.sort(() => Math.random() - 0.5); 
}

// -------------Hide loading window

// function hideLoadingWindow() {

//     loadingcontainer.classList.add("hide");
//   }

  // ----------------Show loading window
// function showLoadingWindow() {
//     mainContainer.classList.remove("show");
//     //loadingContainer.classList.remove("hide");
//     //loadingContainer.classList.add("show");
//   }
  
//   //-------------- Show puzzle window
//   function showPuzzleWindow() {
//    // loadingContainer.classList.remove("show");
//     mainContainer.classList.remove("hide");
//     mainContainer.classList.add("show");
//   }
  
  //-------------------Hide puzzle window
  function hidePuzzleWindow() {
    mainContainer.classList.add("hide");
  }
  
  //---------------show confetti

  function showConfetti(){
    const ready = () => {
        setTimeout(function() {
            confetti.start();
        },1000);
    }
  }