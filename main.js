function toggleHamburgerMenu() {
  var x = document.getElementById("nav-bar__ul");
  if (x.classList.contains("responsive")) {
    x.classList.remove('responsive');
    console.log('responsive');
  } else {
    x.classList.add('responsive');
    console.log('remove responsive');
  }
  console.log('hi');
  console.log(x);
}