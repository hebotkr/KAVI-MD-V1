/* plugins lyrics search
Type cjs
Scraper nya ins
Skrep: https://whatsapp.com/channel/0029VadJEZZ8aKvCkRJsAE2Z
plug:https://whatsapp.com/channel/0029VagEmD96hENqH9AdS72V/408
*/
const axios = require("axios");
const cheerio = require("cheerio");
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "ly",
    react: "‼️",
    desc: "get lyrics.",
    category: "main",
    filename: __filename
},
async function findSongs(text) {
  try {
    if (typeof text !== "string") {
      throw new Error("Input harus berupa string.");
    }

    const searchText = encodeURIComponent(text);
    const { data } = await axios.get(`https://songsear.ch/q/${searchText}`);

    const $ = cheerio.load(data);

    const firstResult = $("div.results > div").first(); 

    if (!firstResult.length) {
      throw new Error("Lagu tidak ditemukan.");
    }

    const result = {
      title:
        firstResult.find(".head > h3 > b").text().trim() +
        " - " +
        firstResult.find(".head > h2 > a").text().trim(),
      album: firstResult.find(".head > p").text().trim(),
      number: firstResult.find(".head > a").attr("href")?.split("/")[4],
      thumb: firstResult.find(".head > a > img").attr("src"),
    };

    if (!result.number) {
      throw new Error("Gagal mengambil nomor lagu.");
    }

    console.log("Search Result: ", result);

    const { data: lyricData } = await axios.get(
      `https://songsear.ch/api/song/${result.number}?text_only=true`
    );

    if (!lyricData.song || !lyricData.song.text_html) {
      throw new Error("Lirik tidak ditemukan.");
    }

    let lyrics = lyricData.song.text_html
      .replace(/<br\/>/g, "\n")
      .replace(/&#x27;/g, "'")
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/\n+/g, "\n")
      .trim();

    return {
      status: true,
      title: result.title,
      album: result.album,
      thumb: result.thumb,
      lyrics: lyrics,
    };
  } catch (err) {
    console.error("Error:", err.message);
    return {
      status: false,
      error: err.message || "Terjadi kesalahan.",
    };
  }
}

const handler = async (m, { text, command }) => {
  try {
    if (command === "lirik") {
      if (!text || typeof text !== "string") {
        return m.reply("Masukkan judul lagu! Contoh: .lirik let her go");
      }

      const result = await findSongs(text);

      if (!result.status) {
        return m.reply(`😹 ${result.error}`);
      }

      let response = `🎵 *${result.title}*\n📀 Album: ${result.album}\n\n📜 Lirik:\n${result.lyrics}`;

      if (result.thumb) {
        try {
          await m.reply({ image: { url: result.thumb }, caption: response });
        } catch (err) {
          console.error("Gagal mengirim gambar:", err.message);
          await m.reply(response);
        }
      } else {
        await m.reply(response);
      }
    }
  } catch (error) {
    console.error(error);
    m.reply("Terjadi kesalahan saat mengambil data.");
  }
};

handler.command = ["lirik"];
handler.tags = ["music"];
handler.limit = true;

module.exports = handler;
