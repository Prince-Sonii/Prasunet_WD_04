const mainSection = document.getElementById("main_section");
const backScroller = document.getElementById("back_scroll");
const homeSection = document.getElementById("home_sec");
const aboutSection = document.getElementById("about_sec");
const skillsSection = document.getElementById("skills_sec");
const projectSection = document.getElementById("project_sec");
const contactSection = document.getElementById("contact_sec");
const homeButton = document.getElementById("home_btn");
const aboutButton = document.getElementById("about_btn");
const projectButton = document.getElementById("project_btn");
const contactButton = document.getElementById("contact_btn");
let scrollValue;
let opacityValue;
homeButton.addEventListener("click",()=>{
    backScroller.scrollTop =0;
    homeSection.style.transitionDuration = "1s";
   setTimeout(()=>{
     homeSection.style.transform = "scale(.9)"
   },100)
    homeSection.style.opacity = .7;
    setTimeout(()=>{
        homeSection.style.transform = "scale(1)"
        homeSection.style.opacity = 1;
    },700)

})
aboutButton.addEventListener("click",()=>{
    backScroller.scrollTop =800;
    aboutSection.style.transitionDuration = "1s";
    setTimeout(()=>{
        aboutSection.style.transform = "scale(.9)"
      },100)
    aboutSection.style.opacity = .7;
    setTimeout(()=>{
        aboutSection.style.transform = "scale(1)"
        aboutSection.style.opacity = 1;
    },700)

})
projectButton.addEventListener("click",()=>{
    backScroller.scrollTop =2300;
    projectSection.style.transitionDuration = "1s";
    setTimeout(()=>{
        projectSection.style.transform = "scale(.9)"
      },100)
    projectSection.style.opacity = .7;
    setTimeout(()=>{
        projectSection.style.transform = "scale(1)"
        projectSection.style.opacity = 1;
    },700)

})
contactButton.addEventListener("click",()=>{
    backScroller.scrollTop =2800;
    contactSection.style.transitionDuration = "1s";
    setTimeout(()=>{
        contactSection.style.transform = "scale(.9)"
      },100)
    contactSection.style.opacity = .7;
    setTimeout(()=>{
        contactSection.style.transform = "scale(1)"
        contactSection.style.opacity = 1;
    },700)

})
backScroller.addEventListener("scroll",()=>{
    scrollValue = backScroller.scrollTop;
    if(scrollValue<700) {
        homeSection.style.display = "flex"
        opacityValue = scrollValue/790;
        if(scrollValue<100) {
            homeSection.style.opacity = 1;
        }
        if(scrollValue>=200) {
            homeSection.style.transitionDuration = ".2s";
            homeSection.style.opacity = 1-opacityValue;
        }
    }
    if(scrollValue>=800) {
        opacityValue = scrollValue/1600;
        homeSection.style.display = "none"
        aboutSection.style.display = "flex"
        aboutSection.style.opacity = 1;
        if(scrollValue>=1000) {
            aboutSection.style.transitionDuration = ".2s";
            aboutSection.style.opacity = 1-opacityValue;
        }

    }
    if(scrollValue>=1500) {
        opacityValue = scrollValue/2400;
        aboutSection.style.display = "none"
        skillsSection.style.display = "flex"
        skillsSection.style.opacity = 1;
        if(scrollValue>=1700) {
            skillsSection.style.transitionDuration = ".2s";
            skillsSection.style.opacity = 1-opacityValue;
        }
    }
    if(scrollValue>=2300) {
        opacityValue = scrollValue/3200;
        skillsSection.style.display = "none"    
        projectSection.style.display = "flex"
        projectSection.style.opacity = 1;
        if(scrollValue>=2500) {
            projectSection.style.transitionDuration = ".2s";
            projectSection.style.opacity = 1-opacityValue;
        }
    }
    if(scrollValue>=2800) {
        projectSection.style.display = "none"
        contactSection.style.display = "flex" 
        contactSection.style.opacity = 1;
    }
})
