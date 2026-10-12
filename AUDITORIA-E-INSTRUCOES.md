# GESTÃO+ CLOUD — auditoria e correções

## Alterações aplicadas
- Versões de Next.js, React, TypeScript, tipos e Supabase fixadas no package.json (sem `latest`).
- `tsconfig.json` preservado (JSON válido, sem `baseUrl` depreciado).
- Excluída a pasta `login/` da raiz: a rota correta é `app/login/page.tsx`.
- Removida a declaração manual do plugin Next.js no `netlify.toml`, deixando a integração nativa do Netlify identificar Next.js.
- Cliente Supabase inicializado apenas quando necessário, evitando falha de build se variáveis ainda não estiverem configuradas.
- Mensagem específica na tela de login caso faltem variáveis de ambiente.

## Verificações feitas
- Inspeção de todos os arquivos de código e configuração do ZIP original.
- Validação sintática dos arquivos JSON.
- Verificação estática dos imports locais e rotas.
- **Build real não executado:** o ambiente de auditoria não consegue acessar o registro npm para instalar as dependências. Não é correto afirmar que o deploy foi validado.

## Publicação
1. Faça backup do repositório atual.
2. Substitua os arquivos do repositório pelo conteúdo desta pasta (não enviar o ZIP como um único arquivo ao repositório).
3. Configure no Netlify, em variáveis de ambiente: `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` com os valores do seu projeto Supabase. Não use service_role.
4. Acione um novo deploy e verifique se o log informa `Published`.
5. Teste `/login` e `/painel` com um usuário válido.

## Escopo atual
O ZIP original inclui apenas página inicial, login e painel básico. Módulos completos de reuniões, atas, indicadores e tarefas **não estão implementados neste código**. Este pacote corrige a base de publicação, não representa o sistema empresarial completo.
