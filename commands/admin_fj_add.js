/*CMD
  command: admin_fj_add
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
Bot.sendMessage("➕ Send channel username, for example: @BOTBOXOfficial\n\nThe bot must be able to check membership.");
Bot.runCommand("admin_fj_add_save");
