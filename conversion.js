function dropDownSelect(){
    var l = document.getElementById("list");
    if (l.selectedIndex == "1") {loadLengthConversion()}
    if (l.selectedIndex == "2") {loadWeightConversion()}
}
document.getElementById("list").addEventListener("change", dropDownSelect);

// function conversionSelect(){
//     var l = document.getElementById("list");
//     if (l.selectedIndex == "1") {loadLengthConversion()}
//     if (l.selectedIndex == "2") {loadWeightConversion()}
// }
// document.getElementById("conversion").addEventListener("input", conversionSelect);

function loadLengthConversion(){
    var conv = document.getElementById("conversion");
    conv.innerHTML = "<label for=\"meter\">Meters: </label><input type=\"number\" id=\"meter\">";
    conv.innerHTML += "<br/>";
    conv.innerHTML += "<label for=\"inch\">Inches: </label><input type=\"number\" id=\"inch\">";
    conv.innerHTML += "<br/>";
    document.getElementById("meter").addEventListener("input", function(){
        document.getElementById("inch").value = document.getElementById("meter").value * 39.3701;
    });
    document.getElementById("inch").addEventListener("input", function(){
        document.getElementById("meter").value = document.getElementById("inch").value * 0.0254;
    });
}

function loadWeightConversion(){
    var conv = document.getElementById("conversion");
    conv.innerHTML = "<label for=\"kilogram\">Kilograms: </label><input type=\"number\" id=\"kilogram\">";
    conv.innerHTML += "<br/>";
    conv.innerHTML += "<label for=\"lb\">Lbs: </label><input type=\"number\" id=\"lb\">";
    conv.innerHTML += "<br/>";
    document.getElementById("kilogram").addEventListener("input", function(){
        document.getElementById("lb").value = document.getElementById("kilogram").value * 2.20462;
    });
    document.getElementById("lb").addEventListener("input", function(){
        document.getElementById("kilogram").value = document.getElementById("lb").value * 0.453592;
    });
}