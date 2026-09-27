/*CMD
  command: text_tools
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

if (Bot.getProperty("t6_module_text_tools","yes")!="yes") { Bot.sendMessage("🚫 This tool is currently disabled."); return; }

Bot.sendInlineKeyboard(
  [
    [{title:"🔠 UPPERCASE",command:"text_upper"},{title:"🔡 lowercase",command:"text_lower"}],
    [{title:"📏 Count Text",command:"text_count"}],
    [{title:"🏠 Main Menu",command:"main_menu"}]
  ],
  "✍️ *TEXT TOOLS*\n━━━━━━━━━━━━━━\n\nQuick text utilities."
);
