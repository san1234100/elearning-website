import { storeVideo,storePdf,storeBook } from "./utils";
import { displayVideo,displayPdf,displayBook } from "./displayData";
const addCourseBtn = document.getElementById("addcourse");
const formEl = document.querySelector("form");
const courseTypeEl = document.querySelector("form #courseType");
const urlInputEl = document.querySelector("form #urlInput");
const pdfInputEl = document.querySelector("form #pdfInput");


const videoListEl = document.getElementById("videoList");
const pdfListEl = document.getElementById("pdfList");
const bookListEl = document.getElementById("bookList");


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
// document.addEventListener("click",()=>{
//   formEl.classList.add("hidden");
// })
// handle add course button end -->
courseTypeEl.addEventListener("change",handleCourseType)

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formData = new FormData(formEl);
     const courseDetails = Object.fromEntries(formData);
    if(courseDetails.courseType === 'video'){
         storeVideo(courseDetails);
         displayVideo();
    }else if(courseDetails.courseType === 'pdf'){
      storePdf(courseDetails);
      displayPdf();
    }else if(courseDetails.courseType === 'book'){
      storeBook(courseDetails);
      displayBook();
    }else{
      alert("Invalid Type")
    }
   formEl.reset();
})


const optArr=[videoListEl,pdfListEl,bookListEl]
const optionsEls=document.getElementById('options')
const isactiveEl=document.getElementsByClassName('isactive')

optionsEls.addEventListener("click",handleNavbar)

function handleNavbar(e){
  optArr.forEach(val => val.classList.add('hidden'))
  if(e.target.tagName === 'LI'){
    [...isactiveEl].forEach(val => val.classList.remove('active'));
  e.target.classList.add('active')
  if(e.target.textContent === 'Videos'){
    videoListEl.classList.remove('hidden');
    displayVideo();
  }else if(e.target.textContent === 'Pdf'){
    pdfListEl.classList.remove('hidden');
    displayPdf();
  } else if(e.target.textContent === 'Book'){
    bookListEl.classList.remove('hidden');
    displayBook();
  }
  }
  
}


displayVideo();