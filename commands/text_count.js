/*CMD
  command: text_count
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

Bot.sendMessage("Send text to count characters and words.");
Bot.run({command:"text_count_result",options:{},waitForAnswer:true});
