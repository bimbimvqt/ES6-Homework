const getElement = (id) => {
  return document.getElementById(id);
};
const hoverText = (id) => {
  var fsize = getElement(id).style.fontSize;
  var newSize = +fsize.replace("px", "") + 10;
  getElement(id).style.fontSize = newSize + "px";
  return newSize;
};

let text = getElement("heading").innerHTML;
text = text.trim();
let textSeparate = [...text];
textSeparate.splice(5, 1);
console.log(textSeparate);

let html = "";
for (value of textSeparate) {
  html += `
         <span>${value}</span>
     `;
  getElement("heading").innerHTML = html;
}
