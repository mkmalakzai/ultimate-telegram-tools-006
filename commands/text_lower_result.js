/*CMD
  command: text_lower_result
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

Bot.sendMessage(String(message || "").toLowerCase());
