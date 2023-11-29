const handler = async (m, {conn}) => {
  m.reply(global.vendedores);
};
handler.command = /^(vendedores|Vendedores)$/i;
export default handler;

global.vendedores = `
𝗘𝘀𝘁𝗼𝘀 𝗦𝗼𝗻 𝗟𝗼𝘀 𝗩𝗲𝗻𝗱𝗲𝗱𝗼𝗿𝗲𝘀 𝗢𝗳𝗶𝗰𝗶𝗮𝗹𝗲𝘀 𝗝𝗼𝘀𝘀 𝗕𝗼𝘁  🤺 𝗯𝘆 @𝗮𝗻𝗰𝗲𝗹𝘇𝘇𝘇 

* 𝗯𝘆 @𝗮𝗻𝗰𝗲𝗹𝘇𝘇𝘇  🤺  : wa.me/56986469687* 


*🇦🇷 Vendedora Ofc Argentina : wa.me/5491162522169*

`;
