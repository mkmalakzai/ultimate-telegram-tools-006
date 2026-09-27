/*CMD
  command: admin_ban
  help:
  need_reply: true
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
Bot.sendMessage("🚫 Send a Telegram user ID to ban/unban.");
Bot.run({command:"admin_ban_apply",options:{},waitForAnswer:true});
