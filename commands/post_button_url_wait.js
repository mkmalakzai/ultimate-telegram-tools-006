/*CMD
  command: post_button_url_wait
  help:
  need_reply: true
  folder: POST_STUDIO
  aliases:
CMD*/
var u=String(message||"").trim();
if(!(u.indexOf("https://")==0||u.indexOf("http://")==0||u.indexOf("tg://")==0)){Bot.sendMessage("❌ Invalid URL. Try again.");Bot.runCommand("post_button_url_wait");return;}
var d=User.getProperty("t6_post_draft")||{};d.buttons=d.buttons||[];
d.buttons.push({title:User.getProperty("t6_post_button_title")||"Open",url:u});
User.setProperty("t6_post_draft",d,"json");
Bot.runCommand("post_draft");
