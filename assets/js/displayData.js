const videolocalStorageKey = "video";
const pdflocalStorageKey = "pdf";
const booklocalStorageKey = "book";
const videoListEl = document.getElementById("videoList");
const pdfListEl = document.getElementById("pdfList");
const bookListEl = document.getElementById("bookList");



export const displayVideo = () => {
  videoListEl.innerHTML=''
 try{
  const videoArr = JSON.parse(localStorage.getItem(videolocalStorageKey));
  const fragment1 = document.createDocumentFragment();
  [...videoArr].forEach((val) => fragment1.append(getCourseCard(val)));
  videoListEl.append(fragment1);
 }catch(e){
  alert("No Data Found")
 }
};
export const displayPdf = () => {
  pdfListEl.innerHTML=''
  try{
  const videoArr = JSON.parse(localStorage.getItem(pdflocalStorageKey));
  const fragment2 = document.createDocumentFragment();
  [...videoArr].forEach((val) => fragment2.append(getCourseCard(val)));
  pdfListEl.append(fragment2);
}catch(e){
  alert("No Data Found")
 }
};
export const displayBook = () => {
  bookListEl.innerHTML=''
  try{
  const videoArr = JSON.parse(localStorage.getItem(booklocalStorageKey));
  const fragment3 = document.createDocumentFragment();
  [...videoArr].forEach((val) => fragment3.append(getCourseCard(val)));
  bookListEl.append(fragment3);
}catch(e){
  alert("No Data Found")
 }
};



function getCourseCard(val) {
  const divEl = document.createElement("div");
  divEl.className = "bg-white w-60 p-2 rounded h-fit";

  const div2El = document.createElement("div");
  div2El.className = "w-48";
  const imgEl = document.createElement("img");
  imgEl.className = "w-48";
  imgEl.src = "./assets/images/bg-hero.png";
  div2El.append(imgEl);

  const div3El = document.createElement("div");
  const h1El = document.createElement("h1");
  h1El.textContent = val.courseTitle;
  h1El.className = "text-darkBlue poppins-medium";
  const authorEl = document.createElement("div");
  authorEl.className = "poppins-regular text-sm pt-1";
  authorEl.textContent = val.author;
  const btnEl = document.createElement("button");
  btnEl.className =
    "px-4 py-1.5 text-white mt-3 w-full rounded bg-midBlue hover:bg-blue-600";
  if(val.courseType === 'video'){
    const aEl = document.createElement("a");
    aEl.href=val.url
    aEl.target="_blank"
    aEl.textContent = "View";
    btnEl.append(aEl)
  }else{
    const aEl = document.createElement("a");
    aEl.href="#"
    aEl.textContent = "Download";
    btnEl.append(aEl)
  }
  div3El.append(h1El, authorEl, btnEl);
  divEl.append(div2El, div3El);
  return divEl;
}
