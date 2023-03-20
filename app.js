// Triangle

function Area() {
    var side1 = parseInt(document
        .getElementById("side1").value);
    var side2 = parseInt(document
        .getElementById("side2").value);
        const t = "Tringle"
    const area = 0.5 * side1* side2;
  
    document.getElementById( 
        "list-container").innerHTML ="1 " + t + " " + area;     
}

// Rectangle
function AreaRec() {
    var rectanglewidth = parseInt(document
        .getElementById("rectangle-width").value);
    var  rectanglehight = parseInt(document
        .getElementById("rectangle-hight").value);
        const rt = "Rectangle"
    const area = rectanglewidth * rectanglehight;
  
    document.getElementById( 
        "list-container").innerHTML ="2. " + rt + " " + area;     
}

// Parallelogram
function AreaRecParallelogram
() {
    var parallelogramwidth = parseInt(document
        .getElementById("parallelogram-width").value);
    var  parallelogramhight = parseInt(document
        .getElementById("parallelogram-hight").value);
        const rt = "Parallelogram"
    const area = parallelogramwidth * parallelogramhight;
  
    document.getElementById( 
        "list-container").innerHTML ="3. "+" " + rt + " " + area;     
}


// ...
// Rhombuse
// Area (A) = d1 x d2 x 0.5
function AreaRecRhombuse
() {
    var rhombusewidth = parseInt(document
        .getElementById("rhombuse-width").value);
    var  rhombusehight = parseInt(document
        .getElementById("rhombuse-hight").value);
        const rt = "Rhombuse"
    const area = rhombusewidth * rhombusehight * 0.5;
  
    document.getElementById( 
        "list-container").innerHTML ="4."+" " + rt + " " + area;     
}

// Pentagon
// Area (A) = 0.5 x p x b
function AreaPentagon
() {
    var p = parseInt(document
        .getElementById("pentagon-perimeter").value);
    var  a = parseInt(document
        .getElementById("pentagon-apothem").value);
        const rt = "Pentagon"
    const area = 0.5 * p * a;
  
    document.getElementById( 
        "list-container").innerHTML ="5."+" " + rt + " " + area;     
}


// Ellipse
// Area (A) = π ab

function AreaEllipse
() {
    var major = parseInt(document
        .getElementById("ellipse-major").value);
    var  minor = parseInt(document
        .getElementById("ellipse-minor").value);
        const rt = "Ellipse"
    const area = 3.14 * major * minor;
  
    document.getElementById( 
        "list-container").innerHTML ="6."+" " + rt + " " + area;     
}

