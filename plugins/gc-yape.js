const handler = async (m, {conn}) => {
  m.reply(global.yape);
};
handler.command = /^(Yape|Comprar|comprar|yape)$/i;
export default handler;

global.yape = `
𝗛𝗼𝗹𝗮 𝗘𝘀𝘁𝗲 𝗘𝘀 𝗘𝗹 yape 𝗦𝗶 𝗗𝗲𝘀𝗲𝗮𝘀 𝗔𝗱𝗾𝘂𝗶𝗿𝗶𝗿 𝗘𝗹 𝗕𝗼𝘁  

Método 🇵🇪

Titular: Paulina Arleth castaneyra

N° : 952110000

🙊 𝗔𝗩𝗜𝗦𝗢 : 𝗥𝗲𝗰𝘂𝗲𝗿𝗱𝗮 𝗠𝗮𝗻𝗱𝗮𝗿 𝗖𝗼𝗺𝗽𝗿𝗼𝗯𝗮𝗻𝘁𝗲 𝗢 𝗖𝗮𝗽𝘁𝘂𝗿𝗮 𝗗𝗲𝗹 𝗣𝗮𝗴𝗼
`;
