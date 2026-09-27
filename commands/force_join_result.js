/*CMD
  command: force_join_result
  help:
  need_reply: false
  folder: FORCE_JOIN
  aliases:
CMD*/

var channels=Bot.getProperty("fj_channels",[]);
var i=Number(User.getProperty("t6_fj_index")||0);
var ch=channels[i];
if(typeof ch=="string") ch={username:ch,title:ch.replace("@","")};

var status="";
try{status=String(options.result.status||"");}catch(e){}

if(status=="member"||status=="administrator"||status=="creator"){
  User.setProperty("t6_fj_index",i+1,"integer");
  Bot.runCommand("force_join_next");
  return;
}

var kb=[];
for(var j=0;j<channels.length;j++){
  var c=channels[j];
  if(typeof c=="string") c={username:c,title:c.replace("@","")};
  if(c&&c.username) kb.push([{title:"📢 Join "+(c.title||c.username),url:"https://t.me/"+c.username.replace("@","")}]);
}
kb.push([{title:"✅ Verify Membership",command:"force_join_next"}]);
User.setProperty("t6_fj_index",0,"integer");
Bot.sendInlineKeyboard(kb,"❌ *MEMBERSHIP NOT VERIFIED*\n━━━━━━━━━━━━━━\n\nJoin all required channels first, then verify again.");
