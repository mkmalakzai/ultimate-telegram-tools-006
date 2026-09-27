/*CMD
  command: button_saved
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

var title = String(User.getProperty("t6_button_title") || "");
var url = String(User.getProperty("t6_button_url") || "");
if (!title || !url) { Bot.sendMessage("📋 No saved button yet."); return; }

Bot.sendInlineKeyboard(
  [
    [{title:title,url:url}],
    [{title:"✏️ Replace",command:"button_new"}],
    [{title:"🏠 Main Menu",command:"main_menu"}]
  ],
  "🔘 *BUTTON PREVIEW*\n\nTitle: *" + title + "*\nURL: `" + url + "`"
);
