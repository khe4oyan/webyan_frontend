{
  const dropDownButton = document.querySelector(".header .languageSelectButton");
  
  dropDownButton.addEventListener("click", () => {
    const otherLanguagesDOM = document.querySelector(".otherLanguages");
    otherLanguagesDOM.classList.toggle("hide");
  });
}