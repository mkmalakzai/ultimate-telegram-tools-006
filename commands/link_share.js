/*CMD
  command: link_share
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

Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"link_tools"}]],"📤 Send the URL you want to turn into a Telegram share link.");
Bot.runCommand("link_share_result");
