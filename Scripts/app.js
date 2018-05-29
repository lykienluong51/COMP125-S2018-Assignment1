/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app = (function () {
    "use strict"

    // About Button Click event handler

   let paragraph = document.getElementById("paragraph");
    
   let myPara = "My name is KIEN-LUONG LY, my friends call me Paul. I am currently enroll in Health Informatics Technology programme and this is my second semester. I’ve selected to participate in this course because I am interesting in working with computer data analysis and health care. I find it is a challenge and an opportunity for me as I am completely a beginner of computer science. I set a daily target of coding and practicing programming five (5) hours a day to enhance my skills. My goal is to become a senior programmer or a data analysis expert in next 5 years.";
   paragraph.textContent = myPara;
    
})();