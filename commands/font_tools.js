/*CMD
  command: font_tools
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/
Bot.sendInlineKeyboard([
 [{title:"𝗕 Bold",command:"font_pick bold"},{title:"𝘐 Italic",command:"font_pick italic"}],
 [{title:"𝙼 Mono",command:"font_pick mono"},{title:"Ⓒ Circled",command:"font_pick circled"}],
 [{title:"🏠 Main Menu",command:"main_menu"}]
],"🔤 *FONT CHANGER*\n━━━━━━━━━━━━━━\n\nChoose a Unicode text style.");
