var name = prompt("Digite seu nome").toUpperCase();

if (name == null || name == "") {
  window.close()
}else{
  localStorage.setItem("Professor", name)
}

var body = document.getElementById("body-prof");
body = "<h1 id='title'>NOTIFY</h1>"
body += "<div id='border'>"
body += "<input id='text' type='text' placeholder='Digite seu nome' value=" + name + ">" + "<br>";
body += "<textarea id='area' class='area' placeholder='Digite seu texto'></textarea>";
body += "<select id='serie' class='area'>" + "<option hidden>" + "Todos" + "</option>" + "<option>" + "1° A " + "</option>" + "</option>" + "<option>" + "1° B " + "</option>" + "<option>" + "2° A " + "</option>" + "<option>" + "2° B " + "</option>" + "<option>" + "3° A " + "</option>" + "<option>" + "3° B " + "</option>"  + "</select>"
body += "<input id='next' onclick='sendMessage()' type='submit' value='Enviar'>";
body += "</div>"
body += "<fieldset id='fieldset'>" + "<ul id='notify'>" + "</ul>" + "</fieldset>"

document.write(body);
document.write(html);
