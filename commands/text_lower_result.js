/*CMD
  command: text_lower_result
  help:
  need_reply: true
  auto_retry_time:
  folder: TOOLS
  aliases:
CMD*/

Bot.sendMessage(String(message || "").toLowerCase());
