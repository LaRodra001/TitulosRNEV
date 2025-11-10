document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("closeIframe");

    closeBtn.addEventListener("click", () => {
        // Enviar mensaje a la página principal para cerrar el iframe
        window.parent.postMessage("closeIframe", "*");
    });
});
