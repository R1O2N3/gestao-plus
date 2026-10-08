# Implantação gratuita — GESTÃO+

## Arquitetura do piloto
- Aplicação: Next.js na Netlify.
- Banco: PostgreSQL no Supabase.
- Código: repositório Git privado.
- HTTPS: fornecido pela hospedagem.

## Variáveis obrigatórias
Configure na hospedagem:
- `DATABASE_URL`: conexão pooler do Supabase.
- `DIRECT_URL`: conexão direta do Supabase.
- `GESTAO_ADMIN_EMAIL`: e-mail do primeiro administrador.
- `GESTAO_ADMIN_PASSWORD`: senha forte do primeiro administrador.

Nunca envie `.env` ao repositório.

## Primeiro deploy
1. Criar projeto PostgreSQL no Supabase.
2. Copiar as duas strings de conexão.
3. Subir este diretório em um repositório Git privado.
4. Importar o repositório na Netlify.
5. Cadastrar as quatro variáveis de ambiente.
6. Usar o comando de build definido em `netlify.toml`.
7. Publicar.
8. Entrar com as credenciais administrativas configuradas.

## Observação sobre o seed
O seed é idempotente: cria a estrutura inicial e não recria registros existentes. A senha do administrador é aplicada na criação inicial; deployments posteriores não sobrescrevem automaticamente sua senha.

## Depois da aprovação do piloto
Planejar domínio próprio, política de backup, monitoramento, storage de anexos, e-mail transacional e ambiente de produção dedicado conforme o volume de uso.
