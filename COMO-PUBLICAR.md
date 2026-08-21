# Como publicar o agente da Mares do Sul (grátis, fora do Claude)

Você tem 2 arquivos prontos nesta pasta:
- `index.html` — o chat que o visitante vê
- `api/chat.js` — a função que guarda a chave em segredo e fala com o Claude

## Passo a passo (Vercel — grátis)

1. Crie uma conta em **vercel.com** (pode entrar com GitHub, Google ou e-mail).
2. Crie uma conta em **console.anthropic.com** (se ainda não tiver) e gere uma
   chave de API em "API Keys". Guarde essa chave, você vai precisar dela no
   passo 4. Atenção: usar a API tem custo por conversa (bem baixo, poucos
   centavos por 100 mensagens), diferente do ChatGPT Plus que é uma
   mensalidade fixa.
3. Instale a ferramenta de linha de comando da Vercel (peça ajuda a alguém
   com conhecimento técnico se não tiver familiaridade com terminal), ou
   simplesmente arraste esta pasta inteira para o site vercel.com na tela de
   "novo projeto" (Vercel detecta a pasta `api/` automaticamente).
4. Depois que o projeto for criado, vá em **Settings > Environment Variables**
   e adicione:
   - Nome: `ANTHROPIC_API_KEY`
   - Valor: a chave que você gerou no passo 2
5. Clique em "Deploy" (ou re-implante depois de adicionar a variável).
6. A Vercel vai te dar um link (algo como `mares-do-sul.vercel.app`) — esse já
   é o link público, funcionando, sem exigir login de quem acessa.

## Próximo passo depois disso

Quando quiser um domínio "de verdade" (tipo `agente.maresdosulpousada.com.br`),
a Vercel permite conectar um domínio próprio nas configurações do projeto.
