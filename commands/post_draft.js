/*CMD
  command: post_draft
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

var txt = String(User.getProperty("t6_post_text") || "");
if (!txt) { Bot.sendMessage("📄 You do not have a saved draft yet."); return; }

var wm = Bot.getProperty("t6_watermark_enabled","yes")=="yes" ? "\n\n" + String(Bot.getProperty("t6_watermark_text") || "⚡ Powered by BOTBOX") : "";

Bot.sendInlineKeyboard(
  [
    [{title:"✏️ Edit",command:"post_new"},{title:"🗑 Clear",command:"post_clear"}],
    [{title:"⬅️ Post Builder",command:"post_builder"}],
    [{title:"🏠 Main Menu",command:"main_menu"}]
  ],
  "👁 *POST PREVIEW*\n━━━━━━━━━━━━━━\n\n" + txt + wm
);
