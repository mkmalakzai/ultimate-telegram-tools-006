/*CMD
  command: admin_modules
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) { Bot.sendMessage("⛔ Access denied."); return; }

function st(k){ return Bot.getProperty("t6_module_"+k,"yes")=="yes" ? "✅" : "❌"; }

Bot.sendInlineKeyboard(
  [
    [{title:st("post_builder")+" Post Studio",command:"admin_module_toggle post_builder"}],
    [{title:st("id_tools")+" ID Tools",command:"admin_module_toggle id_tools"},{title:st("file_tools")+" File Tools",command:"admin_module_toggle file_tools"}],
    [{title:st("link_tools")+" Link Tools",command:"admin_module_toggle link_tools"},{title:st("text_tools")+" Text Tools",command:"admin_module_toggle text_tools"}],
    [{title:"⬅️ Admin Panel",command:"admin_panel"}]
  ],
  "🧩 *TOOL MODULES*\n━━━━━━━━━━━━━━\n\nEnable or disable tools shown to users."
);
