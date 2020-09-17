const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setTitle('Help Commands')
  .setColor('RED')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('Ini adalah beberapa command yang tersedia') 
  .addField('`ping,help`', true)
  .addField('`say,kick,ban`', true)
  .addField('`jika bot ini tidak merespon, harap chat ke (nama)`')
  message.channel.send(embed)
}
