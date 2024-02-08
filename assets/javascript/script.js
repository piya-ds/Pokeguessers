<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3dde6300a91ac3a4e144dc7e322947131caa6492
>>>>>>> 003994fbaa5e872eb68f622904a2cf90e821a81d
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
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
});
=======
function showSidebar(){
    console.log("I am running the showsidebar function");
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    console.log("I am closing the sidebar");
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
>>>>>>> 820c58935ffe1a4b368d2a7aa9ee0112df9164b9
>>>>>>> 3dde6300a91ac3a4e144dc7e322947131caa6492
>>>>>>> 003994fbaa5e872eb68f622904a2cf90e821a81d
