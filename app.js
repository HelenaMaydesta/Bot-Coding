const Discord = require("discord.js");
const client = new Discord.Client();
//UPTIME ROBOT (WEB)
const { get } = require("snekfetch");
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log("Pinging");
  response.sendStatus(200);
})
app.listen(process.env.PORT);
setInterval(() => {
http.get('https://glitch.com/~plowe-icr');
}, 280000);
client.on("ready", async () => {
  console.log(`${client.user.tag} sudah online!`);
  client.user.setActivity("Jangan Lupa Subscribe");
});
client.on("message", async message => {
  if (message.content === "indonesia") message.reply(":flag_id:");
//COMMAND BOT DI SERVER.JS
const prefix = "~"
if(!message.content.startsWith(prefix)) return null;
let msg = message.content.toLowerCase();
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
let command = cmd;

let commandFiles;
try{
  commandFiles = require(`./commands/${cmd}.js`)
} catch (err) {
}
const db = require("quick.db")
const now = Date.now()
if(db.has(`cd_${message.author.id}`)) {
  const expirationTime = db.get(`cd_${message.author.id}`) + 3000
  if(now < expirationTime) {
  const timeLeft = (expirationTime - now) / 5000;
		return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${cmd}\` command.`);
  }
}
  db.set(`cd_${message.author.id}`, now);
  setTimeout(() => {
    db.delete(`cd_${message.author.id}`)
  },3000)
try {
  commandFiles.run(client, message, args)
} catch (err) {
  } finally {
    console.log(`${message.author.tag} menggunakan command ${prefix}${cmd}`)
  }

});
let prefix = "~"
client.on('message', message => {
  if(message.content.startsWith(`${prefix}ping`)) {
const start = Date.now()
message.channel.send(":ping_pong: Tunggu sebentar ya...").then(message => {
  
const end = Date.now()
message.edit(`:ping_pong: Ketemu! Ping kamu adalah **${(end - start)}**ms!`)
})
  }
  
  if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Command Itu Kurang Tepat! Ketik ~say <your text>')
    message.channel.send(text)
  }
  
if(message.content.startsWith(`${prefix}kick`)) {
  
  let member = message.mentions.members.first();
  member.kick().then((member) => {
    message.channel.send(`${member.displayName} Successfully removed from server`);
  }).catch(() => {
    if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
      message.reply("You do not have permissions to use this command!");
    } else if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
      message.reply("You do not have permissions to use this command!please don't use that command!");
    }

   })
}
  if(message.content.startsWith(`${prefix}ban`)) {
  
  let member = message.mentions.members.first();
  member.ban().then((member) => {
    message.channel.send(`${member.displayName} 
has been successfully blocked from the server!`);
  }).catch(() => {
    if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
      message.reply("You do not have permissions to use this command!");
    } else if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
      message.reply("You do not have permissions to use this command!please don't use that command!");
    }

   })
}
})  
client.login(process.env.TOKEN);
