# GESTÃO+ — status da versão de avaliação

## Fluxo entregue
Resultado → Reunião → Ata → Indicador → Decisão → Plano de Ação → Execução → Novo Resultado.

## Interfaces
- Login.
- Dashboard executivo.
- Reuniões: cadastro, lista e workspace completo.
- Participantes e pauta.
- Ata.
- Indicadores por reunião.
- Decisões.
- Planos de ação e histórico de execução.
- Dashboard por áreas.
- Usuários, áreas e perfis.
- Indicadores mestre.
- Central de pendências.
- Configurações.

## Base técnica
- Next.js + TypeScript.
- Prisma ORM.
- PostgreSQL.
- Sessão persistida no banco com cookie HttpOnly.
- Senhas com scrypt e salt aleatório.
- Escopo de empresa no backend.
- Perfis e permissões iniciais.
- Auditoria de operações principais.
- Configuração de piloto para Netlify + Supabase.

## Perfis iniciais
Administrador, Diretoria, Gestor, Responsável e Participante.

## Pendências deliberadamente deixadas para pós-piloto
- Upload físico de anexos em Storage.
- E-mail transacional e recuperação de senha.
- SSO/2FA.
- Backups e monitoramento de produção.
- Regras avançadas de visibilidade por área/responsável em todas as consultas.
- Dashboards gráficos avançados e exportações.

Esses itens não impedem o teste do ciclo principal de gestão; devem entrar no plano de produção após a aprovação funcional.
