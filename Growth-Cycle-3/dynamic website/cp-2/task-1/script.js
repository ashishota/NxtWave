function changeBackgroundImage(season) {
    var smallImages = {
      spring: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png",
      summer: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png",
      autumn: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png",
      winter: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png"
    };
    var mediumImages = {
      spring: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png",
      summer: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png",
      autumn: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png",
      winter: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png"
    };
    var smallImageElement = document.getElementById("seasonSmallImage");
    var mediumImageElement = document.getElementById("seasonMediumImage");
    if (window.innerWidth < 768) {
      smallImageElement.src = smallImages[season];
      
    } else {
      mediumImageElement.src = mediumImages[season];
     }

}