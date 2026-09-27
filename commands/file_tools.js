/*CMD
  command: file_tools
  help:
  need_reply: false
  auto_retry_time:
  folder: TOOLS

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

if (Bot.getProperty("t6_module_file_tools","yes")!="yes") { Bot.sendMessage("🚫 This tool is currently disabled."); return; }

Bot.sendInlineKeyboard(
  [[{title:"❌ Cancel",command:"main_menu"}]],
  "📁 *FILE TOOLS*\n━━━━━━━━━━━━━━\n\nSend a document, photo, video, audio or voice file."
);
Bot.runCommand("file_inspect");
