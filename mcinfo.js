const snekfetch = require('snekfetch') //npm i snekfetch
const Discord = require('discord.js') //npm i discord.js
exports.run = async (client, message, args) => {

const url = `https://mc-heads.net/minecraft/profile/${args[0]}`; //Aqui vai o link da api 
snekfetch.get(url).then(resultado => { //Aqui damos get na url acima
//Vamos pegar algumas informações do player e colocar em uma variável 

let nome = resultado.body.name //Nome do player (não necessário)
let uuid = resultado.body.id //UUID do player
let histórico_de_nomes = resultado.body.username_history.map(his => his.name) //Aqui pegamos o histórico de nomes, junto com o map já que  são vários nomes

//Construção da embed
const embed = new Discord.RichEmbed()
.addField('Nomes:', nome)
.addField('UUID:', uuid)
.addField('Histórico de nomes', histórico_de_nomes
.setColor('#000000')
.setFooter('Comando feito por: ! [M]rVini 🔨#6945')
message.channnel.send(embed)
//Um comando simples, qualquer erro entre em contado comigo no Discord
//Discord: ! [M]rVini 🔨#6945

}
})

