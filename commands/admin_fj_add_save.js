/*CMD
  command: admin_fj_add_save
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
var ch = String(message || "").trim();
if (!ch) { Bot.sendMessage("❌ Invalid channel."); return; }
if (ch.indexOf("@") !== 0) ch = "@" + ch;
var arr = Bot.getProperty("fj_channels",[]);
if (arr.indexOf(ch) === -1) arr.push(ch);
Bot.setProperty("fj_channels",arr,"json");
Bot.sendMessage("✅ Channel added: " + ch);
Bot.runCommand("admin_fj");
