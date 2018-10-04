function $(id){
  return document.getElementById(id);
}

if(screen.width < 380){
  $('sm-footer').innerHTML = "<br><br><br><br><br><br><br><br><br><br><br>";
}