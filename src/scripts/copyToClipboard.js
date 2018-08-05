const email = document.querySelector(".email p");

email.addEventListener('click', function() {
  document.execCommand('copy');
});

email.addEventListener('copy', function(e) {
  e.preventDefault();
  if (e.clipboardData) {
    e.clipboardData.setData("text/plain", email.textContent);
    console.log(e.clipboardData.getData("text"))
  }
});
