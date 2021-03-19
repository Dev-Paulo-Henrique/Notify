var chat = document.getElementById("chat");

chat = "<ul id='chat'>" + "</ul>"
chat += "<div>"
chat += "<input id='text' type='text' placeholder='Digite uma mensagem' autocomplete='off'";
chat += "<br>"
chat += "<input id='next' onclick='sendMessage()' type='submit' value='Enviar'>";
chat += "</div>"

document.write(chat);
document.write(html);