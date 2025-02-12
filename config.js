const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Q0IQ2Z7S#T7hi_MrPRnTbSftp1vqblPVTER9mCrN-if5HY751Qew",
  OWNER_NUM: process.env.OWNER_NUM || "94718108364",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/kaviduRs/MD-HELP/raw/refs/heads/main/img/b1e19851-f5ec-49fe-8d32-d45fbf654021.webp",
  ALIVE_MSG: process.env.ALIVE_MSG || "*yes I'm Alive noW!* 🙈\n\n> 𝐌𝐚𝐝𝐞 𝐛𝐲 *𝐊𝐀𝐕𝐈𝐃𝐔 𝐑𝐀𝐒𝐀𝐍𝐆𝐀*  🎗️",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
  MODE: process.env.MODE || "public",
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "true",
};