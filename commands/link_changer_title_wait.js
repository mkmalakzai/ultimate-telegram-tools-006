/*CMD
  command: link_changer_title_wait
  help:
  need_reply: true
  folder: TOOLS
  aliases:
CMD*/
var u=User.getProperty("t6_changed_link");if(!u){Bot.runCommand("link_tools");return;}
Bot.sendInlineKeyboard([[{title:String(message||"Open Link"),url:u}],[{title:"🔗 Link Tools",command:"link_tools"}]],"✅ *LINK CHANGER*\n━━━━━━━━━━━━━━\n\nYour destination is now presented behind a custom button title.\n\nNote: this changes presentation, not the destination URL itself.");
