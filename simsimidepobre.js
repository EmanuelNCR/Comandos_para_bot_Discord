const s = require('snekfetch') //npm i snekfetch
exports.run = async (client, message, args) => {


const argumento = args.slice(1).join(' ') //argumento da pergunta
const url = `https://fb.siblog.net/api/simsimi.php?key=sibendz&text=${argumento}` //link da api para pegarmos a resposta
s.get(url).then(r => {
const resposta = r.body.messages.map(a => a.text)

message.reply(resposta)
//Comando básico, qualquer erro que vc tiver me chame no Discord
//Discord: ! [M]Vini🔨#6945
//Lembrando que o bot pode demorar pra responder.
})
}
