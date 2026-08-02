function uploadFile() {

    const input = document.getElementById("fileInput");
    const output = document.getElementById("output");
    const downloadLink = document.getElementById("downloadLink");

    if (input.files.length === 0) {
        alert("Please select a file.");
        return;
    }

    const file = input.files[0];

    output.innerHTML = `
        <h3>File Uploaded Successfully!</h3>
        <p><b>Name:</b> ${file.name}</p>
        <p><b>Size:</b> ${(file.size/1024).toFixed(2)} KB</p>
        <p><b>Type:</b> ${file.type}</p>
    `;

    const url = URL.createObjectURL(file);

    downloadLink.href = url;
    downloadLink.download = file.name;
    downloadLink.innerHTML = "⬇ Download File";
    downloadLink.style.display = "inline-block";

    const formData = new FormData();
    formData.append("file", file);
    fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        output.innerHTML = `
        <h3>${data.message}</h3>
        <p>File: ${data.filename}</p>
        <a href="${data.url}" target="_blank">Open Uploaded File</a>
       `;
    })
    .catch(error => {
         console.log(error);
    });
}