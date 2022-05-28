//$(function () {

    const openNav = document.querySelector('.nav-open');
    const closeNav = document.querySelector('.nav-close');
    const overlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelector('.nav-links');

    
    const openNavigation = () => {
        if(overlay.style.display = "none") {
            overlay.style.display = ""
        }
        openNav.style.display = "none";
        closeNav.style.display = "block";
    }
    
    const closeNavigation = () => {
        if(overlay.style.display = "flex") {
            overlay.style.display = "none"
        }
        closeNav.style.display = "none";
        openNav.style.display = "";
    }
    
    openNav.addEventListener('click', () => {
        console.log('Nav-manu clicked');
    });

    openNav.addEventListener('click', () => {
        /* navLinks.setAttribute('data-aos', 'fade-up'); */
        openNavigation();
    });

    //openNav.addEventListener('click', () => { openNavigation() });
    closeNav.addEventListener('click', () => { 
        
        closeNavigation() 
    });
//});