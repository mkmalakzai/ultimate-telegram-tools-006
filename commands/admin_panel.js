/*CMD
  command: admin_panel
  help:
  need_reply: false
  folder: ADMIN
  aliases: /admin
CMD*/

var owner = String(Bot.getProperty("t6_owner") || "");
if (String(user.telegramid) !== owner) { Bot.sendMessage("⛔ Access denied."); return; }

var users = Bot.getProperty("t6_users", []);

Bot.sendInlineKeyboard(
  [
    [{title:"🧩 Tool Modules",command:"admin_modules"},{title:"📢 Force Join",command:"admin_fj"}],
    [{title:"🏷 Watermark",command:"admin_watermark"},{title:"👥 Users",command:"admin_users"}],
    [{title:"📊 Statistics",command:"admin_stats"},{title:"🚫 Ban User",command:"admin_ban"}],
    [{title:"📚 Documentation",command:"admin_docs"}],
    [{title:"🏠 Main Menu",command:"main_menu"}]
  ],
  "🛠 *TPL-006 • ADMIN PANEL*\n━━━━━━━━━━━━━━\n\n" +
  "👥 Users: *" + users.length + "*\n" +
  "📢 Force Join: *" + (Bot.getProperty("fj_enabled","yes")=="yes" ? "ON ✅" : "OFF ❌") + "*\n" +
  "🏷 Watermark: *" + (Bot.getProperty("t6_watermark_enabled","yes")=="yes" ? "ON ✅" : "OFF ❌") + "*"
);
