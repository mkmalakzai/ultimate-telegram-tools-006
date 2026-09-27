/*CMD
  command: post_publish
  help:
  need_reply: false
  folder: POST_STUDIO
  aliases:
CMD*/

var ch=String(params||"");var allowed=Bot.getProperty("t6_publish_channels",[]);
if(allowed.indexOf(ch)<0){Bot.sendMessage("❌ Channel is not configured.");return;}
var d=User.getProperty("t6_post_draft");if(!d){Bot.sendMessage("❌ No draft to publish.");return;}
var rows=[];d.buttons=d.buttons||[];for(var i=0;i<d.buttons.length;i++)rows.push([{text:d.buttons[i].title,url:d.buttons[i].url}]);
var wm=Bot.getProperty("t6_watermark_enabled","yes")=="yes"?String(Bot.getProperty("t6_watermark_text")||"⚡ Powered by BOTBOX"):"";
var caption=String(d.text||"")+(wm?(d.text?"\n\n":"")+wm:"");
var reply=rows.length?{inline_keyboard:rows}:undefined;
if(d.type=="photo")Api.sendPhoto({chat_id:ch,photo:d.file_id,caption:caption,reply_markup:reply});
else if(d.type=="video")Api.sendVideo({chat_id:ch,video:d.file_id,caption:caption,reply_markup:reply});
else if(d.type=="document")Api.sendDocument({chat_id:ch,document:d.file_id,caption:caption,reply_markup:reply});
else Api.sendMessage({chat_id:ch,text:caption,reply_markup:reply});
var n=Number(User.getProperty("t6_posts_created")||0)+1;User.setProperty("t6_posts_created",n,"integer");
Bot.sendInlineKeyboard([[{title:"📝 Back to Studio",command:"post_builder"},{title:"🏠 Main Menu",command:"main_menu"}]],"✅ *POST SENT*\n━━━━━━━━━━━━━━\n\nThe post was sent to *"+ch+"*.\n\nIf it does not appear, confirm the bot is an admin with posting permission.");
