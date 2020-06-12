var recursionCode = '\
<h3 class="text">Recursion is the process of calling a function inside itself.</h3>\
        <h4 class="text">Usually, recursion is used to break up a problem into smaller and smaller pieces, until the smallest piece is directly solveable. This smallest piece is called the <strong>base condition.</strong></h4>\
        <h4 class="text">The rest of the code uses itself to get the call closer to the base case.</h4>\
        <h4 class="text"></h4>\
        <div class="code-block">\
            <pre class="text">public int recursiveFactorial(int val) {\
\n    <b>//the base case, returns 1</b>\
\n    if(val == 1) {\
\n        return 1;\
\n    }\
\n    <b>//if the base case is not fulfilled, calls the method with the factorial calculations</b>\
\n    else {\
\n        return val * recursiveFactorial(val-1);\
\n    }\
\n}</pre>\
        </div>\
        <h4 class="text">Recursion can be used <strong>directly or indirectly.</strong></h4>\
        <h4 class="text">A <em>direct recursion</em> means the function is called inside the very function itself.</h4>\
        <h4 class="text">An <em>indirect recursion</em> means the function is called outside of itself, but still loops back to the function.</h4>\
        <div class="code-block">\
            <pre class="text"><b>//direct recursion</b>\
\npublic int recursion() {\
\n    <b>...</b>\
\n    recursion()\
\n}\
\n\
\n<b>//indirect recursion</b>\
\npublic int recursion1() {\
\n    <b>...</b>\
\n    recursion3()\
\n}\
\npublic int recursion2() {\
\n    <b>...</b>\
\n    recursion1()\
\n}\
\npublic int recursion3() {\
\n    <b>...</b>\
\n    recursion2()\
\n}</pre>\
        </div>\
        <h4 class="text">Recursive functions can become very memory intensive. This is because the compiler takes each recursive call in a different place in memory. If written improperly, recursive functions can throw a Stack Overflow error.</h4>\
        <h4 class="text">Recursion can also be tailed or non-tailed. A recursive function being tailed allows the compiler to save on memory.</h4>\
        <div class="spacer"></div>\
        <div id="irl-recursion">\
            <a class="text" onclick="doRecursion();">Do you really want to see.... <strong>real life recursion?</strong></a>\
        </div>\
';

function doRecursion(){
    $(document).ready(function(){
        $( "#irl-recursion" ).replaceWith( recursionCode );
    });
}