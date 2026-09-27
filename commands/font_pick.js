/*CMD
  command: font_pick
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/
User.setProperty("t6_font_style",String(params||"bold"),"string");Bot.sendMessage("✍️ Send English letters/numbers to style.");Bot.runCommand("font_result");
