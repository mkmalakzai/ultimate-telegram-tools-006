/*CMD
  command: /admin
  help: Open admin panel
  need_reply: false
  auto_retry_time:
  folder: ADMIN

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: admin
  group:
CMD*/

if (!user || !user.telegramid) { return; }

var owner = String(Bot.getProperty("t6_owner") || "");

if (!owner || Bot.getProperty("t6_setup_done") !== "yes") {
  Bot.sendMessage("⚠️ Setup is not complete yet.");
  return;
}

if (String(user.telegramid) !== owner) {
  Bot.sendMessage("⛔ Access denied.");
  return;
}

Bot.runCommand("admin_panel");
