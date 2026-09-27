/*CMD
  command: post_caption_wait
  help:
  need_reply: true
  folder: POST_STUDIO
  aliases:
CMD*/

var d=User.getProperty("t6_post_draft")||{};
d.text=(message=="-"?"":String(message||""));
User.setProperty("t6_post_draft",d,"json");
Bot.runCommand("post_draft");
