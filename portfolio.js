const mainSection = document.getElementById("main_section");
const backScroller = document.getElementById("back_scroll");
const homeSection = document.getElementById("home_sec");
const aboutSection = document.getElementById("about_sec");
const skillsSection = document.getElementById("skills_sec");
const projectSection = document.getElementById("project_sec");
const contactSection = document.getElementById("contact_sec");
const homeButton = document.getElementById("home_btn");
const aboutButton = document.getElementById("about_btn");
const skillsButton = document.getElementById("skills_btn");
const projectButton = document.getElementById("project_btn");
const contactButton = document.getElementById("contact_btn");
const downArrow = document.getElementById("down_arrow");
const upArrow = document.getElementById("up_arrow");
let scrollValue;
let opacityValue;
homeButton.addEventListener("click",()=>{
    backScroller.scrollTop =0;
    homeSection.style.transitionDuration = "1s";
    setTimeout(()=>{
        homeSection.style.transform = "scale(.9)";
    },100)
    homeSection.style.opacity = .7;
    setTimeout(()=>{
        homeSection.style.transform = "scale(1)";
        homeSection.style.opacity = 1;
    },700)
    
})
aboutButton.addEventListener("click",()=>{
    backScroller.scrollTop =800;
    aboutSection.style.transitionDuration = "1s";
    setTimeout(()=>{
        aboutSection.style.transform = "scale(.9)";
    },100)
    aboutSection.style.opacity = .7;
    setTimeout(()=>{
        aboutSection.style.transform = "scale(1)";
        aboutSection.style.opacity = 1;
    },700)
    
})
skillsButton.addEventListener("click",()=>{
    backScroller.scrollTop =1500;
    skillsSection.style.transitionDuration = "1s";
    setTimeout(()=>{
        skillsSection.style.transform = "scale(.9)";
    },100)
    skillsSection.style.opacity = .7;
    setTimeout(()=>{
        skillsSection.style.transform = "scale(1)";
        skillsSection.style.opacity = 1;
    },700)
    
})
projectButton.addEventListener("click",()=>{
    backScroller.scrollTop =2300;
    projectSection.style.transitionDuration = "1s";
    setTimeout(()=>{
        projectSection.style.transform = "scale(.9)";
    },100)
    projectSection.style.opacity = .7;
    setTimeout(()=>{
        projectSection.style.transform = "scale(1)";
        projectSection.style.opacity = 1;
    },700)
    
})
contactButton.addEventListener("click",()=>{
    backScroller.scrollTop =2800;
    contactSection.style.transitionDuration = "1s";
    setTimeout(()=>{
        contactSection.style.transform = "scale(.9)";
    },100)
    contactSection.style.opacity = .7;
    setTimeout(()=>{
        contactSection.style.transform = "scale(1)";
        contactSection.style.opacity = 1;
    },700)
    
})
backScroller.addEventListener("scroll",()=>{
    scrollValue = backScroller.scrollTop;
    if(scrollValue<1) {
        downArrow.style.opacity =1;
        upArrow.style.opacity =.3;
    } else if(scrollValue<2800) {
        upArrow.style.opacity = 1;
        downArrow.style.opacity =1;
    } else {
        upArrow.style.opacity = 1;
        downArrow.style.opacity =.3;
    }
    if(scrollValue<700) {
        homeSection.style.display = "flex";
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
        homeSection.style.display = "none";
        aboutSection.style.display = "flex";
        aboutSection.style.opacity = 1;
        if(scrollValue>=1000) {
            aboutSection.style.transitionDuration = ".2s";
            aboutSection.style.opacity = 1-opacityValue;
        }

    }
    if(scrollValue>=1500) {
        opacityValue = scrollValue/2400;
        aboutSection.style.display = "none";
        skillsSection.style.display = "flex";
        skillsSection.style.opacity = 1;
        if(scrollValue>=1700) {
            skillsSection.style.transitionDuration = ".2s";
            skillsSection.style.opacity = 1-opacityValue;
        }
    }
    if(scrollValue>=2300) {
        opacityValue = scrollValue/3200;
        skillsSection.style.display = "none";  
        projectSection.style.display = "flex";
        projectSection.style.opacity = 1;
        if(scrollValue>=2500) {
            projectSection.style.transitionDuration = ".2s";
            projectSection.style.opacity = 1-opacityValue;
        }
    }
    if(scrollValue>=2800) {
        projectSection.style.display = "none";
        contactSection.style.display = "flex"; 
        contactSection.style.opacity = 1;
    }
    if(scrollValue>2900) {
       backScroller.style.height = scrollValue+1000; 
       console.log("height"+backScroller.scrollHeight)
    }
})
const getEmail = document.getElementById("get_email");
const getReview = document.getElementById("get_review");
const contactMsgDisplay = document.getElementById("toast_msg");
const sendButton = document.getElementById("send_btn");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const checkEmail = async (email)=>{
    const rp = await fetch(`https://api.emailvalidation.com/validate?email=${email}&apikey=YOUR_API_KEY`);
    const data = await rp.json();
    return data.isValid;
}
sendButton.addEventListener("click",()=>{
    sendButton.style.transitionDuration =".15s"
    sendButton.style.transform = "scale(.9)";
    setTimeout(()=>{
        sendButton.style.transform = "scale(1)";
    },200);
    if(getReview.value =="" || getEmail.value == "") {
        contactMsgDisplay.innerText = "field can't be empty";
        contactMsgDisplay.style.color = "red";
        contactMsgDisplay.style.display = "block";
        setTimeout(()=>{
            contactMsgDisplay.style.display = "none";
        },2000)
    } else if(!(regex.test(getEmail.value))){
        contactMsgDisplay.innerText = "enter a valid email";
        contactMsgDisplay.style.color = "red";
        contactMsgDisplay.style.display = "block";
        setTimeout(()=>{
            contactMsgDisplay.style.display = "none";
         },2000)
    } 
    else {
        contactMsgDisplay.innerText = "sent successfully";
        contactMsgDisplay.style.color = "green";
        contactMsgDisplay.style.display = "block";
        setTimeout(()=>{
            contactMsgDisplay.style.display = "none";
        },2000)
    }
})
