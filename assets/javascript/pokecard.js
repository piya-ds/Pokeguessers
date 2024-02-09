'use strict';

// Get all cards
var cards = document.querySelectorAll('.pokemon-type-card');

// Function to handle mouseenter event
function handleMouseEnter(event) {
    if (window.innerWidth >= 768) {
        var descriptions = this.querySelector('.descriptions');
        descriptions.classList.add('show-descriptions');
        event.target.setPointerCapture(event.pointerId);
    }
}

// Function to handle mouseleave event
function handleMouseLeave(event) {
    if (window.innerWidth >= 768) {
        var descriptions = this.querySelector('.descriptions');
        descriptions.classList.remove('show-descriptions');
        event.target.releasePointerCapture(event.pointerId);
    }
}

// Add event listeners to each card
cards.forEach(function(card) {
    // Add event listener for mouseenter (hover) on larger screens
    card.addEventListener('mouseenter', handleMouseEnter);

    // Add event listener for mouseleave (hover out) on larger screens
    card.addEventListener('mouseleave', handleMouseLeave);

    // Add event listener for tap on mobile devices
    card.addEventListener('click', function() {
        if (window.innerWidth < 768) {
            var descriptions = this.querySelector('.descriptions');
            descriptions.classList.toggle('show-descriptions');
        }
    });
});

// Get all cards
var cards = document.querySelectorAll('.pokemon-type-card');

// Function to toggle darken class on click
function toggleDarken(event) {
    var card = event.currentTarget;
    card.classList.toggle('darken');
}

// Adds event listeners to each card
cards.forEach(function(card) {
    // Add event listener for click on mobile devices
    card.addEventListener('click', toggleDarken);
});

// Footer
const footer = document.querySelector('footer');


function handleScroll() {
    if (window.scrollY > 0 && window.innerHeight + window.scrollY < document.body.offsetHeight) {
        footer.classList.add('hide-footer');
    } else {
        footer.classList.remove('hide-footer');
    }
}

window.addEventListener('scroll', handleScroll);