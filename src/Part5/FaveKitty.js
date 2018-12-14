
pics = document.getElementById("pics");
createPicsHolder();
createCatImages();

function createPicsHolder() {
    for(let i = 0;i<9;i++) {
        pictureholder = document.createElement("div");
        pictureholder.className = "catpicture";
        pictureholder.id = "picture-holder-" + i;
        pics.appendChild(pictureholder)
    }
}
function createCatImages() {
    pictureHolders = document.getElementsByClassName("catpicture");
    for(let i = 0; i<pictureHolders.length; i++) {
        favorite = document.createElement("div");
        favorite.className = "favorite";
        favorite.id = "favorite_" + (i+1);
        catPics = document.createElement("img");
        catPics.src = "img/cat" + (i+1) + ".jpg";
        catPics.id = i+1;
        catPics.addEventListener("click", function(){
            createFavorite(this.id)
        });
        pictureHolders[i].appendChild(favorite);
        pictureHolders[i].appendChild(catPics);
    }
}
function createFavorite(id){
    console.log("make me your favorite! you clicked: "+ id);
    unfave = document.getElementsByClassName("favorite");

    for(let i = 0; i<unfave.length; i++){
        unfave[i].style.backgroundImage = "none"
    }
    favorite = document.getElementById("favorite_" + id);
    favorite.style.backgroundImage = "url('img/heart.jpg')";
}