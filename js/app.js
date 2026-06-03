const inputEl = document.getElementById("inputTexto");
const btnEl = document.getElementById("btnCalcular");
const resultEl = document.getElementById("resultadoTexto");

const esPalindromo = (frase) => {
    const fraseLimpia = frase.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¿¡! ]/g, "");

    const fraseAlReves = fraseLimpia.split("").reverse().join("");

    return fraseLimpia === fraseAlReves;
};

btnEl.addEventListener("click", () => {
    const texto = inputEl.value.trim();

    if (texto === "") {
        resultEl.textContent = "Error: ¡El campo no puede estar vacío!";        
        resultEl.style.color = "red";
        return; 
    }

    const resultado = esPalindromo(texto);
    
    if (resultado === true) {
        resultEl.textContent = `¡Sí, es un palíndromo! ✔`;
        resultEl.style.color = "white";
    } else {
        resultEl.textContent = `No, no es un palíndromo ❌`;
        resultEl.style.color = "white";
    }

    inputEl.value = "";
    inputEl.focus();
});
