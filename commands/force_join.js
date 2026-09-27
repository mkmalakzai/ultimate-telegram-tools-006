/*CMD
  command: force_join
  help:
  need_reply: false
  folder: FORCE_JOIN
  aliases:
CMD*/

if (Bot.getProperty("fj_enabled","yes") != "yes") {
  Bot.runCommand(User.getProperty("t6_after_fj") || "main_menu");
  return;
}

var raw = Bot.getProperty("fj_channels", []);
var channels = [];
for (var i=0;i<raw.length;i++) {
  if (typeof raw[i] == "string") channels.push({username:raw[i],title:raw[i].replace("@","")});
  else if (raw[i] && raw[i].username) channels.push(raw[i]);
}
if (!channels.length) {
  Bot.runCommand(User.getProperty("t6_after_fj") || "main_menu");
  return;
}
Bot.setProperty("fj_channels",channels,"json");

var kb=[];
for(var j=0;j<channels.length;j++){
  kb.push([{title:"📢 Join "+(channels[j].title||channels[j].username),url:"https://t.me/"+channels[j].username.replace("@","")}]);
}
kb.push([{title:"✅ Verify Membership",command:"force_join_next"}]);
User.setProperty("t6_fj_index",0,"integer");

Bot.sendInlineKeyboard(kb,"🔒 *ACCESS REQUIRED*\n━━━━━━━━━━━━━━\n\nJoin all required channels below, then tap *✅ Verify Membership*.");
