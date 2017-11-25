var guild = getGuild();
var role = guild.getRoleById("ID DA ROLE") //Id da role de staff
    if (author().hasRole(role)) { // Se o usuário que executar tiver a role (cargo) executa o código abaixo.
         args = joinArguments() // O que usuário escrever.
        var evalzado = eval(args);  // Executa o código que o usuário escreveu.
        reply(evalzado) // Envia o codigo executado.
    
} else { 
reply("**Sem permissão |** :no_good:") // Se o usuário não tiver permissão irá mandar a seguinte mensagem: Sem Permissão | 🙅.
    
}
//Lhermebr#0596
//Créditos ao baleia_roxa
//Descrição: Executa comandos de Nashorn diretamente do chat do Discord
