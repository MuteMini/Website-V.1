// Sidebar learned from https://www.w3schools.com/howto/howto_js_sidenav.asp
// learned jQuery and its html function from https://api.jquery.com/html/

const code = '\
<a onclick="openNav()" href="javascript:void(0)" id="open">&equiv;</a>\
<nav id="sidenav">\
    <a onclick="closeNav()" href="javascript:void(0)" id="close">&times;</a>\
    <a href="index.html" id="index">Home</a>\
    <a href="about.html" id="about">About Me</a>\
    <a href="projects.html" id="project">Projects</a>\
    <div class="tutorial-dropdown">\
        <a href="tutorialMain.html" id="tutorialMain">Tutorials</a>\
        <div class="tutorial-content">\
            <a href="tutorialOOP.html" id="tutorialOOP">OOP</a>\
            <a href="tutorialArrays.html" id="tutorialArrays">Array & ArrayList</a>\
            <a href="tutorialSAS.html" id="tutorialSAS">Search & Sort</a>\
            <a href="tutorialRecursion.html" id="tutorialRecursion">Recursion</a>\
            <a href="tutorialBiblio.html" id="tutorialBiblio">Bibliography</a>\
        </div>\
    </div>\
    <footer>\
        <!-- Took inspiration from Erics website, uses two photos, hover, and opacity -->\
        <a href="https://dmoj.ca/user/MuteMini">\
            <div class="social">\
                <img class="idle" alt=DMOJ src="images/dmoj1.png">\
                <img class="active" alt=DMOJ src="images/dmoj2.png">\
            </div>\
        </a>\
        <a href="https://github.com/MuteMini">\
            <div class="social">\
                <img class="idle" alt=GITHUB src="images/github1.png">\
                <img class="active" alt=GITHUB src="images/github2.png">\
            </div>\
        </a>\
        <a href="mailto:therealminhere@gmail.com">\
            <div class="social">\
                <img class="idle" alt=EMAIL src="images/email1.png">\
                <img class="active" alt=EMAIL src="images/email2.png">\
            </div>\
        </a>\
        <p> &copy; 2020 Min Kang </p>\
    </footer>\
</nav>\
<script>\
    function openNav() {\
        document.getElementById("sidenav").style.width = "250px";\
    }\
    function closeNav() {\
        document.getElementById("sidenav").style.width = "0";\
    }\
</script>\
';

$(document).ready(function(){
    $( "#include-nav" ).html( code );
});