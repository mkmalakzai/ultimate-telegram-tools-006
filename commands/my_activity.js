/*CMD
  command: my_activity
  help:
  need_reply: false
  folder: USER
  aliases:
CMD*/

Bot.sendInlineKeyboard(
  [[{title:"🏠 Main Menu",command:"main_menu"}]],
  "📊 *MY ACTIVITY*\n━━━━━━━━━━━━━━\n\n" +
  "📝 Posts created: *" + Number(User.getProperty("t6_posts_created") || 0) + "*\n" +
  "🆔 ID checks: *" + Number(User.getProperty("t6_id_checks") || 0) + "*\n" +
  "📁 File checks: *" + Number(User.getProperty("t6_file_checks") || 0) + "*"
);
