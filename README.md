# GESTÃO+

Sistema web multiempresa para gestão de reuniões, indicadores, decisões e planos de ação.

## Ciclo de gestão

**Resultado → Reunião → Análise → Decisão → Plano de Ação → Execução → Novo Resultado**

## Módulos

- Dashboard executivo com dados do PostgreSQL
- Login e sessão com cookie HTTP-only
- Multiempresa e isolamento por `empresaId`
- Usuários, perfis e permissões
- Áreas
- Reuniões e detalhe da reunião
- Ata, participantes, indicadores, decisões e planos de ação relacionados
- Planos de ação com responsável, prazo, execução e histórico
- Indicadores configuráveis
- Central de pendências
- Notificações
- Configurações
- Auditoria/histórico

## Stack

- Next.js + React + TypeScript
- PostgreSQL 16
- Prisma ORM
- Docker Compose

## Colocar em uso com Docker

Pré-requisito: Docker Desktop ou Docker Engine com Compose.

Na pasta do projeto:

```bash
docker compose up -d --build
```

Depois abra:

```text
http://localhost:3000
```

O container web cria/atualiza as tabelas e executa o seed automaticamente na inicialização.

## Primeiro acesso

```text
E-mail: admin@gestao.local
Senha:  Admin@123
```

**Troque a senha antes de disponibilizar o sistema na internet.**

## Desenvolvimento sem Docker para o PostgreSQL

1. Copie `.env.example` para `.env`.
2. Suba somente o banco: `docker compose up -d postgres`.
3. `npm install`
4. `npm run db:generate`
5. `npm run db:push`
6. `npm run db:seed`
7. `npm run dev`

## Publicação online

Para uso externo, publique o serviço web em um servidor/VPS ou plataforma de containers e use PostgreSQL gerenciado. Configure domínio + HTTPS, backup automático, armazenamento externo para anexos, SMTP para notificações, monitoramento e segredos fora do código.

A aplicação já aplica `empresaId` no backend e usa sessão persistida no PostgreSQL. A proteção de tenant não deve ser removida mesmo que a interface esconda menus.

## Observação de validação

O ambiente desta conversa não possui Docker e interrompeu a instalação do npm por timeout. Portanto, o pacote foi preparado para execução, mas o `docker compose up --build` deve ser executado no computador/servidor de destino para confirmar a compilação final e iniciar o banco.
