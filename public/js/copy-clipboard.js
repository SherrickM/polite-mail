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

$(document).on("click", "#generate",function () {
     $("#copyBtn").css("display", "block");
     $("#alltext").css("display", "block");
 });



