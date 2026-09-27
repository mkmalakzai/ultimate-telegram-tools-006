/*CMD
  command: link_tools
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

if (Bot.getProperty("t6_module_link_tools","yes")!="yes") { Bot.sendMessage("🚫 This tool is currently disabled."); return; }

Bot.sendInlineKeyboard(
  [
    [{title:"📤 Share Link",command:"link_share"},{title:"🤖 Bot Deep Link",command:"link_deep"}],
    [{title:"🏠 Main Menu",command:"main_menu"}]
  ],
  "🔗 *LINK TOOLS*\n━━━━━━━━━━━━━━\n\nCreate Telegram share and deep links."
);
