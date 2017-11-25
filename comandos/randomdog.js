var conteudo = getURL("https://random.dog/woof.json"); //Pega o conteúdo de uma URL

var json = JSON.parse(conteudo); // Transformamos ela em JSON

reply("Olha, um cachorrinho fofinho para você! " + json["url"]); //Resposta da Loritta no chat
//Lhermebr#0596
//Creditos ao MrPowerGamerBR
//Descrição: Manda fotos de cachorrinhos no seu servidor :3