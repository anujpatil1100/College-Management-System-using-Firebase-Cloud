document.getElementById("generate-button").addEventListener("click", function() {
    const noticeTitle = document.getElementById("notice-title").value;
    const noticeContent = document.getElementById("notice-content").value;
    const userDate = document.getElementById("user-date").value;
    const nameFaculty = document.getElementById("name-faculty").value;
    const nameFaculty2 = document.getElementById("name-faculty2").value;
    const designationFaculty = document.getElementById("designation-faculty").value;
    const designationFaculty2 = document.getElementById("designation-faculty2").value;
    const branch = document.getElementById("branch").value;

    const pdfContent = `
        <img src="head.png" width="100%" height="170px">
        <h1>Notice</h1>
        <p>&nbsp;&nbsp;SITCOE/CSE/2024/<br>
        &nbsp;&nbsp;Date:${userDate}
        <center><h2>${noticeTitle}</h2></center>
        <pre style="font-family: Arial, sans-serif; left-margin:300px">${noticeContent}</pre>
        <br><br><br><br><br><br>
        ${nameFaculty}
        ${nameFaculty2}<br>
        ${designationFaculty}
        ${designationFaculty2} <br><br><br>
        <img src="stamps/${branch}.png" height="400px" weidth="350px" style="display: block; margin: 0 auto;">  
    `;

    const element = document.createElement("div");
    element.innerHTML = pdfContent;

    html2pdf().from(element).save("notice.pdf");
});

