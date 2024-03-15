function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    } else {
        console.error("Modal with ID '" + modalId + "' not found.");
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    } else {
        console.error("Modal with ID '" + modalId + "' not found.");
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
