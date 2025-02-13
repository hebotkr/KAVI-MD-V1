const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "ir51HCTZ#BHNz-O0JaJickiS2m1hpC_Wh4XPa_PZb1biHtNX8JXk",
  OWNER_NUM: process.env.OWNER_NUM || "94718108364",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/CMN1L03G/IMG-20250205-WA0002-3.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "*yes I'm Alive noW!* 🙈\n\n> 𝐌𝐚𝐝𝐞 𝐛𝐲 *𝐊𝐀𝐕𝐈𝐃𝐔 𝐑𝐀𝐒𝐀𝐍𝐆𝐀*  🎗️",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
  MODE: process.env.MODE || "public",
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "true",
};
//=
