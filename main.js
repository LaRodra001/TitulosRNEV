function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener("DOMContentLoaded", () => {
    const iframeWrapper = document.getElementById("iframeWrapper");
    const iframe = document.getElementById("iframeOverlay");
    const closeBtn = document.getElementById("closeIframe");

    // Abrir iframe
    document.querySelectorAll(".seeMoreLink").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            iframe.src = link.dataset.src;

            // Animación hacia arriba
            iframeWrapper.style.bottom = "0";
        });
    });

    // Cerrar iframe
    closeBtn.addEventListener("click", () => {
        iframeWrapper.style.bottom = "-100%";
        setTimeout(() => iframe.src = "", 500); // limpiar src
    });
});
