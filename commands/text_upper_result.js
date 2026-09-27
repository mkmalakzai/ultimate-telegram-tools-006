/*CMD
  command: text_upper_result
  help:
  need_reply: true
  auto_retry_time:
  folder: TOOLS
  aliases:
CMD*/

Bot.sendMessage(String(message || "").toUpperCase());
