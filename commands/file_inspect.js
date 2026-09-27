/*CMD
  command: file_inspect
  help:
  need_reply: true
  auto_retry_time:
  folder: TOOLS
  aliases:
CMD*/

var data = request || {};
var out = "📁 *FILE INSPECTOR*\n━━━━━━━━━━━━━━\n\n";
var found = false;

if (data.document) { out += "Type: *Document*\nFile ID: `" + data.document.file_id + "`\n"; found = true; }
if (data.video) { out += "Type: *Video*\nFile ID: `" + data.video.file_id + "`\n"; found = true; }
if (data.audio) { out += "Type: *Audio*\nFile ID: `" + data.audio.file_id + "`\n"; found = true; }
if (data.voice) { out += "Type: *Voice*\nFile ID: `" + data.voice.file_id + "`\n"; found = true; }
if (data.photo && data.photo.length) { out += "Type: *Photo*\nFile ID: `" + data.photo[data.photo.length-1].file_id + "`\n"; found = true; }

if (!found) { Bot.sendMessage("❌ Unsupported file. Try again from File Tools."); return; }
User.setProperty("t6_file_checks", Number(User.getProperty("t6_file_checks") || 0) + 1, "integer");
Bot.sendInlineKeyboard([[{title:"🔁 Inspect Another",command:"file_tools"}],[{title:"🏠 Main Menu",command:"main_menu"}]], out);
