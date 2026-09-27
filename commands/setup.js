/*CMD
  command: /setup
  help: Initialize TPL-006
  need_reply: false
  folder: SETUP
  aliases: setup
CMD*/

var INITIAL_OWNER_ID = "6589090462";

if (!user || !user.telegramid) { return; }

var uid = String(user.telegramid);
var savedOwner = String(Bot.getProperty("t6_owner") || "");
var setupOwner = savedOwner || String(Bot.getProperty("t6_setup_owner") || INITIAL_OWNER_ID);
var ready = Bot.getProperty("t6_setup_done") === "yes" && !!savedOwner;

if (uid !== setupOwner) {
  Bot.sendMessage(ready ? "🔒 Setup is available to the owner only." : "🛠 This bot is being configured.");
  return;
}

if (ready) {
  Bot.sendInlineKeyboard(
    [
      [{title:"🛠 Admin Panel",command:"admin_panel"}],
      [{title:"🏠 Main Menu",command:"main_menu"}]
    ],
    "✅ *SETUP COMPLETE*\n\nTPL-006 is already configured."
  );
  return;
}

var action = String(typeof params === "undefined" ? "" : params || "").trim();

if (action !== "confirm") {
  Bot.sendInlineKeyboard(
    [[
      {title:"✅ Complete Setup",command:"/setup confirm"},
      {title:"⏳ Later",command:"/setup later"}
    ]],
    "⚙️ *TPL-006 SETUP*\n━━━━━━━━━━━━━━\n\n" +
    "Template: *Ultimate Telegram Tools*\n" +
    "Category: *Utilities*\n" +
    "Force Join: *Enabled by default*\n" +
    "Watermark: *Enabled by default*\n\n" +
    "Complete setup to activate the bot."
  );
  return;
}

Bot.setProperty("t6_owner", setupOwner, "string");
Bot.setProperty("t6_setup_done", "yes", "string");
Bot.setProperty("t6_setup_version", 1, "integer");
Bot.setProperty("t6_users", [], "json");

Bot.setProperty("fj_enabled", "yes", "string");
if (!Bot.getProperty("fj_channels")) Bot.setProperty("fj_channels", [], "json");

Bot.setProperty("t6_watermark_enabled", "yes", "string");
Bot.setProperty("t6_watermark_text", "⚡ Powered by BOTBOX", "string");

var modules = ["post_builder","button_maker","id_tools","file_tools","link_tools","text_tools"];
for (var i = 0; i < modules.length; i++) {
  Bot.setProperty("t6_module_" + modules[i], "yes", "string");
}

Bot.sendMessage("✅ *SETUP COMPLETE*\n\nUltimate Telegram Tools is ready.");
Bot.runCommand("admin_panel");
