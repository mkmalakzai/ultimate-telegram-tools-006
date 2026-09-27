/*CMD
  command: link_deep
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

Bot.sendInlineKeyboard([[{title:"❌ Cancel",command:"link_tools"}]],"🤖 Send your bot username without @, for example: MyBot");
Bot.runCommand("link_deep_username");
