function googleTranslateElementInit() {
  new google.translate.TranslateElement("google_translate_element");
}

let btn_en = document.getElementById("language-en");
let btn_es = document.getElementById("language-es");
let gt_Elements = document.getElementsByClassName("goog-te-combo");

btn_en.onclick = () => {
  gt_Elements[0].childNodes.forEach((element) => {
    if (element.value == "en") {
      gt_Elements[0].value = "en";
      gt_Elements[0].dispatchEvent(new Event("change"));
    }
  });
};

btn_es.onclick = () => {
  gt_Elements[0].childNodes.forEach((element) => {
    if (element.value == "es") {
      gt_Elements[0].value = "es";
      gt_Elements[0].dispatchEvent(new Event("change"));
    }
  });
};
