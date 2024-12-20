// Öffnet das Modal mit dem großen Profilbild
function openModal() {
    document.getElementById("profileModal").style.display = "block";
}

// Schließt das Modal, wenn auf den Hintergrund oder den Schließen-Button geklickt wird
function closeModal() {
    document.getElementById("profileModal").style.display = "none";
}

// Verhindert das Schließen des Modals, wenn auf das Bild selbst geklickt wird
document.querySelector(".modal-content").addEventListener("click", function(event) {
    event.stopPropagation();
});
