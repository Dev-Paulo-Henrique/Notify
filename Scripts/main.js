var body = document.getElementById("body");

body = "<h1 id='title'>NOTIFY</h1>"
body += "<input class='student' id='aluno' type='text' placeholder='Digite seu nome' value='" + localStorage.getItem("aluno") +"'>"
body += "<select class='student' id='ano' >" + "<option disabled selected>" + "Informe sua serie" + "</option>" + "<option>" + "1° A " + "</option>" + "</option>" + "<option>" + "1° B " + "</option>" + "<option>" + "2° A " + "</option>" + "<option>" + "2° B " + "</option>" + "<option>" + "3° A " + "</option>" + "<option>" + "3° B " + "</option>"  + "</select>"
body += "<input class='student' id='email' type='email' placeholder='Digite seu email' value='" + localStorage.getItem("email") + "'>"
body += "<button onclick='sendName()' id='send'>Enviar</button>" + "<div id='options'>" +  "<button id='study' onclick='study()'>Aulas</button>" + "<button id='more' onclick='more()'>Chat</button>" + "</div>"
body += "<fieldset id='set'>" + "<ul id='notify'>" + "</ul>" + "</fieldset>"
body += "<p id='txt' hidden></p>"

document.write(body);
document.write(html);

function time(){
today = new Date();
h = today.getHours();
m = today.getMinutes();

document.getElementById('txt').innerHTML = h + ":" + m;
setTimeout('time()', 10000);
if (h >= 13 && h <= 19) {
  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: 'Está no turno de aula!',
    showConfirmButton: false,
    timer: 2000
  })
}
}

function more(){
  if(localStorage.getItem("email") && 
    localStorage.getItem("aluno") !== null && 
    localStorage.getItem("ano") !== "Informe sua serie"){
  open("chat.html")
  }else{
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Informe seus dados',
      showConfirmButton: false,
      timer: 1500
  })
}
}

function study(){
  if(localStorage.getItem("email") && 
    localStorage.getItem("aluno") !== null && 
    localStorage.getItem("ano") !== "Informe sua serie"){
  open("study.html")
  }else{
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Informe seus dados',
      showConfirmButton: false,
      timer: 1500
  })
}
}
