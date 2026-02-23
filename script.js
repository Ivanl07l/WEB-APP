const imageInput = document.getElementById("imageInput");
const titleInput = document.getElementById("titleInput");
const addDescriptionBtn = document.getElementById("addDescriptionBtn");
const descriptionContainer = document.getElementById("descriptionContainer");
const submitBtn = document.getElementById("submitBtn");

const resultSection = document.getElementById("resultSection");
const resultImage = document.getElementById("resultImage");
const resultTitle = document.getElementById("resultTitle");
const resultDescriptions = document.getElementById("resultDescriptions");

// Agregar nueva descripción
addDescriptionBtn.addEventListener("click", () => {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "form-control mb-2 descriptionInput";
    newInput.placeholder = "Escribe otra descripción";
    descriptionContainer.appendChild(newInput);
});

// Botón Agregar
submitBtn.addEventListener("click", () => {

    // Mostrar imagen
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            resultImage.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }

    // Mostrar título
    resultTitle.textContent = titleInput.value;

    // Mostrar descripciones
    resultDescriptions.innerHTML = "";
    const descriptionInputs = document.querySelectorAll(".descriptionInput");

    descriptionInputs.forEach(input => {
        if (input.value.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = input.value;
            li.classList.add("mb-2");
            resultDescriptions.appendChild(li);
        }
    });

    // Mostrar sección
    resultSection.classList.remove("d-none");
});
