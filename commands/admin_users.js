/*CMD
  command: admin_users
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
var arr = Bot.getProperty("t6_users",[]);
var txt = "👥 *USERS*\n━━━━━━━━━━━━━━\n\nTotal: *" + arr.length + "*\n\n";
var limit = Math.min(arr.length,20);
for (var i=0;i<limit;i++) txt += "• " + arr[i] + "\n";
if (arr.length>20) txt += "\n…and " + (arr.length-20) + " more.";
Bot.sendInlineKeyboard([[{title:"⬅️ Admin Panel",command:"admin_panel"}]],txt);
