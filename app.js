(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

    
  const downloadButton = document.querySelector(".main-btn");

  downloadButton.addEventListener("click", () => {
    const resumeUrl =
      "https://github.com/OkMoroz/CV-Oksana-Moroz/raw/main/CV%20Oksana%20Moroz%20FE.pdf";

    const downloadLink = document.createElement("a");
    downloadLink.href = resumeUrl;
    downloadLink.download = "CV Oksana Moroz FE.pdf";

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  });

