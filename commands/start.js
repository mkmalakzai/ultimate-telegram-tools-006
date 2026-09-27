/*CMD
  command: /start
  help:
  need_reply: false
  folder: CORE
  aliases:
CMD*/

if (Bot.getProperty("user_banned_" + user.telegramid) == "yes") {
  Bot.sendMessage("🚫 ACCOUNT RESTRICTED\n\nYour access to this bot has been restricted by an administrator.");
  return;
}

if (Bot.getProperty("t6_setup_done") !== "yes") {
  var owner = String(Bot.getProperty("t6_setup_owner") || "6589090462");
  if (String(user.telegramid) === owner) {
    Bot.sendInlineKeyboard(
      [[{title:"⚙️ Setup",command:"/setup"}]],
      "🧰 *ULTIMATE TELEGRAM TOOLS*\n━━━━━━━━━━━━━━\n\nThis bot is not configured yet."
    );
  } else {
    Bot.sendMessage("🛠 This bot is being configured. Please try again soon.");
  }
  return;
}

var uid = String(user.telegramid);
var users = Bot.getProperty("t6_users", []);

if (users.indexOf(uid) === -1) {
  users.push(uid);
  Bot.setProperty("t6_users", users, "json");
}

Bot.setProperty("t6_name_" + uid, user.first_name || user.username || uid, "string");
User.setProperty("t6_after_fj", "main_menu", "string");
Bot.runCommand("force_join");
