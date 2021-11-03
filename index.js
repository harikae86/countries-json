function displayInfo() {
    let name = peru.name.official;
    let nameH1 = document.createElement('h1');
    nameH1.textContent = name;
    document.body.appendChild(nameH1);
}

window.addEventListener('load', displayInfo);
