let gmail = document.getElementById('gmail')
let senha = document.getElementById('senha')
let saida_erro_gmail = document.querySelector('div.saida_erro_gmail')
let saida_erro_senha = document.querySelector('div.saida_erro_senha')
function registroLogin() {
    let verificar_gmail = gmail.value
    let verificar_senha = senha.value
    if (verificar_gmail == '' && verificar_senha == '') {
        saida_erro_gmail.innerHTML = 'campo vazio'
        saida_erro_senha.innerHTML = 'campo vazio'
    }
    else if(verificar_gmail == '' && verificar_senha != '') {
        saida_erro_gmail.innerHTML = 'campo vazio'
        saida_erro_senha.innerHTML = ''
 
    }
    else if(verificar_gmail != '' && verificar_senha == '') {
        saida_erro_senha.innerHTML = 'campo vazio'
        saida_erro_gmail.innerHTML = ''
    }
    else {
        saida_erro_gmail.innerHTML = ''
        saida_erro_senha.innerHTML = ''
        alert('Logado com sucesso!')
    }
    saida_erro_gmail = ''
    saida_erro_senha = ''
}