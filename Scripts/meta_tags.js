// favicon
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = "Images/favicon.png";
    document.getElementsByTagName('head')[0].appendChild(link);
})();

//font from google fonts (Manufacturing Consent)
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap";

document.head.appendChild(fontLink);



document.querySelectorAll('.commentary-link').forEach(link => {
    link.addEventListeners('click', function(e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if(targetElement) {
            targetElement.scrollIntoView({
            });
        }
    });
});



