/*CMD
  command: post_channels
  help:
  need_reply: false
  folder: POST_STUDIO
  aliases:
CMD*/
var a=Bot.getProperty("t6_publish_channels",[]);
var kb=[[{title:"➕ Add Channel",command:"post_channel_add"}]];
for(var i=0;i<a.length;i++)kb.push([{title:"📢 "+a[i],command:"post_publish "+a[i]}]);
kb.push([{title:"⬅️ Post Studio",command:"post_builder"}]);
Bot.sendInlineKeyboard(kb,"📢 *PUBLISH CHANNELS*\n━━━━━━━━━━━━━━\n\nAdd a public channel username where this bot is an administrator, then publish your current draft.");
