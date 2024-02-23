const videolocalStorageKey = "video";
const pdflocalStorageKey = "pdf";
const booklocalStorageKey = "book";
export const storeVideo = (courseDetails) => {
    const existingVideoList = JSON.parse(localStorage.getItem(videolocalStorageKey));
    if(existingVideoList){
        existingVideoList.push(courseDetails);
        localStorage.setItem(videolocalStorageKey,JSON.stringify(existingVideoList))
    }else{
        const videoArr=[];
        videoArr.push(courseDetails);
        localStorage.setItem(videolocalStorageKey,JSON.stringify(videoArr))
    }
  }

  
export const storePdf = (courseDetails) => {
    const existingVideoList = JSON.parse(localStorage.getItem(pdflocalStorageKey));
    if(existingVideoList){
        existingVideoList.push(courseDetails);
        localStorage.setItem(pdflocalStorageKey,JSON.stringify(existingVideoList))
    }else{
        const pdfArr=[];
        pdfArr.push(courseDetails);
        localStorage.setItem(pdflocalStorageKey,JSON.stringify(pdfArr))
    }
  }

  
export const storeBook = (courseDetails) => {
    const existingVideoList = JSON.parse(localStorage.getItem(booklocalStorageKey));
    if(existingVideoList){
        existingVideoList.push(courseDetails);
        localStorage.setItem(booklocalStorageKey,JSON.stringify(existingVideoList))
    }else{
        const bookArr=[];
        bookArr.push(courseDetails);
        localStorage.setItem(booklocalStorageKey,JSON.stringify(bookArr))
    }
  }