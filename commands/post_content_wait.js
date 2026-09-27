/*CMD
  command: post_content_wait
  help:
  need_reply: true
  folder: POST_STUDIO
  aliases:
CMD*/

var d=User.getProperty("t6_post_draft")||{type:"text",buttons:[]};
if(!message){Bot.sendMessage("⚠️ Please send text.");Bot.runCommand("post_content_wait");return;}
d.text=message;
User.setProperty("t6_post_draft",d,"json");
Bot.runCommand("post_draft");
