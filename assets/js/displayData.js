const videolocalStorageKey = "video";
const pdflocalStorageKey = "pdf";
const booklocalStorageKey = "book";
const videoListEl = document.getElementById("videoList");
const pdfListEl = document.getElementById("pdfList");
const bookListEl = document.getElementById("bookList");



export const displayVideo = () => {
  const videoArr = JSON.parse(localStorage.getItem(videolocalStorageKey));
  const fragment = document.createDocumentFragment();
  [...videoArr].forEach((val) => fragment.append(getCourseCard(val)));
  videoListEl.append(fragment);
};
export const displayPdf = () => {
  const videoArr = JSON.parse(localStorage.getItem(pdflocalStorageKey));
  const fragment = document.createDocumentFragment();
  [...videoArr].forEach((val) => fragment.append(getCourseCard(val)));
  pdfListEl.append(fragment);
};
export const displayBook = () => {
  const videoArr = JSON.parse(localStorage.getItem(booklocalStorageKey));
  const fragment = document.createDocumentFragment();
  [...videoArr].forEach((val) => fragment.append(getCourseCard(val)));
  bookListEl.append(fragment);
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
  btnEl.textContent = "View";
  div3El.append(h1El, authorEl, btnEl);
  divEl.append(div2El, div3El);
  return divEl;
}
