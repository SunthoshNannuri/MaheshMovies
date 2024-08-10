function home()
{
    window.location.href="Netflix.html"
}
function series()
{
    window.location.href="Series.html"
}
function gotoSection(form) { 
    var index = form.locations.selectedIndex; 
    console.log(index)
    if(index==1)
    {
    
        document.getElementById("recommend").style.marginLeft="18px"
        let e1=document.querySelector("#point1")
    e1.setAttribute("src","s2e1.jpeg")
    let e2=document.querySelector("#point2")
    e2.setAttribute("src","s2e3.jpeg")
    let e3=document.querySelector("#point3")
    e3.setAttribute("src","s2e2.jpeg")
    let e4=document.querySelector("#point4")
    e4.setAttribute("src","s1e4.jpeg")
    let e5=document.querySelector("#point5")
    e5.setAttribute("src","s1e1.jpeg")
    let e6=document.querySelector("#point6")
    e6.setAttribute("src","s2e2.jpeg")
    let e7=document.querySelector("#point7")
    e7.setAttribute("src","s1e3.jpeg")
    let e8=document.querySelector("#point8")
    e8.setAttribute("src","s1e1.jpeg")
    }
    else if(index==0)
    {
       
        let e1=document.querySelector("#point1")
    e1.setAttribute("src","s1e1.jpeg")
    let e2=document.querySelector("#point2")
    e2.setAttribute("src","s1e2.jpeg")
    let e3=document.querySelector("#point3")
    e3.setAttribute("src","s1e3.jpeg")
    let e4=document.querySelector("#point4")
    e4.setAttribute("src","s1e4.jpeg")
    let e5=document.querySelector("#point5")
    e5.setAttribute("src","s1e5.jpg")
    let e6=document.querySelector("#point6")
    e6.setAttribute("src","s1e1.jpeg")
    let e7=document.querySelector("#point7")
    e7.setAttribute("src","s1e2.jpeg")
    let e8=document.querySelector("#point8")
    e8.setAttribute("src","s1e3.jpeg")
    }
    else
   {
    var idchange=document.getElementById("pop")
    idchange.setAttribute("id","pop1")
    var idchan=document.getElementById("in")
    idchan.setAttribute("id","into")
    var audio = new Audio( 
        "WhatsApp Audio 2024-08-10 at 12.49.40_c289c78d.mp3.opus"); 
                    audio.play();
   }
}
function trailer()
{
    window.location.href=("https://youtu.be/bjqEWgDVPe0?si=ZobPLXjn2cxzj0th")
}
function jio()
{
    window.location.href=("https://www.jiocinema.com/tv-shows/game-of-thrones/3739477")
}

function popchange()
{
    location.reload()
}