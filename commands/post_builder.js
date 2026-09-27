/*CMD
  command: post_builder
  help:
  need_reply: false
  folder: POST_STUDIO
  aliases:
CMD*/

if(Bot.getProperty("t6_module_post_builder","yes")!="yes"){Bot.sendMessage("🚫 This tool is currently disabled.");return;}
Bot.sendInlineKeyboard([
 [{title:"📝 Text Post",command:"post_type text"},{title:"🖼 Photo Post",command:"post_type photo"}],
 [{title:"🎬 Video Post",command:"post_type video"},{title:"📄 Document Post",command:"post_type document"}],
 [{title:"👁 My Draft",command:"post_draft"},{title:"📢 Publish Channels",command:"post_channels"}],
 [{title:"🏠 Main Menu",command:"main_menu"}]
],"📝 *POST STUDIO*\n━━━━━━━━━━━━━━\n\nCreate media posts, add inline buttons, preview them and publish directly to your Telegram channels.");
