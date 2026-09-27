/*CMD
  command: text_lower
  help:
  need_reply: true
  folder: TOOLS
  aliases:
CMD*/

Bot.sendMessage("Send text to convert to lowercase.");
Bot.run({command:"text_lower_result",options:{},waitForAnswer:true});
