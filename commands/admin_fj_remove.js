/*CMD
  command: admin_fj_remove
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
Bot.sendMessage("➖ Send the exact channel username to remove.");
Bot.runCommand("admin_fj_remove_save");
