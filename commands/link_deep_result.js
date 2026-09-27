/*CMD
  command: link_deep_result
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

var p = String(message || "").trim();
var u = String(User.getProperty("t6_deep_username") || "");
if (!p || !u) { Bot.sendMessage("❌ Missing data."); return; }
Bot.sendMessage("✅ *BOT DEEP LINK*\n\n`https://t.me/" + u + "?start=" + encodeURIComponent(p) + "`");
