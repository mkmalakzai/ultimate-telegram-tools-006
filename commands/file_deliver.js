/*CMD
  command: file_deliver
  help:
  need_reply: false
  folder: FILE_SHARE
  aliases:
CMD*/

var code=String(params||"");
var f=Bot.getProperty("t6_file_"+code);
if(!f){Bot.sendInlineKeyboard([[{title:"🏠 Main Menu",command:"main_menu"}]],"❌ *FILE NOT FOUND*\n\nThis file link is invalid or no longer available.");return;}
var cap="📁 *"+String(f.name||"Shared File")+"*";
if(f.type=="photo")Api.sendPhoto({chat_id:user.telegramid,photo:f.file_id,caption:cap});
else if(f.type=="video")Api.sendVideo({chat_id:user.telegramid,video:f.file_id,caption:cap});
else if(f.type=="audio")Api.sendAudio({chat_id:user.telegramid,audio:f.file_id,caption:cap});
else if(f.type=="voice")Api.sendVoice({chat_id:user.telegramid,voice:f.file_id});
else Api.sendDocument({chat_id:user.telegramid,document:f.file_id,caption:cap});
f.downloads=Number(f.downloads||0)+1;Bot.setProperty("t6_file_"+code,f,"json");
Bot.sendInlineKeyboard([[{title:"🏠 Open Tools",command:"main_menu"}]],"✅ File delivered.");
