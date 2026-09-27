/*CMD
  command: link_share_result
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

var url = String(message || "").trim();
if (!url) { Bot.sendMessage("❌ Invalid URL."); return; }
var encoded = encodeURIComponent(url);
Bot.sendMessage("✅ *TELEGRAM SHARE LINK*\n\n`https://t.me/share/url?url=" + encoded + "`");
