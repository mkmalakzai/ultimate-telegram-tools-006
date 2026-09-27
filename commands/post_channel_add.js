/*CMD
  command: post_channel_add
  help:
  need_reply: false
  folder: POST_STUDIO
  aliases:
CMD*/
Bot.sendMessage("📢 Send channel username like @mychannel.\n\nThe bot must be an administrator there with permission to post.");
Bot.runCommand("post_channel_add_wait");
