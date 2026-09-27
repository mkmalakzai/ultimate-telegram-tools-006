/*CMD
  command: admin_ban_apply
  help:
  need_reply: false
  folder: ADMIN
  aliases:
CMD*/

if (String(user.telegramid) !== String(Bot.getProperty("t6_owner") || "")) return;
var uid = String(message || "").trim();
if (!uid || isNaN(Number(uid))) { Bot.sendMessage("❌ Invalid user ID."); return; }
var prop = "user_banned_" + uid;
var now = Bot.getProperty(prop)=="yes" ? "no" : "yes";
Bot.setProperty(prop,now,"string");
Bot.sendMessage(now=="yes" ? "🚫 User banned: " + uid : "✅ User unbanned: " + uid);
