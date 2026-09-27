/*CMD
  command: admin_stats
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
var arr = Bot.getProperty("t6_users",[]);
var enabled = 0;
var mods = ["post_builder","button_maker","id_tools","file_tools","link_tools","text_tools"];
for (var i=0;i<mods.length;i++) if (Bot.getProperty("t6_module_"+mods[i],"yes")=="yes") enabled++;

Bot.sendInlineKeyboard(
  [[{title:"⬅️ Admin Panel",command:"admin_panel"}]],
  "📊 *STATISTICS*\n━━━━━━━━━━━━━━\n\n" +
  "👥 Registered users: *" + arr.length + "*\n" +
  "🧩 Enabled modules: *" + enabled + "/6*\n" +
  "📢 Force Join: *" + (Bot.getProperty("fj_enabled","yes")=="yes"?"ON":"OFF") + "*\n" +
  "🏷 Watermark: *" + (Bot.getProperty("t6_watermark_enabled","yes")=="yes"?"ON":"OFF") + "*"
);
