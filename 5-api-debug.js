// Arquivo temporário só para diagnóstico — pode ser apagado depois de resolver o problema.
// Ele NÃO mostra a chave, só confirma se ela existe e alguns detalhes do ambiente.

module.exports = async function handler(req, res) {
  const allEnvKeys = Object.keys(process.env);
  const anthropicRelated = allEnvKeys.filter(function (k) {
    return k.toUpperCase().indexOf('ANTHROPIC') !== -1;
  });

  res.status(200).json({
    temAChaveExata: !!process.env.ANTHROPIC_API_KEY,
    tamanhoDaChave: process.env.ANTHROPIC_API_KEY ? process.env.ANTHROPIC_API_KEY.length : 0,
    variaveisParecidasEncontradas: anthropicRelated,
    totalDeVariaveisDeAmbiente: allEnvKeys.length,
    ambiente: process.env.VERCEL_ENV || 'desconhecido',
    regiao: process.env.VERCEL_REGION || 'desconhecida',
  });
};
