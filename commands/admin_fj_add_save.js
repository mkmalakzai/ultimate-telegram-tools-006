/*CMD
  command: admin_fj_add_save
  help:
  need_reply: true
  auto_retry_time:
  folder: ADMIN
  aliases:
CMD*/

if(String(user.telegramid)!==String(Bot.getProperty("t6_owner")||""))return;
var username=String(message||"").trim();
if(username.indexOf("@")!==0){Bot.sendMessage("❌ Invalid username. Send it like `@yourchannel`.");Bot.runCommand("admin_fj_add_save");return;}
var channels=Bot.getProperty("fj_channels",[]);
var normalized=[];
for(var i=0;i<channels.length;i++){
  var c=channels[i];
  if(typeof c=="string") c={username:c,title:c.replace("@","")};
  if(c&&c.username){
    if(c.username==username){Bot.sendMessage("⚠️ This channel is already added.");Bot.runCommand("admin_fj");return;}
    normalized.push(c);
  }
}
normalized.push({username:username,title:username.replace("@","")});
Bot.setProperty("fj_channels",normalized,"json");
Bot.sendMessage("✅ Channel added successfully.");
Bot.runCommand("admin_fj");
