/*CMD
  command: font_tools
  help:
  need_reply: false
  folder: TOOLS
  aliases:
CMD*/
Bot.sendInlineKeyboard([
 [{title:"𝐁 Serif Bold",command:"font_pick bold"},{title:"𝐼 Serif Italic",command:"font_pick italic"}],
 [{title:"𝑩 Serif Bold Italic",command:"font_pick bolditalic"},{title:"𝗕 Sans Bold",command:"font_pick sansbold"}],
 [{title:"𝘈 Sans Italic",command:"font_pick sansitalic"},{title:"𝘽 Sans Bold Italic",command:"font_pick sansbolditalic"}],
 [{title:"𝙼 Monospace",command:"font_pick mono"},{title:"𝔉 Fraktur",command:"font_pick fraktur"}],
 [{title:"𝕱 Bold Fraktur",command:"font_pick boldfraktur"},{title:"𝔻 Double Struck",command:"font_pick double"}],
 [{title:"Ⓒ Circled",command:"font_pick circled"},{title:"🅒 Negative Circle",command:"font_pick negcircled"}],
 [{title:"🄱 Squared",command:"font_pick squared"},{title:"🅱 Negative Square",command:"font_pick negsquared"}],
 [{title:"Ｓ Fullwidth",command:"font_pick fullwidth"},{title:"ᴀ Small Caps",command:"font_pick smallcaps"}],
 [{title:"ˢ Superscript",command:"font_pick superscript"},{title:"ₛ Subscript",command:"font_pick subscript"}],
 [{title:"ⓑ Parenthesized",command:"font_pick parenthesized"},{title:"ᵁ Modifier",command:"font_pick modifier"}],
 [{title:"🏠 Main Menu",command:"main_menu"}]
],"🔤 *FONT CHANGER*\n━━━━━━━━━━━━━━\n\nChoose from *20 Unicode styles*.\n\nEnglish letters/numbers have the widest support.");
