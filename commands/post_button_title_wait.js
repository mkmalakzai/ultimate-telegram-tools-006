/*CMD
  command: post_button_title_wait
  help:
  need_reply: true
  folder: POST_STUDIO
  aliases:
CMD*/
if(!message){Bot.runCommand("post_button_title_wait");return;}
User.setProperty("t6_post_button_title",message,"string");
Bot.sendMessage("🔗 Send button URL starting with https://, http:// or tg://");
Bot.runCommand("post_button_url_wait");
