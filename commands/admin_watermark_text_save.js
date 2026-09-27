/*CMD
  command: admin_watermark_text_save
  help:
  need_reply: true
  auto_retry_time:
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
var txt = String(message || "").trim();
if (!txt) { Bot.sendMessage("❌ Invalid watermark."); return; }
Bot.setProperty("t6_watermark_text",txt,"string");
Bot.sendMessage("✅ Watermark updated.");
Bot.runCommand("admin_watermark");
