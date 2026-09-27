/*CMD
  command: post_buttons_clear
  help:
  need_reply: false
  folder: POST_STUDIO
  aliases:
CMD*/
var d=User.getProperty("t6_post_draft")||{};d.buttons=[];User.setProperty("t6_post_draft",d,"json");Bot.runCommand("post_draft");
