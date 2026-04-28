// favicon
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = "Images/favicon.png";
    document.getElementsByTagName('head')[0].appendChild(link);
})();

// styles
(function() {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = "Styles/main_page.css";
    document.getElementsByTagName('head')[0].appendChild(link);
})();
