# Agente Mares do Sul Pousada

Protótipo de assistente virtual para a Pousada Marés do Sul (Garopaba, SC),
feito para o projeto Guia Garopaba.

## Estrutura

- `index.html` — a interface de chat que o visitante vê
- `api/chat.js` — função serverless que guarda a chave da API em segredo
  (variável de ambiente `ANTHROPIC_API_KEY`) e conversa com o modelo

## Como subir no GitHub

1. Crie uma conta em **github.com**, se ainda não tiver.
2. Clique em **New repository** (botão verde), dê um nome (ex:
   `agente-mares-do-sul`), deixe como **Private** se quiser manter fechado, e
   clique em **Create repository**.
3. Na tela seguinte, escolha a opção **"uploading an existing file"** (ou
   "upload files") e arraste os arquivos desta pasta (`index.html`, a pasta
   `api`, o `.gitignore` e este `README.md`).
4. Clique em **Commit changes** para salvar.

## Como publicar na Vercel a partir do GitHub

1. Acesse **vercel.com** e entre com sua conta do GitHub.
2. Clique em **Add New > Project**.
3. Escolha o repositório que você acabou de criar (`agente-mares-do-sul`) e
   clique em **Import**.
4. Antes de clicar em Deploy, abra **Environment Variables** e adicione:
   - Nome: `ANTHROPIC_API_KEY`
   - Valor: sua chave gerada em console.anthropic.com (menu "API Keys")
5. Clique em **Deploy**.
6. Em alguns segundos você recebe um link público, tipo
   `agente-mares-do-sul.vercel.app` — pronto para testar e compartilhar, sem
   exigir login de quem acessa.

Qualquer alteração futura no `index.html` ou no `api/chat.js`: basta subir o
arquivo atualizado no GitHub (mesmo processo do passo 3) que a Vercel publica
a nova versão automaticamente.
