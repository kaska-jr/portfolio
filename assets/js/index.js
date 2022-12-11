const hamburger = document.querySelector(".hamburger");
const mobileDropDown= document.querySelector(".nav-menu");
const aboutImg = document.querySelector(".about-img-wrapper");
const aboutText = document.querySelector(".about-text-wrapper");
const p1 = document.querySelectorAll(".p1")
const p2 = document.querySelectorAll(".p2")

const trs = document.querySelectorAll(".tr");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    mobileDropDown.classList.toggle("scale");
});


window.addEventListener("load", ()=>{
    let char = 0;
let timer = setInterval(onTick,500);
function onTick(){
    const span = document.querySelectorAll(".text");
    span[char].classList.add("fad");
    // console.log(span[char]);
    char++
    if(char == span.length){
        complete()
        return;
    }
}
function complete(){
    clearInterval(timer)
    timer = null
}
})

let rotate = setInterval(() => {
    hamburger.classList.add("rotate");
}, 3000);


const cursor = document.querySelector(".cursor");
// follow cursor on mouse move
document.addEventListener("mousemove",(e)=>{
    let x = e.x;
    let y = e.y;
    cursor.style.top = y + "px"
    cursor.style.left = x + "px"
})
window.addEventListener("scroll",()=>{
    const scrolled = window.scrollY
    console.log(scrolled);
})


 const skill1 = document.querySelector(".skill1");
 const skill2 = document.querySelector(".skill2");
  skill2

var lastScrollTop = 0;

window.addEventListener("scroll", function(){ 
//    var st = window.pageYOffset || document.documentElement.scrollTop;
   var st = window.pageYOffset;
   if (st > lastScrollTop){
      // downscroll code
      skill1.classList.remove("active-right")
      skill2.classList.remove("active-left2")

      skill1.classList.add("active-left")
      skill2.classList.add("active-right2")
      
   } else {
      // upscroll code
      skill1.classList.remove("active-left")
      skill2.classList.remove("active-right2")

      skill1.classList.add("active-right")
      skill2.classList.add("active-left2")
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});









    