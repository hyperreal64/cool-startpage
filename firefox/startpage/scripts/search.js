function toggleEngine() {

  var aSearch = document.getElementById("aSearch");
  var wSearch = document.getElementById("wSearch");
  var logo = document.getElementById("engineLogo").src;
  localStorage.setItem('preferredEngine', logo);

  if (logo.indexOf("arch.svg") != -1) {
    document.getElementById("engineLogo").src = "icons/wp.svg";
    wSearch.style.display = "block";
    aSearch.style.display = "none";
  } else {
    document.getElementById("engineLogo").src = "icons/arch.svg";
    aSearch.style.display = "block";
    wSearch.style.display = "none";
  }

  document.getElementById("textField").reset();
}
