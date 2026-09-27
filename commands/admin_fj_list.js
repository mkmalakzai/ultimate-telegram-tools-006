/*CMD
  command: admin_fj_list
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
var arr = Bot.getProperty("fj_channels",[]);
var txt = "📋 *FORCE JOIN CHANNELS*\n━━━━━━━━━━━━━━\n\n";
if (!arr.length) txt += "No channels configured.";
else for (var i=0;i<arr.length;i++) txt += (i+1) + ". " + arr[i] + "\n";
Bot.sendInlineKeyboard([[{title:"⬅️ Back",command:"admin_fj"}],[{title:"🏠 Main Menu",command:"main_menu"}]],txt);
