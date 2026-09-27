/*CMD
  command: text_count_result
  help:
  need_reply: true
  auto_retry_time:
  folder: TOOLS
  aliases:
CMD*/

var t = String(message || "");
var trimmed = t.trim();
var words = trimmed ? trimmed.split(/\\s+/).length : 0;
Bot.sendMessage("📏 *TEXT COUNT*\n\nCharacters: *" + t.length + "*\nWords: *" + words + "*");
