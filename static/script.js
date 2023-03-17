const keys = document.querySelectorAll(".key");

keys.forEach(key => {
  key.addEventListener("mousedown", () => {
    const note = key.getAttribute("data-note");
    playNoteRequest(note);
  });
});

function playNoteRequest(note) {
  fetch(`/play_note?note=${note}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    })
    .catch(error => {
      console.error("There was a problem playing the note:", error);
    });
}
