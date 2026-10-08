# GESTÃO+ — versão Web gratuita

## Arquitetura recomendada para o piloto

- **Frontend/backend:** Next.js
- **Hospedagem:** Netlify Free
- **Banco:** Supabase Free (PostgreSQL)
- **Arquivos:** Supabase Storage (quando habilitados)
- **Docker:** não é necessário para uso online

A Netlify informa que o plano Free pode ser usado em projetos comerciais; ele tem limite mensal de créditos e pode pausar projetos quando o limite é atingido. O Supabase Free oferece 2 projetos ativos, PostgreSQL com 500 MB por projeto, 1 GB de Storage e 50.000 MAU.

## 1. Criar o banco no Supabase

1. Crie um projeto gratuito em Supabase.
2. Abra **Project Settings → Database**.
3. Copie uma URL do **pooler** para `DATABASE_URL`.
4. Copie a URL direta para `DIRECT_URL`.
5. No projeto, abra **Connect** e confirme os parâmetros.

## 2. Publicar na Netlify

1. Coloque este projeto em um repositório GitHub privado.
2. No Netlify, escolha **Add new project → Import from Git**.
3. Selecione o repositório.
4. Build command: `npm run build`.
5. Adicione as variáveis de ambiente:
   - `DATABASE_URL`
   - `DIRECT_URL`
   - `GESTAO_ADMIN_EMAIL`
   - `GESTAO_ADMIN_PASSWORD`
6. Publique.

O build executa `prisma generate`, `prisma db push`, o seed inicial e depois o `next build`.

## Primeiro acesso

Use o e-mail e a senha definidos em `GESTAO_ADMIN_EMAIL` e `GESTAO_ADMIN_PASSWORD`.

**Troque a senha inicial antes de compartilhar o endereço com outras pessoas.**

## Importante

O plano gratuito é adequado para colocar o GESTÃO+ em uso piloto. Para uma operação crítica, devemos depois migrar para plano pago/infraestrutura própria com backups, monitoramento, domínio próprio, política de retenção e recuperação de desastre.
