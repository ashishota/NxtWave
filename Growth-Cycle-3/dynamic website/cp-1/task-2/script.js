function switchLight(state) {
  const colors = {
    stop: "#cf1124",
    ready: "#f7c948",
    go: "#199473",
    default: "#4b5069"
  };

  const lights = ["stop", "ready", "go"];

  lights.forEach(light => {
    const lightElement = document.getElementById(`${light}Light`);
    const buttonElement = document.getElementById(`${light}Button`);
    const color = (light === state) ? colors[light] : colors.default;

    lightElement.style.backgroundColor = color;
    if(color === colors.default) {
        buttonElement.style.backgroundColor = "#1f1d41";
    } else {
        buttonElement.style.backgroundColor = color;
    }
  });
}
