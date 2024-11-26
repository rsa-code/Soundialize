function songs_show(){
    document.getElementById("song-display").style.display = "block";
    document.getElementById("artists_display").style.display = "none";
    document.getElementById("albums_display").style.display = "none";
    document.getElementById("select-display").style.display = "none";
}

function artists_show(){
    document.getElementById("song-display").style.display = "none";
    document.getElementById("artists_display").style.display = "block";
    document.getElementById("albums_display").style.display = "none";
    document.getElementById("select-display").style.display = "none";
}

function albums_show(){
    document.getElementById("song-display").style.display = "none";
    document.getElementById("artists_display").style.display = "none";
    document.getElementById("albums_display").style.display = "block";
    document.getElementById("select-display").style.display = "none";
}