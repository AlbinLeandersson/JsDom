
function rndm_itm(items)
{
    return items[Math.floor(Math.random()*items.length)];
}

colours = ["pink", "cyan", "purple", "orange", "black", "blue"];


images = ["https://resources.premierleague.com/premierleague/photos/players/250x250/p55422.png", "https://domf5oio6qrcr.cloudfront.net/medialibrary/10190/conversions/GettyImages-499689946-thumb.jpg", "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2023-05/nba-plain--40edc10f-5d40-4dca-b96d-3831b5dbe678.jpeg?h=920929c4&itok=T3brWDP6", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZJAxo20uL626e479HgNNSQOxNtmLDZ-IYg&usqp=CAU"];

function good_vibes(){
    document.getElementById("good_vibes").innerHTML = "Only good vibes here!";
}

function change_bg(){
    document.body.style.backgroundColor = `${rndm_itm(colours)}`;
}

function show_picture(){
    document.getElementById("manage_img").style.display = "block";
}

function change_img(){
    document.getElementById("manage_img").src = rndm_itm(images);
}

function hide_img(){
    document.getElementById("manage_img").style.display = "none";
}

function current_time(){
    document.getElementById("cur_time").innerHTML = Date();
} 



function header_set(){
    const elements = document.getElementsByClassName("top-div");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.justifyContent = "center";
      elements[i].style.alignItems = "center";
      elements[i].style.textAlign = "center";
      elements[i].style.background = "beige";
      elements[i].style.margin = "50px";
    }
    document.getElementById("good_vibes").innerHTML = "Good vibes only!";
    document.getElementById("manage_img").src = rndm_itm(images);
    document.getElementById("cur_time").innerHTML = Date();
    document.getElementById("manage_img").style.display = "block";
    document.getElementById("manage_img").style.border = "4px solid tan";
}

function header_remove(){
    const elements = document.getElementsByClassName("top-div");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.justifyContent = "left";
      elements[i].style.textAlign = "left";
      elements[i].style.alignItems = "flex-start";
      elements[i].style.margin = "0px";
      elements[i].style.background = "none";
    }
    document.getElementById("manage_img").src = rndm_itm(images);
    document.getElementById("good_vibes").innerHTML = "";
    document.getElementById("manage_img").style.display = "none";
    document.getElementById("cur_time").innerHTML = "";
    document.getElementById("manage_img").style.border = "none";
}