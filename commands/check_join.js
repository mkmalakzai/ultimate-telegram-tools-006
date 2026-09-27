/*CMD
  command: check_join
  help:
  need_reply: false
  folder: FORCE_JOIN
  aliases:
CMD*/

var channels=Bot.getProperty("fj_channels",[]);
if(!channels||channels.length==0){
 User.setProperty("t6_fj_completed",true,"boolean");
 Bot.runCommand(User.getProperty("t6_after_fj")||"main_menu");
 return;
}
var index=Number(User.getProperty("t6_fj_check_index")||0);
if(index>=channels.length){
 User.setProperty("t6_fj_completed",true,"boolean");
 User.setProperty("t6_fj_check_index",0,"integer");
 Bot.sendMessage("✅ *JOIN VERIFIED*\n\nAccess granted.");
 Bot.runCommand(User.getProperty("t6_after_fj")||"main_menu");
 return;
}
var ch=channels[index];
if(typeof ch=="string")ch={username:ch,title:ch.replace("@","")};
if(!ch||!ch.username){User.setProperty("t6_fj_check_index",index+1,"integer");Bot.runCommand("check_join");return;}
Api.getChatMember({chat_id:ch.username,user_id:user.telegramid,on_result:"check_join_result"});
