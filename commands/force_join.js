/*CMD
  command: force_join
  help:
  need_reply: false
  folder: CORE
  aliases:
CMD*/

if (Bot.getProperty("fj_enabled", "yes") != "yes") {
  Bot.runCommand(User.getProperty("t6_after_fj") || "main_menu");
  return;
}

var channels = Bot.getProperty("fj_channels", []);
if (!channels || channels.length === 0) {
  Bot.runCommand(User.getProperty("t6_after_fj") || "main_menu");
  return;
}

User.setProperty("t6_fj_index", 0, "integer");
Bot.runCommand("force_join_next");
