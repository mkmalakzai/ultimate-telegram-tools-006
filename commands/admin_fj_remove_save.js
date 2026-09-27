/*CMD
  command: admin_fj_remove_save
  help:
  need_reply: true
  auto_retry_time:
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
var ch = String(message || "").trim();
if (ch.indexOf("@") !== 0) ch = "@" + ch;
var arr = Bot.getProperty("fj_channels",[]);
var out = [];
for (var i=0;i<arr.length;i++) if (String(arr[i])!==ch) out.push(arr[i]);
Bot.setProperty("fj_channels",out,"json");
Bot.sendMessage("✅ Removed if it existed: " + ch);
Bot.runCommand("admin_fj");
