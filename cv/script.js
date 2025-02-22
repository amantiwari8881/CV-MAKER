document.getElementById("cv-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Form fields se data lena
  const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      summary: document.getElementById("summary").value,
      experience: document.getElementById("experience").value,
      education: document.getElementById("education").value,
      skills: document.getElementById("skills").value
      // border: document.getElementsByClassName("box").value
  };

  // Data ko localStorage mein save karna
  localStorage.setItem("cvData", JSON.stringify(formData));

  // New page par redirect karna
  window.location.href = "cv.html";
});
