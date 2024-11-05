async function startScanner() {
    const codeReader = new ZXing.BrowserQRCodeReader(); // Use QR code reader
    const previewElem = document.getElementById('preview');
    const barcodeField = document.getElementById('barcode');

    previewElem.style.display = 'block'; // Show the video element

    try {
        // Decode QR code from the video stream
        const result = await codeReader.decodeOnceFromVideoDevice(null, 'preview');
        barcodeField.value = result.text; // Display the QR code text in the input field
        previewElem.style.display = 'none'; // Hide the video element
        codeReader.reset(); // Stop the video stream
    } catch (error) {
        console.error(error);
        alert("Failed to scan QR code. Please try again.");
        previewElem.style.display = 'none'; // Hide the video element on error
    }
}

