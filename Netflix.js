function guntur(fileName)
{

    console.log("ok")
    let guntur=document.querySelector("#black")
guntur.setAttribute("src",fileName)
document.getElementById("star1").style.color="orange"
document.getElementById("star2").style.color="orange"
document.getElementById("star3").style.color="orange"
document.getElementById("star4").style.color="white"
document.getElementById("star5").style.color="white"
document.getElementById("p1").style.color="white"
document.getElementById("p2").style.color="white"
document.getElementById("p3").style.color="white"
document.getElementById("p4").style.color="white"
document.getElementById("star").style.display="block"
document.getElementById("overview").style.color="white"
document.getElementById("play1").style.display="block"
document.getElementById("date").style.color="white"
document.getElementById("gener").style.color="white"
document.getElementById("cast").style.color="white"
document.getElementById("overview").innerHTML="A man seeks explanations when his mother asks him to sign a document denying he is her son while she campaigns for office, years after she deserts him and marries again."
document.getElementById("date").innerHTML=" 2024-1-13"
document.getElementById("cast").innerHTML=" Mahesh babu,Sri leela,Trivikram"
document.getElementById("gener").innerHTML=" Family Entertainment"

}
function spyder(fileName)
{
    console.log("ok")
let guntur=document.querySelector("#black")
guntur.setAttribute("src",fileName)
document.getElementById("star1").style.color="orange"
document.getElementById("star2").style.color="orange"
document.getElementById("star3").style.color="orange"
document.getElementById("star4").style.color="white"
document.getElementById("star5").style.color="white"
document.getElementById("p1").style.color="white"
document.getElementById("p2").style.color="white"
document.getElementById("p3").style.color="white"
document.getElementById("p4").style.color="white"
document.getElementById("overview").style.color="white"
document.getElementById("play2").style.display="block"
document.getElementById("star").style.display="block"
document.getElementById("date").style.color="white"
document.getElementById("gener").style.color="white"
document.getElementById("cast").style.color="white"
document.getElementById("overview").innerHTML="Shiva, an intelligence officer, develops a phone software that helps him track those in need of help. He sets out to save the people of Hyderabad when he realises that a serial killer is on the loose."
document.getElementById("date").innerHTML=" 2017-9-27"
document.getElementById("cast").innerHTML=" Mahesh babu,Muragadas"
document.getElementById("gener").innerHTML=" serial killer"
}
function sree(fileName)
{
    console.log("ok")
let guntur=document.querySelector("#black")
guntur.setAttribute("src",fileName)
document.getElementById("star1").style.color="orange"
document.getElementById("star2").style.color="orange"
document.getElementById("star3").style.color="orange"
document.getElementById("star4").style.color="orange"
document.getElementById("star5").style.color="orange"
document.getElementById("p1").style.color="white"
document.getElementById("p2").style.color="white"
document.getElementById("p3").style.color="white"
document.getElementById("p4").style.color="white"
document.getElementById("play3").style.display="block"
document.getElementById("star").style.display="block"
document.getElementById("overview").style.color="white"
document.getElementById("date").style.color="white"
document.getElementById("gener").style.color="white"
document.getElementById("cast").style.color="white"
document.getElementById("overview").innerHTML="After graduating from one of the premier universities in the West, Bharath Ram returns to India only to find India's political condition in shambles. He then decides to take on the corrupt government and gets elected as an MLA with the vision of becoming the CM."
document.getElementById("date").innerHTML=" 2018-4-20"
document.getElementById("cast").innerHTML=" Mahesh babu,Koratala shiiva"
document.getElementById("gener").innerHTML=" politics"
}
function khaleja(fileName)
{
    console.log("ok")
let guntur=document.querySelector("#black")
guntur.setAttribute("src",fileName)
document.getElementById("star1").style.color="orange"
document.getElementById("star2").style.color="orange"
document.getElementById("star3").style.color="orange"
document.getElementById("star4").style.color="orange"
document.getElementById("star5").style.color="orange"
document.getElementById("p1").style.color="white"
document.getElementById("p2").style.color="white"
document.getElementById("p3").style.color="white"
document.getElementById("p4").style.color="white"
document.getElementById("play4").style.display="block"
document.getElementById("star").style.display="block"
document.getElementById("overview").style.color="white"
document.getElementById("date").style.color="white"
document.getElementById("gener").style.color="white"
document.getElementById("cast").style.color="white"
document.getElementById("overview").innerHTML="An unknown disease kills many people in a village; however, according to a prediction, someone will come to help them. When one of the villagers meets Raju, he realizes that Raju is the one who can save them."
document.getElementById("date").innerHTML=" 2010-7-10"
document.getElementById("cast").innerHTML=" Mahesh babu,Muragadas"
document.getElementById("gener").innerHTML=" serial killer"
}
function pokiri(fileName)
{
    console.log("ok")
let guntur=document.querySelector("#black")
guntur.setAttribute("src",fileName)
document.getElementById("star1").style.color="orange"
document.getElementById("star2").style.color="orange"
document.getElementById("star3").style.color="orange"
document.getElementById("star4").style.color="orange"
document.getElementById("star5").style.color="orange"
document.getElementById("p1").style.color="white"
document.getElementById("p2").style.color="white"
document.getElementById("p3").style.color="white"
document.getElementById("p4").style.color="white"
document.getElementById("play5").style.display="block"
document.getElementById("star").style.display="block"
document.getElementById("overview").style.color="white"
document.getElementById("date").style.color="white"
document.getElementById("gener").style.color="white"
document.getElementById("cast").style.color="white"
document.getElementById("overview").innerHTML="An unknown disease kills many people in a village; however, according to a prediction, someone will come to help them. When one of the villagers meets Raju, he realizes that Raju is the one who can save them."
document.getElementById("date").innerHTML=" 2010-7-10"
document.getElementById("cast").innerHTML=" Mahesh babu,Muragadas"
document.getElementById("gener").innerHTML=" serial killer"
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function home()
{
window.location.href="Series.html"
}



