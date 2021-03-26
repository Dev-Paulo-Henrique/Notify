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

  function sendName() {
    var email = document.getElementById("email").value;
    var aluno = document.getElementById("aluno").value;
    var ano = document.getElementById("ano").value;
    localStorage.setItem("email", email)
    localStorage.setItem("aluno", aluno)
    localStorage.setItem("ano", ano)
    if(localStorage.getItem("email") && 
    localStorage.getItem("aluno") !== null && 
    localStorage.getItem("ano") !== "Informe sua serie"){
    firebase.database().ref("chat").push().set({
      "Email": email,
      "Aluno": aluno,
      "Ano": ano,
      "Al": "Aluno Novo",
      "Message": aluno + " - " + ano + " foi cadastrado"
    })
    Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Cadastrado',
  showConfirmButton: false,
  timer: 1500
  })
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

  firebase.database().ref("notify").on("child_added", function (snapshot){
    var html = document.getElementById("notify");
    html += "<li id='message-" + snapshot.key + "'>";
    html = "<li style='background:white' id='message-" + snapshot.key + "'>";
      html += "<strong style='font-size:200%'>" + snapshot.val().Sender + " - " + snapshot.val().Serie + "</strong>" + "<p style='font-size:100%'>" + snapshot.val().Message + "</p>";
    html += "</li>";
    
    document.getElementById("notify").innerHTML += html;
  });
  
  
