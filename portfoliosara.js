// Get the modal
var modal = document.getElementById("myModal");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}


function predictNews() {
  var news = document.getElementById("inputNews").value;

  // Make an AJAX request to your Python code 
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://github.com/SaraBhatti/FakeNews/blob/main/FakeNewsBERT.ipynb", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          document.getElementById("predictionResult").innerText = response.prediction;
      }
  };

  xhr.send(JSON.stringify({ news: news }));
}
