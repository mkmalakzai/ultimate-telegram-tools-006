/*CMD
  command: main_menu
  help:
  need_reply: false
  folder: CORE
  aliases:
CMD*/

if (Bot.getProperty("user_banned_" + user.telegramid) == "yes") {
  Bot.sendMessage("🚫 ACCOUNT RESTRICTED");
  return;
}

var kb = [];
var row1 = [];
var row2 = [];
var row3 = [];

if (Bot.getProperty("t6_module_post_builder","yes")=="yes") row1.push({title:"📝 Post Builder",command:"post_builder"});
if (Bot.getProperty("t6_module_button_maker","yes")=="yes") row1.push({title:"🔘 Button Maker",command:"button_maker"});
if (row1.length) kb.push(row1);

if (Bot.getProperty("t6_module_id_tools","yes")=="yes") row2.push({title:"🆔 ID Tools",command:"id_tools"});
if (Bot.getProperty("t6_module_file_tools","yes")=="yes") row2.push({title:"📁 File Tools",command:"file_tools"});
if (row2.length) kb.push(row2);

if (Bot.getProperty("t6_module_link_tools","yes")=="yes") row3.push({title:"🔗 Link Tools",command:"link_tools"});
if (Bot.getProperty("t6_module_text_tools","yes")=="yes") row3.push({title:"✍️ Text Tools",command:"text_tools"});
if (row3.length) kb.push(row3);

kb.push([{title:"📊 My Activity",command:"my_activity"},{title:"ℹ️ Help",command:"help"}]);

var owner = String(Bot.getProperty("t6_owner") || "");
if (String(user.telegramid) === owner) kb.push([{title:"🛠 Admin Panel",command:"admin_panel"}]);

var wm = "";
if (Bot.getProperty("t6_watermark_enabled","yes")=="yes") {
  wm = "\n\n" + String(Bot.getProperty("t6_watermark_text") || "⚡ Powered by BOTBOX");
}

Bot.sendInlineKeyboard(
  kb,
  "🧰 *ULTIMATE TELEGRAM TOOLS*\n━━━━━━━━━━━━━━\n\n" +
  "Welcome, *" + (user.first_name || "User") + "*!\n\n" +
  "Create, format, inspect and manage useful Telegram content from one place." + wm
);
