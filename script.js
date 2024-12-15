const generateBtn = document.getElementById("generateBtn");
const urlInput = document.getElementById("urlInput");
const qrCodeDiv = document.getElementById("qrcode");

generateBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();

  if (!url) {
    alert("Please enter a valid URL.");
    return;
  }

  qrCodeDiv.innerHTML = ""; 
  QRCode.toDataURL(url)
    .then((urlData) => {
      const img = document.createElement("img");
      img.src = urlData;
      img.alt = "QR Code";
      qrCodeDiv.appendChild(img);
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to generate QR code.");
    });
});
