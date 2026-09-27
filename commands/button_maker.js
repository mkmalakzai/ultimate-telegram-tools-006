/*CMD
  command: button_maker
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

if (Bot.getProperty("t6_module_button_maker","yes")!="yes") { Bot.sendMessage("🚫 This tool is currently disabled."); return; }

Bot.sendInlineKeyboard(
  [
    [{title:"➕ Create URL Button",command:"button_new"}],
    [{title:"📋 Saved Button",command:"button_saved"}],
    [{title:"⬅️ Main Menu",command:"main_menu"}]
  ],
  "🔘 *BUTTON MAKER*\n━━━━━━━━━━━━━━\n\nCreate a reusable Telegram URL button."
);
