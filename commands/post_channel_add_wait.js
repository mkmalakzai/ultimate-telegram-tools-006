/*CMD
  command: post_channel_add_wait
  help:
  need_reply: true
  folder: POST_STUDIO
  aliases:
CMD*/
var ch=String(message||"").trim();if(ch.indexOf("@")!==0){Bot.sendMessage("❌ Send a public username like @mychannel.");Bot.runCommand("post_channel_add_wait");return;}
var a=Bot.getProperty("t6_publish_channels",[]);if(a.indexOf(ch)<0)a.push(ch);Bot.setProperty("t6_publish_channels",a,"json");Bot.sendMessage("✅ Channel saved. Make sure the bot is admin there.");Bot.runCommand("post_channels");
