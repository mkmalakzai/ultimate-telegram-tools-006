/*CMD
  command: admin_fj_toggle
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
Bot.setProperty("fj_enabled", Bot.getProperty("fj_enabled","yes")=="yes" ? "no" : "yes", "string");
Bot.runCommand("admin_fj");
