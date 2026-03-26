const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

// SERVER HTTP UNTUK ANTI-SLEEP (RENDER)
http.createServer((req, res) => {
  res.write('Bot is Online 24/7!');
  res.end();
}).listen(8080);

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once('ready', () => {
  console.log(`${client.user.tag} sudah ready!`);
});

// Ganti DISCORD_TOKEN dengan nama variabel di Render nanti
client.login(process.env.DISCORD_TOKEN);
