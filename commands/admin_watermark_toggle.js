/*CMD
  command: admin_watermark_toggle
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
Bot.setProperty("t6_watermark_enabled", Bot.getProperty("t6_watermark_enabled","yes")=="yes" ? "no" : "yes", "string");
Bot.runCommand("admin_watermark");
