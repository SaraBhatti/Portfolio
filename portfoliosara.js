// Function to open modal
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = "block";
      closeModalsOnClickOutside(modal); // Call function to close modal if clicked outside
  }
}

// Function to close modal if clicked outside
function closeModalsOnClickOutside(modal) {
  window.addEventListener("click", function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });
}


// Function to close modal
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = "none";
  }
}
