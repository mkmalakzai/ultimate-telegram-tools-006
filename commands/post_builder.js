/*CMD
  command: post_builder
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

if (Bot.getProperty("t6_module_post_builder","yes")!="yes") { Bot.sendMessage("🚫 This tool is currently disabled."); return; }

Bot.sendInlineKeyboard(
  [
    [{title:"✍️ New Post",command:"post_new"}],
    [{title:"📄 My Draft",command:"post_draft"}],
    [{title:"⬅️ Main Menu",command:"main_menu"}]
  ],
  "📝 *POST BUILDER*\n━━━━━━━━━━━━━━\n\nBuild Telegram-ready posts with text and buttons."
);
