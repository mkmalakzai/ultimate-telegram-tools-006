/*CMD
  command: force_join
  help:
  need_reply: false
  folder: FORCE_JOIN
  aliases:
CMD*/

if(Bot.getProperty("fj_enabled","yes")!="yes"){Bot.runCommand(User.getProperty("t6_after_fj")||"main_menu");return;}
var raw=Bot.getProperty("fj_channels",[]),channels=[];
for(var i=0;i<raw.length;i++){
 var c=raw[i];
 if(typeof c=="string")c={username:c,title:c.replace("@","")};
 if(c&&c.username)channels.push(c);
}
if(!channels.length){Bot.runCommand(User.getProperty("t6_after_fj")||"main_menu");return;}
Bot.setProperty("fj_channels",channels,"json");

if(User.getProperty("t6_fj_completed")==true){
 Bot.runCommand(User.getProperty("t6_after_fj")||"main_menu");
 return;
}

var kb=[];
for(var j=0;j<channels.length;j++)kb.push([{title:"📢 Join "+(channels[j].title||channels[j].username),url:"https://t.me/"+channels[j].username.replace("@","")}]);
kb.push([{title:"✅ Verify Membership",command:"check_join"}]);
Bot.sendInlineKeyboard(kb,"🔒 *ACCESS REQUIRED*\n━━━━━━━━━━━━━━\n\nJoin all required channels below, then tap *✅ Verify Membership*.");
