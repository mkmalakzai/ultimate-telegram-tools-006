/*CMD
  command: link_share
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/

Bot.sendMessage("📤 Send the URL you want to turn into a Telegram share link.");
Bot.run({command:"link_share_result", options:{}, waitForAnswer:true});
