function changeBackgroundColor(colorHex) {
  document.getElementById("colorPickerContainer").style.backgroundColor = colorHex;
  document.getElementById("selectedColorHexCode").textContent = colorHex;
}
