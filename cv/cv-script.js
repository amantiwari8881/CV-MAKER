document.addEventListener("DOMContentLoaded", function() {
    // localStorage se data fetch karna
    const cvData = JSON.parse(localStorage.getItem("cvData"));

    if (cvData) {
        document.getElementById("cv-name").innerText = cvData.name;
        document.getElementById("cv-email").innerText = cvData.email;
        document.getElementById("cv-phone").innerText = cvData.phone;
        document.getElementById("cv-address").innerText = cvData.address;
        document.getElementById("cv-summary").innerText = cvData.summary;
        document.getElementById("cv-experience").innerText = cvData.experience;
        document.getElementById("cv-education").innerText = cvData.education;
        document.getElementById("cv-skills").innerText = cvData.skills;
    }
});

// CV ko image ke roop mein download karne ka function
function downloadImage() {
    html2canvas(document.getElementById("cv")).then(canvas => {
        let link = document.createElement("a");
        link.download = "cv.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}
