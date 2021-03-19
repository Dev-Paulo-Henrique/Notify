function handLeLogon() {
  var user = document.getElementById("user");
  var pass = document.getElementById("password");
  var card = document.getElementById("card");
  if (pass.value == "fbalunos" && user.value != "") {
    window.location.replace("Webex.html");
    window.localStorage.setItem("User:",user.value);
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Tudo certo!',
    showConfirmButton: false,
    timer: 1500
    })
  } else {
    pass.value = "";
    card.style.border = "1px solid red";
    navigator.vibrate(100);
    Swal.fire({
      title: 'Senha incorreta',
      text: 'Tente novamente!',
      icon: 'error',
      timer: 1500
    });
  }
}
function open_menu() {
  var submenu = document.getElementById('nav');
  var img = document.getElementById('img_menu');

  if (submenu.style.display == 'block') {
    submenu.style.animationName = 'left';
    submenu.style.animationDuration = '0.5s';
    img.style.transform = 'rotate(0deg)';
    setTimeout(function() {
      submenu.style.display = 'none';
    }, 500)

  } else {
    submenu.style.display = 'block';
    submenu.style.marginLeft = '150px';
    submenu.style.marginTop = '10px';
    submenu.style.background = '#E50914';
    submenu.style.width = 'auto';
    submenu.style.height = 'auto';
    submenu.style.padding = '10px';
    submenu.style.borderRadius = '10px';
    submenu.style.position = 'fixed';
    submenu.style.animationName = 'right';
    submenu.style.border = "1px solid #000";
    submenu.style.animationDuration = '0.5s';
    img.style.transform = 'rotate(90deg)';
  }
}
function ciele() {
window.location.assign("http://fundacaobradesco.webex.com/meet/ciele.lins")
}
function handresson() {
window.location.assign("https://fundacaobradesco.webex.com/meet/handresson.ferreira")
}
function simone() {
window.location.assign("https://fundacaobradesco.webex.com/meet/simone.uehara")
}
function diego() {
window.location.assign("https://fundacaobradesco.webex.com/meet/petronio.lima")
}
function rodrigo() {
window.location.assign("https://fundacaobradesco.webex.com/meet/rodrigo.medeiros")
}
function camila() {
window.location.assign("https://fundacaobradesco.webex.com/meet/camila.novellino")
}
function marcele() {
window.location.assign("https://fundacaobradesco.webex.com/join/marcele.goncalves")
}
function angela() {
window.location.assign("https://fundacaobradesco.webex.com/meet/angela.fernandes")
}
function italo() {
window.location.assign("https://fundacaobradesco.webex.com/meet/italo.santo")
}
function edvaldo() {
window.location.assign("https://fundacaobradesco.webex.com/meet/edvaldo.junior")
}
function romulo() {
window.location.assign("https://fundacaobradesco.webex.com/join/romulo")
}
function romulo() {
window.location.assign("https://fundacaobradesco.webex.com/join/romulo")
}
function natalia() {
window.location.assign("https://fundacaobradesco.webex.com/meet/natalia.gonzalez")
}
function gileno() {
window.location.assign("https://fundacaobradesco.webex.com/meet/gileno.silva")
}
function gleison() {
window.location.assign("https://fundacaobradesco.webex.com/meet/gleison.silva")
}
function adw() {
window.location.assign("https://meet.google.com/lookup/g7soe2s35q?authuser=0&hs=179")
}
function sti() {
window.location.assign("https://meet.google.com/lookup/apcz4qtvly?authuser=0&hs=179")
}
function is() {
window.location.assign("https://meet.google.com/lookup/hzqp53moft?authuser=0&hs=179")
}
function sair() {
window.close()
}

