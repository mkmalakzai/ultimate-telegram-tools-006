/*CMD
  command: file_tools
  help:
  need_reply: true
  folder: TOOLS
  aliases:
CMD*/

if (Bot.getProperty("t6_module_file_tools","yes")!="yes") { Bot.sendMessage("🚫 This tool is currently disabled."); return; }
Bot.sendMessage("📁 *FILE TOOLS*\n━━━━━━━━━━━━━━\n\nSend a document, photo, video, audio or voice file.");
Bot.run({command:"file_inspect", options:{}, waitForAnswer:true});
