function toggleCursor(){
  document.getElementById("cursor").style.color="transparent" === document.getElementById("cursor").style.color? "inherit":"transparent";
}
setInterval(toggleCursor,500)
