var elements = document.getElementsByClassName("navList-mobile");


function show()  {
    // console.log("clicked");
    

// Loop through each element and change its background color
for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "flex";
}
};
// show();

function hide() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

