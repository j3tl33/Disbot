const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});
bot.on('message', message => {
    
if(message.content === 'password')
var role = message.guild.roles.find(role => role.name === "Member");
message.member.addRole(role);
})


bot.login('NjI2NzUzODEwMTk4NTYwNzY5.XYy-rQ.RhGWlBYIK46B3VQUF-Uncg7C6RM');
