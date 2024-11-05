async function startScanner() {
    const codeReader = new ZXing.BrowserQRCodeReader(); // Use QR code reader for QR codes
    const previewElem = document.getElementById('preview');
    const barcodeField = document.getElementById('barcode');

    previewElem.style.display = 'block'; // Show the video element

    try {
        // Start scanning for a QR code in the video stream
        const result = await codeReader.decodeOnceFromVideoDevice(null, 'preview');
        barcodeField.value = result.text; // Display the QR code text in the input field
        previewElem.style.display = 'none'; // Hide the video element
        codeReader.reset(); // Stop the video stream
    } catch (error) {
        console.error("QR Code scan failed:", error);
        alert("Failed to scan QR code. Please try again and ensure the QR code is clear and well-lit.");
        previewElem.style.display = 'none'; // Hide the video element on error
    }
}

