const { Intents } = require('discord.js');

function EpicRPG(message) {
  
  console.log( message );
  
  this.message = message;
  
  this.check = function() {
    console.log( this.message );
  
    // Add a warning heart react if HP drops below 30%
    // Add a warning triangle if (lost HP*2) > remaining HP
    if (this.message.content.indexOf('remaining HP is') > 0) {
      let str = this.message.content.split('HP, remaining HP is');
      let lostHp = str[0].split('Lost');
      let health = str[1].split('/'),
          fullhealth = health[1].split('*');
      if ((health[0] / fullhealth[0]) < 0.3) { this.message.react("❣️"); }
      if ((lostHp[1] * 2) > health[0]) { this.message.react("⚠️"); }
    }

    // Add RIP when beating miniboss
    if (this.message.content.indexOf('HAS BEEN DEFEATED') > 0) {
      this.message.react("💀");
    }

    // Party when beating the dragon
    if (this.message.content.indexOf('DRAGON DIED,') > 0) {
      this.message.react("🥳");
    }

  }
}
    
module.exports = { EpicRPG }