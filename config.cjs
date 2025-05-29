
// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "INCONNU~XD~ecIwgBTD#O65rvoTEqz9J-93_WqIWsorhlG5GlCTTmhXylSqb7e4",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : true,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : true,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : true,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : true,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : true,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : true, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  BOT_NAME: process.env.BOT_NAME || "INCONNU-XD",
  MENU_IMAGE: process.env.MENU_IMAGE || "https://files.catbox.moe/230q0c.jpg",
  DESCRIPTION: process.env.DESCRIPTION || "WELCOME TO ⎯꯭̽Ξ𓆩»»»𝙓_𝙙𝙖𝙧𝙠»»»𓆪Ξ⎯꯭̽     𓆩𓃮𓆪  𓆩𓃮𓆪  𓆩𓃮𓆪  〆͎   ⎯꯭̽ꪹ𝑳𝑬𝑮𝑬𝑵𝑫--𝑩𝑶𝑰𝑰⎯꯭",
  OWNER_NAME: process.env.OWNER_NAME || "⎯꯭̽Ξ𓆩»»»𝙓_𝙙𝙖𝙧𝙠»»»𓆪Ξ⎯꯭̽     𓆩𓃮𓆪  𓆩𓃮𓆪  𓆩𓃮𓆪  〆͎   ⎯꯭̽ꪹ𝑳𝑬𝑮𝑬𝑵𝑫--𝑩𝑶𝑰𝑰⎯꯭",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923360607835",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : true, 
};


module.exports = config;

