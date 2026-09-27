/*CMD
  command: font_tools
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/
Bot.sendInlineKeyboard([
 [{title:"𝗕 Bold",command:"font_pick bold"},{title:"𝘐 Italic",command:"font_pick italic"}],
 [{title:"𝘽 Bold Italic",command:"font_pick bolditalic"},{title:"𝙼 Monospace",command:"font_pick mono"}],
 [{title:"𝔉 Fraktur",command:"font_pick fraktur"},{title:"𝕱 Bold Fraktur",command:"font_pick boldfraktur"}],
 [{title:"𝔻 Double Struck",command:"font_pick double"},{title:"Ⓒ Circled",command:"font_pick circled"}],
 [{title:"Ｓ Fullwidth",command:"font_pick fullwidth"},{title:"ˢ Small",command:"font_pick superscript"}],
 [{title:"ᵁᴾ Small Caps",command:"font_pick smallcaps"},{title:"🄱 Squared",command:"font_pick squared"}],
 [{title:"🏠 Main Menu",command:"main_menu"}]
],"🔤 *FONT CHANGER*\n━━━━━━━━━━━━━━\n\nChoose from *12 text styles*.\n\nBest support: English letters and numbers.");
