const PRIMARY_NAV =  document.querySelector(".primary-navigation");
const NAV_TOGGLE = document.querySelector(".mobile-nav-toggle");
const SETTINGS_BTN = document.querySelector(".settingsbtn");
const SETTINGS_OPTIONS = document.querySelector('.settings-options');
const PLAY_BTN = document.querySelector(".playbtn");
const PLAY_OPTIONS = document.querySelector('.play-options');
const CLASSIC_BTN = document.querySelector('.classicbtn');
const CLASSIC_OPTIONS = document.querySelector('.classic-options');
const TOURNAMENT_BTN = document.querySelector('.tournamentbtn');
const TOURNAMENT_OPTIONS = document.querySelector('.tournament-options');
const PLAYERS_BTN = document.querySelector('.playersbtn');
const PLAYERS_OPTIONS = document.querySelector('.players-options');
const PLAYERS_2_BTN = document.querySelector('.players-2-btn');
const PLAYERS_3_BTN = document.querySelector('.players-3-btn');
const PLAYERS_4_BTN = document.querySelector('.players-4-btn');
const PLAYERS_SELECTION = document.querySelector('.players-selection');


NAV_TOGGLE.addEventListener('click', (e)=>{
    e.preventDefault();
    const mobile_hamburger_visibility = PRIMARY_NAV.getAttribute('data-visible');

    if (mobile_hamburger_visibility === "false"){
        PRIMARY_NAV.setAttribute("data-visible", true);
        NAV_TOGGLE.setAttribute('aria-expanded', true);
    }   else if(mobile_hamburger_visibility === "true"){
        PRIMARY_NAV.setAttribute('data-visible', false);
        NAV_TOGGLE.setAttribute('aria-expanded', false);
    }
})

SETTINGS_BTN.addEventListener('click', (e)=>{
    e.preventDefault();
    const settings_dropdown_vsisibility = SETTINGS_OPTIONS.getAttribute('data-visible');

    if (settings_dropdown_vsisibility === "false"){
        SETTINGS_OPTIONS.setAttribute("data-visible", true);
    }   else if(settings_dropdown_vsisibility === "true"){
        SETTINGS_OPTIONS.setAttribute('data-visible', false)
    }
})

PLAY_BTN.addEventListener('click', (e)=>{
    e.preventDefault();
    const play_options_dropdown = PLAY_OPTIONS.getAttribute('data-visible')
    if(play_options_dropdown === "false"){
        PLAY_OPTIONS.setAttribute('data-visible', true);
        PRIMARY_NAV.setAttribute('data-visible', false);
        NAV_TOGGLE.setAttribute('aria-expanded', false);
    } else if(play_options_dropdown === "true"){
        PLAY_OPTIONS.setAttribute('data-visible', false);
    }
})

CLASSIC_BTN.addEventListener('click', (e)=>{
    e.preventDefault();
    const classic_options_dropdown = CLASSIC_OPTIONS.getAttribute('data-visible')
    if(classic_options_dropdown === "false"){
        CLASSIC_OPTIONS.setAttribute('data-visible', true);
    } else if(classic_options_dropdown === "true"){
        CLASSIC_OPTIONS.setAttribute('data-visible', false);
    }
})

TOURNAMENT_BTN.addEventListener('click', (e)=>{
    e.preventDefault();
    const tournament_options_dropdown = TOURNAMENT_OPTIONS.getAttribute('data-visible')
    if(tournament_options_dropdown === "false"){
        TOURNAMENT_OPTIONS.setAttribute('data-visible', true);
    } else if(tournament_options_dropdown === "true"){
        TOURNAMENT_OPTIONS.setAttribute('data-visible', false);
    }
})

PLAYERS_BTN.addEventListener('click', (e)=>{
    e.preventDefault();
    const players_options_dropdown = PLAYERS_OPTIONS.getAttribute('data-visible')
    if(players_options_dropdown === "false"){
        PLAYERS_OPTIONS.setAttribute('data-visible', true);
    } else if(players_options_dropdown === "true"){
        PLAYERS_OPTIONS.setAttribute('data-visible', false);
    }
})

PLAYERS_2_BTN.addEventListener('click', (e)=>{
    e.preventDefault();
    PLAYERS_SELECTION.innerHTML = "2 Players Selected";
    PLAYERS_SELECTION.style.fontSize = "1rem"
    PLAYERS_SELECTION.style.fontWeight = "1000"
})

PLAYERS_3_BTN.addEventListener('click', (e)=>{
    e.preventDefault();
    PLAYERS_SELECTION.innerHTML = "3 Players Selected";
    PLAYERS_SELECTION.style.fontSize = "1rem"
    PLAYERS_SELECTION.style.fontWeight = "1000"
})

PLAYERS_4_BTN.addEventListener('click', (e)=>{
    e.preventDefault();
    PLAYERS_SELECTION.innerHTML = "4 Players Selected";
    PLAYERS_SELECTION.style.fontSize = "1rem"
    PLAYERS_SELECTION.style.fontWeight = "1000"
})

// $('.playbtn').click(function() {
//     console.log('hi');
//     $('.play-options').each(function() {
//             $(this).animate({
//                 top: '200px',
//             }, 500 ); 
//     });
// });