/*CMD
  command: post_clear
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

User.setProperty("t6_post_text", "", "string");
Bot.sendMessage("🗑 Draft cleared.");
Bot.runCommand("post_builder");
