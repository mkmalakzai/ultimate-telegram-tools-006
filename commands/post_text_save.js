/*CMD
  command: post_text_save
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

var txt = String(message || "").trim();
if (!txt) { Bot.sendMessage("❌ Please send valid text."); return; }

User.setProperty("t6_post_text", txt, "string");
User.setProperty("t6_posts_created", Number(User.getProperty("t6_posts_created") || 0) + 1, "integer");

Bot.sendInlineKeyboard(
  [
    [{title:"👁 Preview",command:"post_draft"},{title:"🔘 Add Button",command:"button_maker"}],
    [{title:"🏠 Main Menu",command:"main_menu"}]
  ],
  "✅ *POST SAVED*\n\nYour draft is ready."
);
