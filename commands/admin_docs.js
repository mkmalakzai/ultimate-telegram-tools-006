/*CMD
  command: admin_docs
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
Bot.sendInlineKeyboard(
  [[{title:"⬅️ Admin Panel",command:"admin_panel"}]],
  "📚 *TPL-006 DOCUMENTATION*\n━━━━━━━━━━━━━━\n\n" +
  "• /setup — initialize owner and defaults\n" +
  "• Force Join is enabled by default\n" +
  "• Watermark is enabled by default\n" +
  "• Tool modules can be toggled independently\n" +
  "• Main Menu hides disabled tools\n" +
  "• Ban system uses user_banned_USERID\n" +
  "• Multi-step inputs use Bot.run + waitForAnswer\n\n" +
  "Before release: configure Force Join channels and test every module."
);
