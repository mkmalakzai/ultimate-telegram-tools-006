/*CMD
  command: text_upper_result
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

Bot.sendMessage(String(message || "").toUpperCase());
