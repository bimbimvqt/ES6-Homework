const colorArr = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
const loadColorList = (colorArr) => {
  let content = "";
  for (value of colorArr) {
    content += `
        <button class = "color-button ${value}" onclick = "changeColor('${value}')"></button>        
    `;
  }
  document.getElementById("colorContainer").innerHTML = content;
  return content;
};

window.onload = function () {
  loadColorList(colorArr);
};

const changeColor = (color) => {
  for (value of colorArr) {
    if (value === color) {
      let colorValue = value;
      let element = document.getElementById("house");
      element.className = "house" + " " + colorValue;
    }
  }
  return colorValue;
};
