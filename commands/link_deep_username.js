/*CMD
  command: link_deep_username
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

var u = String(message || "").trim().replace("@","");
if (!u) { Bot.sendMessage("❌ Invalid username."); return; }
User.setProperty("t6_deep_username", u, "string");
Bot.sendMessage("Now send the start parameter, for example: promo123");
Bot.run({command:"link_deep_result", options:{}, waitForAnswer:true});
