/*CMD
  command: link_changer_wait
  help:
  need_reply: true
  folder: TOOLS
  aliases:
CMD*/
var u=String(message||"").trim();if(!(u.indexOf("https://")==0||u.indexOf("http://")==0||u.indexOf("tg://")==0)){Bot.sendMessage("❌ Send a valid URL.");Bot.runCommand("link_changer_wait");return;}
User.setProperty("t6_changed_link",u,"string");Bot.sendMessage("✍️ Now send the display text/title.");
Bot.runCommand("link_changer_title_wait");
