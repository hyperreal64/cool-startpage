window.onload = function() {
  var wSearch = document.getElementById("wSearch");
  var aSearch = document.getElementById("aSearch");

  let storedLogo = localStorage.getItem('preferredEngine');
  let currentLogo;

  if (!storedLogo) {
    currentLogo = document.getElementById("engineLogo").src;
    localStorage.setItem('preferredEngine', currentLogo);
  } else {
    if (storedLogo.indexOf("arch.svg")) {
      document.getElementById("engineLogo").src = "icons/wp.svg";
      wSearch.style.display = "block";
      aSearch.style.display = "none";
    } else {
      document.getElementById("engineLogo").src = "icons/arch.svg";
      aSearch.style.display = "block";
      wSearch.style.display = "none";
    }
  }
}
