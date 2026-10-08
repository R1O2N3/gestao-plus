# GESTÃO+ CLOUD — implantação experimental

## Estado
Pacote inicial preparado para Next.js + Supabase + Netlify. A interface já possui Dashboard, Reuniões, Indicadores e Planos de Ação. O SQL cria a base principal do banco.

## Próximo passo
1. Criar repositório privado `gestao-plus` no GitHub.
2. Enviar todo o conteúdo desta pasta para o repositório.
3. No Supabase, abrir SQL Editor e executar `supabase/schema.sql`.
4. No Netlify, importar o repositório do GitHub.
5. Configurar `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` nas variáveis de ambiente.
6. Fazer o primeiro deploy.

## Segurança
Nunca publicar `.env`, senhas do banco, service role key ou tokens. O arquivo `.env.example` é apenas modelo.

## Observação
Esta é a base de implantação. Antes de usar com dados empresariais reais, devem ser concluídas autenticação de produção, RLS por empresa, Storage de anexos, notificações e testes de segurança.
