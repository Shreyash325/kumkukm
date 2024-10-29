document.getElementById("passwordForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const password = document.getElementById("password").value.trim();
  
  if (password.toLowerCase() === "right") {
    window.location.href = "page2.html";
  } else {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "Incorrect answer. Try again!";
    errorMessage.style.display = "block";
  }
});
