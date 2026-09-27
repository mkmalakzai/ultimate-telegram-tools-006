/*CMD
  command: post_type
  help:
  need_reply: false
  folder: POST_STUDIO
  aliases:
CMD*/

var type=String(params||"text");
if(["text","photo","video","document"].indexOf(type)<0){Bot.runCommand("post_builder");return;}
User.setProperty("t6_post_draft",{type:type,text:"",file_id:"",buttons:[]},"json");
if(type=="text"){
 Bot.sendMessage("✍️ Send your post text.");
 Bot.runCommand("post_content_wait");
}else{
 Bot.sendMessage(type=="photo"?"🖼 Send the photo.":type=="video"?"🎬 Send the video.":"📄 Send the document.");
 Bot.runCommand("post_media_wait");
}
