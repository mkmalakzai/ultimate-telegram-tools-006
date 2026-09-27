/*CMD
  command: link_deep
  help:
  need_reply: true
  folder: TOOLS
  aliases:
CMD*/

Bot.sendMessage("🤖 Send your bot username without @, for example: MyBot");
Bot.run({command:"link_deep_username", options:{}, waitForAnswer:true});
