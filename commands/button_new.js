/*CMD
  command: button_new
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

Bot.sendInlineKeyboard(
  [[{title:"❌ Cancel",command:"button_maker"}]],
  "🔘 *NEW BUTTON*\n━━━━━━━━━━━━━━\n\nSend the button title."
);
Bot.runCommand("button_title_save");
