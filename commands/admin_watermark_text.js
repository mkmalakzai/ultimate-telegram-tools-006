/*CMD
  command: admin_watermark_text
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
Bot.sendMessage("✏️ Send the new watermark text.");
Bot.runCommand("admin_watermark_text_save");
