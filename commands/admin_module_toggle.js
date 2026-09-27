/*CMD
  command: admin_module_toggle
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) { Bot.sendMessage("⛔ Access denied."); return; }

var key = String(params || "").trim();
var allowed = ["post_builder","button_maker","id_tools","file_tools","link_tools","text_tools"];
if (allowed.indexOf(key) === -1) return;

var prop = "t6_module_" + key;
Bot.setProperty(prop, Bot.getProperty(prop,"yes")=="yes" ? "no" : "yes", "string");
Bot.runCommand("admin_modules");
