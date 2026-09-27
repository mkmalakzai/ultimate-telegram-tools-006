/*CMD
  command: admin_ban
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
Bot.sendMessage("🚫 Send a Telegram user ID to ban/unban.");
Bot.runCommand("admin_ban_apply");
