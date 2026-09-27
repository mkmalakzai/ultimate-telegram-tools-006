/*CMD
  command: admin_watermark
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
var on = Bot.getProperty("t6_watermark_enabled","yes");
var txt = String(Bot.getProperty("t6_watermark_text") || "⚡ Powered by BOTBOX");
Bot.sendInlineKeyboard(
  [
    [{title:on=="yes"?"❌ Disable":"✅ Enable",command:"admin_watermark_toggle"}],
    [{title:"✏️ Change Text",command:"admin_watermark_text"}],
    [{title:"⬅️ Admin Panel",command:"admin_panel"}]
  ],
  "🏷 *WATERMARK SETTINGS*\n━━━━━━━━━━━━━━\n\nStatus: *" + (on=="yes"?"ON ✅":"OFF ❌") + "*\nText: `" + txt + "`"
);
