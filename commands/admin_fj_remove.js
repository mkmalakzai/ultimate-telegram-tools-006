/*CMD
  command: admin_fj_remove
  help:
  need_reply: true
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
Bot.sendMessage("➖ Send the exact channel username to remove.");
Bot.run({command:"admin_fj_remove_save",options:{},waitForAnswer:true});
