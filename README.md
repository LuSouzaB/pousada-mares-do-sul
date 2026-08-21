# Agente Marés do Sul Pousada

Protótipo de assistente virtual para a Pousada Marés do Sul (Garopaba, SC),
feito para o projeto Guia Garopaba.

## Estrutura do projeto

- `index.html` — a interface de chat que o visitante vê
- `api/chat.js` — função serverless que guarda a chave da API em segredo
  (variável de ambiente `ANTHROPIC_API_KEY`) e conversa com o modelo

## Passo 1 — Gerar a chave da API

1. Crie uma conta em **console.anthropic.com** (e-mail ou Google).
2. No menu lateral, clique em **API Keys** > **Create Key**. Dê um nome
   (ex: `mares-do-sul`) e copie o código gerado (começa com `sk-ant-`) —
   ele só aparece uma vez, guarde em um lugar seguro.
3. Vá em **Billing** e cadastre um cartão. O uso é cobrado por conversa,
   com valor bem baixo — dá para definir um limite mensal de gasto ali
   mesmo.

## Passo 2 — Subir os arquivos no GitHub

1. Crie uma conta em **github.com**, se ainda não tiver.
2. Clique em **New repository**, dê um nome (ex: `agente-mares-do-sul`),
   deixe como **Private** se quiser manter fechado, e clique em
   **Create repository**.
3. Escolha **"uploading an existing file"** e arraste os arquivos desta
   pasta (`index.html`, a pasta `api`, e o `.gitignore`).
4. Clique em **Commit changes**.

## Passo 3 — Publicar na Vercel

1. Acesse **vercel.com** e entre com sua conta do GitHub.
2. Clique em **Add New > Project**, escolha o repositório que você criou
   e clique em **Import**.
3. Antes de clicar em Deploy, abra **Environment Variables** e adicione:
   - Nome: `ANTHROPIC_API_KEY`
   - Valor: a chave gerada no Passo 1
4. Clique em **Deploy**.
5. Em alguns segundos você recebe um link público, tipo
   `agente-mares-do-sul.vercel.app` — pronto para testar e compartilhar,
   sem exigir login de quem acessa.

## Atualizando o site depois

Qualquer alteração futura no `index.html` ou no `api/chat.js`: suba o
arquivo atualizado no GitHub (mesmo processo do Passo 2) — a Vercel
publica a nova versão automaticamente. Se a chave da API já estava
configurada, não precisa mexer nela de novo.

## Resolvendo problemas

**"Erro ao conectar" ao testar o chat:**
1. Confira em **Settings > Environment Variables** na Vercel se a
   `ANTHROPIC_API_KEY` está lá, com o valor certo.
2. Se acabou de adicionar a chave, vá em **Deployments**, clique nos três
   pontinhos do deployment mais recente e escolha **Redeploy** — adicionar
   a chave depois do primeiro deploy não atualiza sozinho.
3. Se ainda der erro, veja **Deployments > (clique no deployment) >
   Functions/Logs** — lá aparece a mensagem de erro exata.
