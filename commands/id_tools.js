/*CMD
  command: id_tools
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

if (Bot.getProperty("t6_module_id_tools","yes")!="yes") { Bot.sendMessage("🚫 This tool is currently disabled."); return; }

User.setProperty("t6_id_checks", Number(User.getProperty("t6_id_checks") || 0) + 1, "integer");
Bot.sendInlineKeyboard(
  [[{title:"🏠 Main Menu",command:"main_menu"}]],
  "🆔 *ID TOOLS*\n━━━━━━━━━━━━━━\n\nYour User ID: `" + user.telegramid + "`\nChat ID: `" + chat.chatid + "`"
);
