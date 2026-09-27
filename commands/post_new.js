/*CMD
  command: post_new
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

if (Bot.getProperty("t6_module_post_builder","yes")!="yes") { Bot.sendMessage("🚫 This tool is currently disabled."); return; }

Bot.sendMessage("✍️ *NEW POST*\n\nSend the text for your post.");
Bot.run({command:"post_text_save", options:{}, waitForAnswer:true});
