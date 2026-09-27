/*CMD
  command: post_media_wait
  help:
  need_reply: true
  folder: POST_STUDIO
  aliases:
CMD*/

var d=User.getProperty("t6_post_draft")||{};
var id="";
if(d.type=="photo"&&request.photo&&request.photo.length) id=request.photo[request.photo.length-1].file_id;
if(d.type=="video"&&request.video) id=request.video.file_id;
if(d.type=="document"&&request.document) id=request.document.file_id;
if(!id){Bot.sendMessage("⚠️ Please send the requested file type.");Bot.runCommand("post_media_wait");return;}
d.file_id=id;
User.setProperty("t6_post_draft",d,"json");
Bot.sendMessage("✍️ Now send the caption/text for this post. Send - to keep it empty.");
Bot.runCommand("post_caption_wait");
