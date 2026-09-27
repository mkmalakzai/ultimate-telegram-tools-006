/*CMD
  command: link_deep_username
  help:
  need_reply: true
  auto_retry_time:
  folder: TOOLS
  aliases:
CMD*/

var u = String(message || "").trim().replace("@","");
if (!u) { Bot.sendMessage("❌ Invalid username."); return; }
User.setProperty("t6_deep_username", u, "string");
Bot.sendMessage("Now send the start parameter, for example: promo123");
Bot.runCommand("link_deep_result");
