const myOpen = document.querySelector( '#open' ),
    myClose = document.querySelector( '#close' ),
    container = document.querySelector( '.container' ),
    nav = document.querySelector( '.nav' );

myClose.addEventListener( 'click', e => {
    e.stopPropagation();
    container.classList.remove( 'show-nav' );
    nav.classList.remove( 'show-nav' );
}, { capture: true} )



myOpen.addEventListener('click', e => {
    e.stopPropagation();
    container.classList.add( 'show-nav' );
    nav.classList.add( 'show-nav' );
    console.log('hi')
}, { capture: true} )

/*=========================== Start Prog ======================================= */
const next = document.querySelector( '#next' ),
    prev = document.querySelector( '#prev' ),
    sectionProg = document.querySelector( '.my-prog' ),
    prog = document.querySelector( '.prog' ),
    circles = document.querySelectorAll( '.prog-circle' );
    
let counter = 1;

next.addEventListener('click', e => {
    e.preventDefault();
    counter++;
    if (counter > circles.length) {
        counter = circles.length;
    }
    update();
});

prev.addEventListener('click', e => {
    e.preventDefault();
    counter--;
    if (counter < 1) {
        counter = 1;
    }
    update();
})


function update() {
    circles.forEach((circle, index) => {
        if (index < counter) {
            circle.classList.add( 'color' );
        } else {
            circle.classList.remove( 'color' );
        }
    })
    
    let actives = document.querySelectorAll( '.color' );
    prog.style.width = ( ( actives.length - 1 ) / ( circles.length - 1 ) * 100 ) + '%'; 

    if (counter === circles.length) {
        next.disabled = true;
    } else if (counter === 1) {
        prev.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}

/*================================ Start Search =========================== */

let openSearch = document.querySelector( '#search-btn' ),
    sectionSearch = document.querySelector( '.animation-icon' );
    searchInput = document.querySelector('#search-input');

    openSearch.addEventListener('click', toggleSearch)
    
    function toggleSearch() {
        sectionSearch.classList.toggle( 'animate' );
        searchInput.focus();
    }

setTimeout( () => toggleSearch(), 1500 );

// ========================= Start Animation Scrolling ================================

window.addEventListener( 'scroll', animationScrolling)
animationScrolling();
function animationScrolling() {
    let boxes = document.querySelectorAll( '.boxes' );
    let triggerBottom = window.innerHeight / 5 * 4; // 631.2
    console.log( triggerBottom );
    boxes.forEach((box) => {
        let offSetBox = box.getBoundingClientRect().top;
        if (offSetBox < triggerBottom) {
            box.classList.add( 'scroll-animate' );
        } else {
            box.classList.remove( 'scroll-animate' );
        }
    })
}
