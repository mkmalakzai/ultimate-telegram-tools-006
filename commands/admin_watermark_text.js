/*CMD
  command: admin_watermark_text
  help:
  need_reply: true
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
Bot.sendMessage("✏️ Send the new watermark text.");
Bot.run({command:"admin_watermark_text_save",options:{},waitForAnswer:true});
