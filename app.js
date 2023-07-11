const PRIMARY_NAV =  document.querySelector(".primary-navigation");
const NAV_TOGGLE = document.querySelector(".mobile-nav-toggle");
const SETTINGS_BTN = document.querySelector(".settingsbtn");
const SETTINGS_OPTIONS = document.querySelector('.settings-options');

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