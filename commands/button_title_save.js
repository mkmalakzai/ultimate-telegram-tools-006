/*CMD
  command: button_title_save
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

var t = String(message || "").trim();
if (!t) { Bot.sendMessage("❌ Invalid title."); return; }
User.setProperty("t6_button_title", t, "string");
Bot.sendMessage("🔗 Now send the full URL, for example: https://t.me/telegram");
Bot.run({command:"button_url_save", options:{}, waitForAnswer:true});
