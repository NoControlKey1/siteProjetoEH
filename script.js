// aguarda o DOM estar pronto para executar 
$(document).ready(function(){
  $('#loginAluno').submit(function(evento){
    var usuario = $('#inputUsuario').val()
    var senha = $('#inputSenha').val()
    if(usuario == 'admin' && senha == '123'){
      $('#mensagem').addClass('alert alert-sucess alert-dismissible fade show')
      $('#mensagem').text('Usuário Logado!').show().fadeOut(3000)
      // $('#mensagem').removeClass('alert-warning')
    }
    else{
      $('#mensagem').addClass('alert alert-warning alert-dismissible fade show')
      // $('#mensagem').removeClass('alert-success')
      $('#mensagem').text('Usuário ou Senha Inválida!').show().fadeOut(3000)
      evento.preventDefault() // bloqueia o evento de submit
    }
  })
})