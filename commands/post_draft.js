/*CMD
  command: post_draft
  help:
  need_reply: false
  folder: POST_STUDIO
  aliases:
CMD*/

var d=User.getProperty("t6_post_draft");
if(!d){Bot.sendInlineKeyboard([[{title:"➕ Create Post",command:"post_builder"}]],"📭 No draft yet.");return;}
d.buttons=d.buttons||[];
var rows=[];for(var i=0;i<d.buttons.length;i++)rows.push([{text:d.buttons[i].title,url:d.buttons[i].url}]);
var wm=Bot.getProperty("t6_watermark_enabled","yes")=="yes"?String(Bot.getProperty("t6_watermark_text")||"⚡ Powered by BOTBOX"):"";
var caption=String(d.text||"")+(wm?(d.text?"\n\n":"")+wm:"");
var reply=rows.length?{inline_keyboard:rows}:undefined;
if(d.type=="photo"&&d.file_id)Api.sendPhoto({chat_id:user.telegramid,photo:d.file_id,caption:caption,reply_markup:reply});
else if(d.type=="video"&&d.file_id)Api.sendVideo({chat_id:user.telegramid,video:d.file_id,caption:caption,reply_markup:reply});
else if(d.type=="document"&&d.file_id)Api.sendDocument({chat_id:user.telegramid,document:d.file_id,caption:caption,reply_markup:reply});
else Bot.sendMessage(caption||"Empty post.");
Bot.sendInlineKeyboard([
 [{title:"➕ Add Button",command:"post_button_add"},{title:"🗑 Clear Buttons",command:"post_buttons_clear"}],
 [{title:"📢 Publish",command:"post_channels"},{title:"🆕 New Post",command:"post_builder"}],
 [{title:"🏠 Main Menu",command:"main_menu"}]
],"👁 *POST PREVIEW*\n━━━━━━━━━━━━━━\nType: *"+String(d.type||"text").toUpperCase()+"*\nButtons: *"+d.buttons.length+"*");
