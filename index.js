// don't edit these lines!
// needed for heroku to bring life!
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
express().listen(PORT, () => console.log(`Listening on ${ PORT }`))


const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const rest = new REST({ version: '9' }).setToken(token);
console.log("there should be text in the console")
//Tokens
const token = process.env['token']
const CLIENT_ID = process.env['client_id']
const GUILD_ID = process.env['guild_id']

//Commands
const commands = [{
  name: 'ping',
  description: 'Replies with Pong!'
}]; 

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();