var images1 = [
    "images/Ganondorf.png",
    "images/Link.png",
    "images/Zelda.png",
]

for (var i = 0; i < images1.length; i++) {
    document.getElementById("image" + i).src = images1[i];
    
}