const handler = async (m, {conn}) => {
  m.reply(global.vendedores);
};
handler.command = /^(vendedores|Vendedores)$/i;
export default handler;

global.vendedores = `
𝗘𝘀𝘁𝗼𝘀 𝗦𝗼𝗻 𝗟𝗼𝘀 𝗩𝗲𝗻𝗱𝗲𝗱𝗼𝗿𝗲𝘀 𝗢𝗳𝗶𝗰𝗶𝗮𝗹𝗲𝘀 𝙋𝙖𝙪𝙡𝙞𝙣𝙖 𝙎𝙩𝙤𝙧𝙚 💗  🤺 𝗯𝘆 @paulina.storee

* 𝗯𝘆 @paulina.storee  🤺  : wa.me/56972062866* 


`;
