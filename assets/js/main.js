import { storeVideo,storePdf,storeBook } from "./utils";
import { displayVideo,displayPdf,displayBook } from "./displayData";
const addCourseBtn = document.getElementById("addcourse");
const formEl = document.querySelector("form");
const courseTypeEl = document.querySelector("form #courseType");
const urlInputEl = document.querySelector("form #urlInput");
const pdfInputEl = document.querySelector("form #pdfInput");


const videoListEl = document.getElementById("videoList");

const handleCourseType = () =>{
    const courseType = courseTypeEl.value;
    if(courseType === 'video'){
        pdfInputEl.classList.add('hidden');
        urlInputEl.classList.remove('hidden');
    }else if(courseType === 'pdf' || courseType === 'book'){
        urlInputEl.classList.add('hidden');
        pdfInputEl.classList.remove('hidden');     
    }else{
        urlInputEl.classList.add('hidden');
        pdfInputEl.classList.add('hidden'); 
    }
}
// handle add course button
addCourseBtn.addEventListener("click", () => {
  formEl.classList.toggle("hidden");
});
document.addEventListener("click",()=>{
  formEl.classList.add("hidden");
})
// handle add course button end -->
courseTypeEl.addEventListener("change",handleCourseType)

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formData = new FormData(formEl);
     const courseDetails = Object.fromEntries(formData);
    if(courseDetails.courseType === 'video'){
         storeVideo(courseDetails);
    }else if(courseDetails.courseType === 'pdf'){
      storePdf(courseDetails);
    }else if(courseDetails.courseType === 'book'){
      storeBook(courseDetails);
    }else{
      alert("Invalid Type")
    }
   formEl.reset();
})

displayVideo();

