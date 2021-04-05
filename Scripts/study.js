var study = document.getElementById("study");
var data = new Date();
var dias = new Array(
 'Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'
);
Swal.fire({
    position: 'center',
    icon: 'warning',
    title: 'Acesse o Portal Educação!',
    showConfirmButton: false,
    timer: 2000
  })

study = "<h1>Horários</h1>";
study += `<p>Hoje é ` + `<span>${dias[data.getDay()]}</span><br><br>Usuário: <span>${localStorage.getItem('aluno')}</span></p><br><p>Série: <span>${localStorage.getItem('ano')}</span></p>`
study += "<br>"
study += "<div class='inp'>"
study += "<input type='button' value='1°A Horário' onclick='umha()'>"
study += "<input type='button' value='2°A Horário' onclick='doisha()'>"
study += "<input type='button' value='3°A Horário' onclick='tresha()'>"
study += "<input type='button' value='1°B Horário' onclick='umhb()'>"
study += "<input type='button' value='2°B Horário' onclick='doishb()'>"
study += "<input type='button' value='3°B Horário' onclick='treshb()'>"
study += "<input type='button' value='Artes' onclick='angela()'>"
study += "<input type='button' value='Biologia' onclick='marcele()'>"
study += "<input type='button' value='Ed. Fís. 1/2 ano' onclick='natalia()'>"
study += "<input type='button' value='Ed. Fís. 3 ano' onclick='gileno()'>"
study += "<input type='button' value='Espanhol' onclick='camila()'>"
study += "<input type='button' value='Filosofia' onclick='romulo()'>"
study += "<input type='button' value='Física' onclick='rodrigo()'>"
study += "<input type='button' value='Geografia' onclick='diego()'>"
study += "<input type='button' value='História' onclick='handresson()'>"
study += "<input type='button' value='Inglês' onclick='italo()'>"
study += "<input type='button' value='Matemática' onclick='edvaldo()'>"
study += "<input type='button' value='Português' onclick='simone()'>"
study += "<input type='button' value='Projeto de vida' onclick='gleison()'>"
study += "<input type='button' value='Química' onclick='ciele()'>"
study += "<input type='button' value='Sociologia' onclick='romulo()'>" 
study += "<input type='button' value='1° ADW' onclick='adw()'>"
study += "<input type='button' value='2° STI' onclick='sti()'>"
study += "<input type='button' value='3° IS' onclick='is()'>"
study += "<br>"
study += "<input type='button' value='Fechar' onclick='sair()' id='back' style='width:98%'>"
study += "</div>"

document.write(study)
