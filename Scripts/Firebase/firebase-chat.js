var firebaseConfig = {
    apiKey: "AIzaSyBkp0dmP5jLcvPwgMQYNpIK6BmBIGmfaQo",

    authDomain: "chat-9bd07.firebaseapp.com",
    databaseURL: "https://chat-9bd07.firebaseio.com",
    projectId: "chat-9bd07",
    storageBucket: "chat-9bd07.appspot.com",
    messagingSenderId: "1096211615371",
    appId: "1:1096211615371:web:cdc5492dcfb9805788ce8e",
    measurementId: "G-2P3BBHFQFN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function sendMessage(){
    var text = document.getElementById("text").value;
    var al = localStorage.getItem("aluno")
    firebase.database().ref("chat").push().set({
      "Al": al,
      "Message": text
    });
    document.getElementById("text").value = "";

    return false;
  }
  
  firebase.database().ref("chat").on("child_added", function (snapshot){
    var html = document.getElementById("chat");
    html += "<li id='message-" + snapshot.key + "'>";
    if(snapshot.val().Al == localStorage.getItem("aluno")){
      html = "<li style='background:antiquewhite' id='message-" + snapshot.key + "'>";
      html += "<button id='btn_delete' style='cursor: pointer; outline:0' data-id='" + snapshot.key + "'onclick='deleteMessage(this);'>";
       html += "Apagar";
      html += "</button>";
      
  }else{
    html = "<li style='background:white' id='message-" + snapshot.key + "'>";
  }
      html += "<strong style='font-size:200%'>" + snapshot.val().Al + "</strong>" + "<p style='font-size:100%'>" + snapshot.val().Message + "</p>";
    html += "</li>";
    
    document.getElementById("chat").innerHTML += html;
  });

function deleteMessage(self){
  var messageId = self.getAttribute("data-id");
  firebase.database().ref("chat").child(messageId).remove();
};
firebase.database().ref("chat").on("child_removed", function (snapshot){
  document.getElementById("message-" + snapshot.key).innerHTML = "<center>" + "<i>" + "<font size=3%>" + "Esta mensagem foi apagada" + "</font>" + "</i>" + "</center>";
  Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Apagado',
  showConfirmButton: false,
  timer: 1500
  })
});