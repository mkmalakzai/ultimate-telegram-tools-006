/*CMD
  command: text_upper
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

Bot.sendMessage("Send text to convert to UPPERCASE.");
Bot.run({command:"text_upper_result",options:{},waitForAnswer:true});
