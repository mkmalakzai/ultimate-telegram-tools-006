/*CMD
  command: *
  help:
  need_reply: false
  auto_retry_time:
  folder: CORE

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases:
  group:
CMD*/

if (!user || !user.telegramid) { return; }

if (Bot.getProperty("user_banned_" + user.telegramid) == "yes") {
  Bot.sendMessage("🚫 ACCOUNT RESTRICTED");
  return;
}

if (Bot.getProperty("t6_setup_done") !== "yes") {
  var owner = String(Bot.getProperty("t6_setup_owner") || "6589090462");

  if (String(user.telegramid) === owner) {
    Bot.sendInlineKeyboard(
      [[{title:"⚙️ Setup",command:"/setup"}]],
      "🧰 *ULTIMATE TELEGRAM TOOLS*\n━━━━━━━━━━━━━━\n\nSetup is not complete yet."
    );
  } else {
    Bot.sendMessage("🛠 This bot is being configured. Please try again soon.");
  }

  return;
}

User.setProperty("t6_after_fj", "main_menu", "string");
Bot.runCommand("force_join");
