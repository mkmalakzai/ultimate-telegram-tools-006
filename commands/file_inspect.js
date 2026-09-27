/*CMD
  command: file_inspect
  help:
  need_reply: true
  auto_retry_time:
  folder: FILE_SHARE
  aliases:
CMD*/

var data=request||{},type="",id="",name="";
if(data.document){type="document";id=data.document.file_id;name=data.document.file_name||"Document";}
else if(data.video){type="video";id=data.video.file_id;name=data.video.file_name||"Video";}
else if(data.audio){type="audio";id=data.audio.file_id;name=data.audio.file_name||"Audio";}
else if(data.voice){type="voice";id=data.voice.file_id;name="Voice";}
else if(data.photo&&data.photo.length){type="photo";id=data.photo[data.photo.length-1].file_id;name="Photo";}
if(!id){Bot.sendMessage("❌ Unsupported file. Send a document, photo, video, audio or voice.");Bot.runCommand("file_inspect");return;}

var code=String(user.telegramid)+"_"+String(new Date().getTime());
Bot.setProperty("t6_file_"+code,{type:type,file_id:id,name:name,owner:String(user.telegramid),downloads:0},"json");
User.setProperty("t6_pending_file_code",code,"string");
User.setProperty("t6_file_checks",Number(User.getProperty("t6_file_checks")||0)+1,"integer");
Api.getMe({on_result:"file_link_ready"});
