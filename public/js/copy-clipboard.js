document.getElementById("copyBtn")
.onclick = function() {
     let text = document.getElementById("alltext").value;
     navigator.clipboard.writeText(text)
     .then(() => {
          alert('Text copied to clipboard');
     })
    .catch(err => {
          alert('Error in copying text: ', err);
    });
}

$(document).ready(function () {
     $("#generate").click(function () {
          $("#copyBtn").css("display", "block");
          $("#alltext").css("display", "block");
     });
});