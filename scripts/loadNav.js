// Sidebar learned from https://www.w3schools.com/howto/howto_js_sidenav.asp
// learned document.write from https://stackoverflow.com/a/15250208

const code = '\
<a onclick="openNav()" href="javascript:void(0)" id="open">&equiv;</a>\
<nav id="sidenav">\
    <a onclick="closeNav()" href="javascript:void(0)" id="close">&times;</a>\
    <a href="index.html">Home</a>\
    <a href="about.html">About Me</a>\
    <a href="projects.html">Projects</a>\
    <a href="tutorialMain.html">Tutorials</a>\
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