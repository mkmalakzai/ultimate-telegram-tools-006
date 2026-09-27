/*CMD
  command: post_new
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

if (Bot.getProperty("t6_module_post_builder","yes")!="yes") { Bot.sendMessage("🚫 This tool is currently disabled."); return; }

Bot.sendInlineKeyboard(
  [[{title:"❌ Cancel",command:"post_builder"}]],
  "✍️ *NEW POST*\n━━━━━━━━━━━━━━\n\nSend the text for your post."
);
Bot.runCommand("post_text_save");
