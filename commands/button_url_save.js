/*CMD
  command: button_url_save
  help:
  need_reply: true
  auto_retry_time:
  folder: TOOLS
  aliases:
CMD*/

var url = String(message || "").trim();
if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0 && url.indexOf("tg://") !== 0) {
  Bot.sendMessage("❌ Please send a valid URL starting with http://, https:// or tg://");
  return;
}
User.setProperty("t6_button_url", url, "string");
Bot.sendMessage("✅ Button saved.");
Bot.runCommand("button_saved");
