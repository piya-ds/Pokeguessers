![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Project: Pokemon Guesser App (Pokeguesser)

## Description
Welcome to Pokeguesser - your one stop quiz about Pokemons! Our site is designed to teach new people to pokemon and already familiar users can check their knowledge from 151 pokemon. Take a quiz if you are brave or you just want to see how it works, or get to know each type of the pokemon ahead of taking a quiz. Whether you are a complete newbie or a series veteran, our site is ready to test your knowledge about pokemons no matter what. Start the quiz today, and find out how much you really know!

## Team members

- [Cian] - Team Lead
- [Priyanka] - Developer
- [Vedran] - Developer
- [Jean] - team member for ideation phase

## Technologies used

- Github
- Gitpod
- Visual Studio Code
- Chat GPT - Chat GPT: https://chat.openai.com
- PokeAPI - RESTFUL API: https://pokeapi.co/api/v2
- HTML 5 /JS /CSS 3 /API
- JS library: https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js

## Website Structure
### Pages

- Index
- Pokemon Types Quiz
- Pokemon Types
- Pokedex

### Architecture

- Landing page includes hero image and links to other destinations
- consitent and clean navbar and footer and sidebar (navbar but in hamburger menu for smaller devices)
- Out of 4 pages total, 3 have detailed descriptions about item contents on the page, and all have small images or logos of the items from/related to the pages 

## Ideation

### Collaborative Ideation Doc
https://drive.google.com/drive/folders/13JOSnCfXt0f5JJC7kh8--VlJ4cqFHQ7d?usp=sharing

### Wireframes
https://imgur.com/a/QH3d7dY"

### User Stories

 - I want to play a Pokémon quiz
 - I want the site to have a visually appealing and intuitive interface
 - I want to be able to start a new Pokémon quiz
 - I want Immediate feedback on my answer
 - I want questions to include Images of the Pokemon
 - I want to be presented with multiple-choice questions
 - I want to finish a quiz and see my final score
 - I want the option to play the quiz in different difficulty levels
 - I'm unfamiliar with pokemon, I want to learn what I need to know for the quizzes
 - I want to see my current score as I progress through the quiz
 - I want to see how many questions are remaining
 - Receive a virtual bade or reward for completing the quiz successfully
 - I want to be able to skip a question if I'm unsure and come back to it later
 - Review the questions I answered incorrectly after completing the quiz
 - Share my quiz results on social media

### Bugs / issues

- Repeating merge conflicts between separate forks, main repo and git issues overall (solved eventually thanks to Martin)
- To avoid further issues we've decided to separate css and js files for each of the pages to keep it more simple per page. This enabled us to catch things getting out of hand faster and not messing up other parts of pages
- An issue where at 968px width cards would show up as one per row and then at 768px would go back to 2 per row
- Fixed touch not working on mobile devices by commenting out one of media query's
- Fixed sidebar not working properly
- Fixed main heading not displaying properly on mobile
- Fixed an issue where question and score would continue past the set limit meaning the quiz couldn't end

### Homepage Taglines

- "Ready to check your pokemon knowledge with our quiz?"
- "Think you know every pokemon from generation 1? Think again! (you probably don't)

### Future Improvments

- add levels to the quiz which users can progress through
- we'd like to add pokemon types quiz which challanges users knowledge of pokemon types
- implement submiting the username to the site (username would be displayed across pages)
- provide users with better quiz results feedback (eg. summary of quiz questions and answers provided)
- reward users with badges (displayed via html upon completion of quiz levels)
- more variation in available quizes
- overall improvments to styling and site
  
- user profile page/login (further away)
- add leaderboards, so other people could see who did better (further away)

### Screenshots of the Finished Project


## Meeting Notes 
02/02/2024
1st Meeting:
Discussion of which brief we want to do: Settled on either Brief 1 Rock Paper Scissors… or 2 Quiz
Discussed ideas for project
Discussed use of API vs No API (first decision as this informed what the content of project would be [Due to sourcing appropriate API with good documentation].
Jean had found a Pokemon API that seems very usable and suited to a quiz style project > group liked this idea but agreed we should ensure we look into more potential ideas over weekend.

2nd Meeting:	
Kanban board in Github, working correctly?
Iterative board vs Normal board -> ensuring Kanban board was selected when creating Kanban.
Discussing splitting of work
Working in teams of 2
Ensure initial structure and wireframing completed by group, then split off into 2 x 2 groups to develop set of pages (Priya and Jean more interested in API use)
Current Plan of Action
Brainstorming and finding ideas over weekend + Monday
Finalize Idea and Team name etc. Monday
Wireframing User stories etc. complete on Tuesday
Wednesday: Begin Coding


05/02/2024
Pokemon Quiz Idea decided on for its use of API.
Integrate comment site structure during Mobbing of basic website structure
Priya mentioned we should be posting videos and links we are using individually to slack 
Jean mentioned function comments - ensuring we document.
We discussed timeframes that we think we can complete key milestones for the project. Quiz, API etc. and we’re confident we can get it done.
Bootstrap vs no bootstrap undecided, deciding tomorrow during wireframing after we have better idea of the site.



05/02/2024
Decide on a Name: 			Pokeguessers
Decide on Wireframing Tool: 		Photoshop
Decide on PM / Kanban:		Github Boards
Decide on Bootstrap:			No bootstrap
Decide on API’s:			We’re using an API for part of the project. PokeAPI

Discuss Hackathon 1 feedback
We suffered deciding on bootstrap or not too late. 
Decide on bootstrap during wireframing.
Testing commenting the code.

Optional. Chat about roles & responsibilities
Will be discussing this, once site + wireframing is figured out.
Type effective page -> chance to add nice hover effects and modal effects. Then base a quiz around it.





06/02/2024
Discussed plan of action: User stories (simple) and MOSCOW approach:

Plan of action:
Stick with original 151 pokemon for simplicity and commonly known to users.

Guess the pokemon API quiz (2 or 3 lives)
Difficulty Options:
Level 1: 10 Questions
Level 2: 20 Questions 
Level 3: 50 Questions etc.

Other Difficulty option ideas: 
True or false answer choice
Only two answers for easy quiz
Time constraints for more difficulty

API attributes We can focus on grabbing: Pokemon Picture, Pokemon no., Name, Type

Manual Quiz 
-	A quiz that challenges your pokemon type knowledge
- 	20 Questions 
- 	Randomized Type Questions
- 	“The Fire type is strong against which of these types: (water), (rock), (electric), (ground)”

Pokemon type Effectivity chart page so that users can understand this info before doing the quiz.

Text animation for winner?? Upon completing quiz, display animation overlay. (Party poppers, sound effect etc.)

Discussed user stories, used ChatGPT to prompt us with some and hand picked ones we felt were relevant.

Discussed some initial wireframing ideas, create some of our own user stories based on the ideas.

07/02/2024

Found out that Jean may not be attending.
Cian is new Team Lead.
Need to create new project Repo and link the Kanban board over.
How do we feel about the scope?

Split off for now:
Vedran: Deciding on page of project to tackle 
Cian: Working on Nav Bar / remaking User stories / Kanban
Priya: API Calls + Quiz 

Reconvene at 12 to figure out what we’re doing after lunch.
Convened at 12: 
Jean is continuing work on Pokedex and calling api
Priya is continuing working on API Quiz
Vedran: Working on Pokemon types, on hover page.
Reconvening at 3pm for final meeting of the day
Convened at 3:
Vedran: Continuing progress and design of types page
Priya: continuing API quiz functionality
Cian: basic Nav bar and footer done, moving on to index
Jean: pokedex page.

08/02/2024
Hackathon day 1
- Merge conflicts between vedran and main repo happening a lot
- Resolved partially by setting corret origin within VS studio.
- Resolution we’ve come to is keep separate css js and html files for each page as stop gap. That way we can quickly accept incoming changes to those pages as they are separate from the rest when merging.
- Media Query breakpoints, stopping compatibility for Iphone SE 340px

09/02/2024
Hackathon day 2
- Focused on project implementation and fixes.
- Delegated tasks and reduced scope appropriately



## Acknowledgments

## References
### Videos / Tutorials 

- How to make a quiz: 
  https://www.youtube.com/watch?v=PBcqGxrr9g8&t=528s

- Simple Responsive Navbar: 
  https://www.youtube.com/watch?v=U8smiWQ8Seg

- Tips for simple responsive layouts
  https://www.youtube.com/watch?v=VQraviuwbzU

- Making a pokedex with js, css, html using poke api:
  https://www.youtube.com/watch?v=56VjdqcdakQ

- Building a website using an API, (Pokemon API):
  https://www.youtube.com/watch?v=ciGkWKdmFDs

- Pokemon API tutorial for beginners:
  https://www.youtube.com/watch?v=V_cMYN3jAjg

- Pokemon Card Creator:
  https://www.youtube.com/watch?v=_JUSpgchD1I

- Make a SIMPLE pokedex:
  https://www.youtube.com/watch?v=dVtnFH4m_fE

- Who’s that pokemon!? Multiple choice quiz using HTML / CSS / JS
  https://www.youtube.com/watch?v=bGiUgKvz60s

- Dealing with Hover on Mobile:
  https://www.youtube.com/watch?v=uuluAyw9AI0

- Creating a simple Hero image responsive:
  https://www.youtube.com/watch?v=6KSKn9xIxUQ

- Responsive Banner Hero + text:
  https://www.youtube.com/watch?v=TMMvM5FTAQ0

- Learn Flexbox in 8 minutes:
  https://www.youtube.com/watch?v=phWxA89Dy94

### References 
- The loadout:
  https://www.theloadout.com/pokemon-type-chart
  
- Getting a Username from a form and implementing it as a text in a <p> element.
  https://stackoverflow.com/questions/66466217/how-to-take-a-username-from-a-form-and-put-into-a-paragraph-html
  
- Pokedex Quiz.
  https://sg.portal-pokemon.com/play/pokedex/quiz

- Pretty Pokedex
  https://sg.portal-pokemon.com/play/pokedex

- List of Pokemon (Simple Pokedex)
  https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_National_Pokédex_number


### Shoutouts

- Coffee and Tea
- Staff at Trend Micro for hosting the event and their presentation

#### Big Thanks To Martin for git help
