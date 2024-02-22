const addCourseBtn = document.getElementById("addcourse");
const formEl = document.querySelector("form");
const courseTypeEl = document.querySelector("form #courseType");
const urlInputEl = document.querySelector("form #urlInput");
const pdfInputEl = document.querySelector("form #pdfInput");
const LocalStorageKey = "video";

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

addCourseBtn.addEventListener("click", () => {
  formEl.classList.toggle("hidden");
});

courseTypeEl.addEventListener("change",handleCourseType)

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formData = new FormData(formEl);
     const courseDetails = Object.fromEntries(formData);
    // console.log(courseDetails);
    const existingVideoList = JSON.parse(localStorage.getItem(LocalStorageKey));
    if(existingVideoList){
        existingVideoList.push(courseDetails);
        localStorage.setItem(LocalStorageKey,JSON.stringify(existingVideoList))
    }else{
        const videoArr=[];
        videoArr.push(courseDetails);
        localStorage.setItem(LocalStorageKey,JSON.stringify(videoArr))
    }
})

const divEl = document.createElement('div');
divEl.className = "bg-white w-60 p-2 rounded h-fit";

const div2El = document.createElement('div');
divEl.className = "w-48";
const imgEl = document.createElement('div');
divEl.className = "w-48";
const div3El = document.createElement('div');
div3El.className = "bg-white w-60 p-2 rounded h-fit";
const h1El = document.createElement('h1');
// h1El.textContent = val -------- dynamic value
h1El.className = "text-darkBlue poppins-medium";
const authorEl = document.createElement('div');
authorEl.className = "poppins-regular text-sm pt-1";
// authorEl.textContent = val -------- dynamic value
const btnEl = document.createElement('button');
btnEl.className = "px-4 py-1.5 text-white mt-3 w-full rounded bg-midBlue hover:bg-blue-600";
btnEl.textContent = View 
div3El.append(h1El,authorEl);
divEl.append(div2El,div3El);
{
  /* <div class="bg-white w-60 p-2 rounded h-fit">
          <div class="w-48">
            <img src="./assets/images/bg-hero.png" alt="" />
          </div>
          <div>
            <h1 class="text-darkBlue poppins-medium">
              Cyberdude Networks private ltd
            </h1>
            <div class="poppins-regular">Anbu</div>
            <button
              class="px-4 py-1.5 text-white mt-3 w-full rounded bg-midBlue"
            >
              View
            </button>
          </div>
          </div> */
};
