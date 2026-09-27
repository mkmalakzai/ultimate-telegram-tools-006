/*CMD
  command: button_new
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

Bot.sendMessage("🔘 Send the button title.");
Bot.run({command:"button_title_save", options:{}, waitForAnswer:true});
