/*CMD
  command: force_join_result
  help:
  need_reply: false
  folder: CORE
  aliases:
CMD*/

var channels = Bot.getProperty("fj_channels", []);
var i = Number(User.getProperty("t6_fj_index") || 0);
var ch = String(channels[i] || "");

var status = "";
try { status = String(options.result.status || ""); } catch(e) {}

if (status == "member" || status == "administrator" || status == "creator") {
  User.setProperty("t6_fj_index", i + 1, "integer");
  Bot.runCommand("force_join_next");
  return;
}

var joinUrl = "https://t.me/" + ch.replace("@", "");

Bot.sendInlineKeyboard(
  [
    [{title:"📢 Join Channel",url:joinUrl}],
    [{title:"✅ Check Joined",command:"force_join"}]
  ],
  "🔒 *JOIN REQUIRED*\n━━━━━━━━━━━━━━\n\nPlease join the required channel to continue."
);
