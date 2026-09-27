/*CMD
  command: file_link_ready
  help:
  need_reply: false
  folder: FILE_SHARE
  aliases:
CMD*/

var code=User.getProperty("t6_pending_file_code");
if(!code){Bot.runCommand("file_tools");return;}
var username="";
try{username=String(options.result.username||"");}catch(e){}
if(!username){Bot.sendMessage("❌ Could not detect this bot username. Please try again.");return;}
Bot.setProperty("t6_bot_username",username,"string");
var link="https://t.me/"+username+"?start=file_"+code;
Bot.sendInlineKeyboard([
 [{title:"📤 Share File",url:"https://t.me/share/url?url="+encodeURIComponent(link)}],
 [{title:"🔁 Upload Another",command:"file_tools"},{title:"🏠 Main Menu",command:"main_menu"}]
],"✅ *FILE LINK CREATED*\n━━━━━━━━━━━━━━\n\n📁 Your file is stored for sharing through this bot.\n\n🔗 "+link+"\n\nAnyone opening this link can receive the file from this bot.");
