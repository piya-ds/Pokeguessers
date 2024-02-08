// -------------------getting DOM element

const username = document.getElementById('username');
const progressbarfull = document.getElementById('progressbarfull');
const pockemanimg = document.getElementById('pokemanimg');
const options = document.getElementById('options');
const maincontainer = document.getElementById('container');
const loadingcontainer = document.getElementById('loadingContainer');



// create and initialize global variable 

const usedPokemanId = [];
let showLoading = false;
let count = 0;
let total = 5;
let pass = 0;

// --------------------function to fetch pockeman
/** function to fetch pokeman using RESTFUL API  with ID  */

 async function fetchPokemanById(id){

    showLoading = true;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
 }

 /**--------access response from API and extract useful data  */

 async function testFetch(){

    const pokeman = await fetchPokemanById(getRandomPokemanId());
    console.log(pokeman.name);
 } 

testFetch();
 /** ---------function to generate random number to fetch pokeman */

 function getRandomPokemanId(){

    return Math.floor(Math.random() * 151) + 1;
 }

 /** --------------------Function to generate multiple choice for the question using getRandomPokemanId 
    *     and one must be correct out of them-----------------  */

 async function loadQuestionWithAnswer(){

    if(showLoading){
    
    }

    //------- generate random option for question but first get the correct answer 

    let pokemanId = getRandomPokemanId();

    while(usedPokemanId.includes(pokemanId)){

        pokemanId = getRandomPokemanId();
    }

    usedPokemanId.push(pokemanId);
    

 }