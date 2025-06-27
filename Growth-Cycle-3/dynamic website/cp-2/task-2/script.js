function onClickLikeButton() {
    let image = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
    let imageElement = document.getElementById("puppyImage");
    imageElement.src = image;
    document.getElementById("likeIcon").style.color = "#0967d2";
    document.getElementById("likeButton").style.color = "#cbd2d9";
    document.getElementById("likeButton").style.backgroundColor = "#0967d2";
}