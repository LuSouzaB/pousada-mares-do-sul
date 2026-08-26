// Arquivo temporário só para diagnóstico — pode ser apagado depois de confirmar que está tudo certo.
module.exports = async function handler(req, res) {
  const allEnvKeys = Object.keys(process.env);
  const gatewayRelated = allEnvKeys.filter(function (k) {
    return k.toUpperCase().indexOf('GATEWAY') !== -1 || k.toUpperCase().indexOf('AI_') !== -1;
  });

  res.status(200).json({
    temAChaveExata: !!process.env.AI_GATEWAY_API_KEY,
    tamanhoDaChave: process.env.AI_GATEWAY_API_KEY ? process.env.AI_GATEWAY_API_KEY.length : 0,
    variaveisParecidasEncontradas: gatewayRelated,
    totalDeVariaveisDeAmbiente: allEnvKeys.length,
    ambiente: process.env.VERCEL_ENV || 'desconhecido',
  });
};
