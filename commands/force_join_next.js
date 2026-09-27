/*CMD
  command: force_join_next
  help:
  need_reply: false
  folder: CORE
  aliases:
CMD*/

var channels = Bot.getProperty("fj_channels", []);
var i = Number(User.getProperty("t6_fj_index") || 0);

if (i >= channels.length) {
  User.setProperty("t6_fj_index", 0, "integer");
  Bot.runCommand(User.getProperty("t6_after_fj") || "main_menu");
  return;
}

var ch = String(channels[i] || "");
if (!ch) {
  User.setProperty("t6_fj_index", i + 1, "integer");
  Bot.runCommand("force_join_next");
  return;
}

Api.getChatMember({
  chat_id: ch,
  user_id: user.telegramid,
  on_result: "force_join_result"
});
