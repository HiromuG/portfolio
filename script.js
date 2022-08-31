// clock

setInterval(() => {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ap ;
    if(h>=12)
        ap="PM";
    else
        ap="AM";

    if(h>12)
        h=h-12;
    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = ap;

});

// progress-bar

let about = document.getElementById("mySelf");
let responsibleProgress = document.querySelector(".responsibleProgress");
let creativeProgress = document.querySelector(".creativeProgress");
let selfEnhancementProgress = document.querySelector(".selfEnhancementProgress");
let thinkingProgress = document.querySelector(".thinkingProgress");
let Birthday = document.getElementById("Birthday");
let City = document.getElementById("City");
about.addEventListener("click",function(){
    responsibleProgress.style.width = "80%";
    creativeProgress.style.width = "65%";
    selfEnhancementProgress.style.width = "75%";
    thinkingProgress.style.width = "60%";
    Birthday.style.animation = "typing 3s steps(25)";
    City.style.animation = "typing 3s steps(25)";
})

// toggle-open

let styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
let styleSwitcher = document.querySelector(".style-switcher");
styleSwitcherToggle.addEventListener("click",function(){
    document.querySelector(".style-switcher").classList.toggle("open");
});
window.addEventListener("scroll",function(){
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// change-bgcolor

let alternateStyles = document.querySelectorAll(".alternate-style");
let SunMoon = document.getElementById("SunMoon"); 
function setActiveStyle(color){
    alternateStyles.forEach(function(style){
        if(color==style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    });
    if(color=="skin-color-black"){
        SunMoon.classList.remove("fa-sun");
        SunMoon.classList.add("fa-moon");
    }
    if(color=="skin-color-white"){
        SunMoon.classList.remove("fa-moon");
        SunMoon.classList.add("fa-sun");
    }
};

// aside

let nav = document.querySelector(".nav");
let navList = nav.querySelectorAll("li");
let allSection = document.querySelectorAll("section");
    for(let i=0;i<navList.length;i++){
        let active = navList[i].querySelector("a");
        active.addEventListener("click",function(){
            for(let i=0;i<navList.length;i++){
                allSection[i].classList.remove("back-section")
            }
            for(let j=0;j<navList.length;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth<899){
                asideTogglerBtn();
            }
        })
    }
function showSection(e){
    for(let i=0;i<allSection.length;i++){
        allSection[i].classList.remove("active");
    }
    let href = e.getAttribute("href").split("#")[1];
    document.querySelector("#"+href).classList.add("active");
}

// toggler

let navToggler = document.querySelector(".nav-toggler");
let aside = document.querySelector(".aside");
navToggler.addEventListener("click",function(){
    asideTogglerBtn();
})
function asideTogglerBtn(){
    aside.classList.toggle("open");
    for(let i=0;i<allSection.length;i++){
        allSection[i].classList.toggle("open");
    }
}
