// Arquivo temporário só para diagnóstico — pode ser apagado depois de confirmar que está tudo certo.
module.exports = async function handler(req, res) {
  const allEnvKeys = Object.keys(process.env);
  const groqRelated = allEnvKeys.filter(function (k) {
    return k.toUpperCase().indexOf('GROQ') !== -1;
  });

  res.status(200).json({
    temAChaveExata: !!process.env.GROQ_API_KEY,
    tamanhoDaChave: process.env.GROQ_API_KEY ? process.env.GROQ_API_KEY.length : 0,
    variaveisParecidasEncontradas: groqRelated,
    totalDeVariaveisDeAmbiente: allEnvKeys.length,
    ambiente: process.env.VERCEL_ENV || 'desconhecido',
  });
};
