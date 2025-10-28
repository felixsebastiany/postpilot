# PostPilot Frontend

## 🚀 Sobre o Projeto

PostPilot é uma aplicação SaaS para automatizar a criação e envio de posts nas redes sociais. Este frontend foi desenvolvido em React com TypeScript e oferece:

- **Landing Page moderna** com design responsivo
- **Sistema de autenticação** completo (login/registro)
- **Dashboard intuitivo** para gerenciamento de conta
- **Interface moderna** com Tailwind CSS e Framer Motion

## 🛠️ Tecnologias Utilizadas

- **React 18** com TypeScript
- **Apollo Client** para GraphQL
- **React Router** para navegação
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **React Hook Form** para formulários
- **React Hot Toast** para notificações
- **Heroicons** para ícones

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Magento 2** configurado e rodando
- **GraphQL habilitado** no Magento

## 🚀 Instalação e Execução

### 1. Navegue para o diretório do frontend

```bash
cd /home/felix.sebastiany/Documentos/mageos/src/frontend
```

### 2. Configure as variáveis de ambiente

```bash
# Copie o arquivo de exemplo
cp env.example .env

# Edite o arquivo .env e ajuste a URL do GraphQL do Magento
# REACT_APP_MAGENTO_GRAPHQL_URL=http://seu-magento.local/graphql
```

### 3. Instale as dependências

```bash
npm install
```

ou

```bash
yarn install
```

### 4. Execute o projeto em modo de desenvolvimento

```bash
npm start
```

ou

```bash
yarn start
```

O projeto será executado em `http://localhost:3000` e abrirá automaticamente no seu navegador.

## 🔧 Configuração do Magento

Para que o frontend funcione corretamente, certifique-se de que:

1. **GraphQL está habilitado** no Magento
2. **Customer GraphQL** está configurado
3. **CORS está configurado** para permitir requisições do frontend
4. **URL do GraphQL** está correta no arquivo `.env`

### Configuração CORS no Magento

Adicione no seu `nginx.conf` ou `.htaccess`:

```nginx
# Para desenvolvimento local
add_header 'Access-Control-Allow-Origin' 'http://localhost:3000' always;
add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE' always;
add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization' always;
add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range' always;
```

## 🎯 Funcionalidades Implementadas

### Landing Page
- ✅ Hero section com call-to-action
- ✅ Seção de features explicando como funciona
- ✅ Seção de preços com 3 planos
- ✅ Footer completo
- ✅ Design responsivo e moderno

### Autenticação
- ✅ Página de login com validação
- ✅ Página de registro com validação
- ✅ **Integração GraphQL com Magento**
- ✅ **Sistema de autenticação real**
- ✅ **Tokens JWT do Magento**
- ✅ Proteção de rotas
- ✅ Gerenciamento de estado com Context API

### Dashboard
- ✅ Interface de dashboard completa
- ✅ Sidebar com navegação
- ✅ Estatísticas em tempo real
- ✅ Lista de posts recentes
- ✅ Gerenciamento de perfis espelhados
- ✅ Design responsivo

## 🔐 Testando a Autenticação

Agora o sistema usa **autenticação real do Magento**:

1. **Crie uma conta** através da página de registro
2. **Use suas credenciais reais** para fazer login
3. **Os dados são salvos** no banco do Magento
4. **Tokens JWT** são gerenciados automaticamente

### Para Teste Rápido

Se você já tem uma conta no Magento, use suas credenciais reais para fazer login.

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ProtectedRoute.tsx     # Componente para proteger rotas
├── contexts/
│   └── AuthContext.tsx        # Contexto de autenticação com GraphQL
├── graphql/
│   ├── client.ts              # Configuração do Apollo Client
│   └── queries.ts             # Queries e Mutations GraphQL
├── hooks/
│   └── useGraphQL.ts          # Hooks personalizados para GraphQL
├── pages/
│   ├── LandingPage.tsx        # Página inicial
│   ├── Login.tsx              # Página de login
│   ├── Register.tsx           # Página de registro
│   └── Dashboard.tsx         # Dashboard principal
├── types/
│   └── graphql.ts             # Tipos TypeScript para GraphQL
├── App.tsx                    # Componente principal
├── index.tsx                  # Ponto de entrada
└── index.css                  # Estilos globais
```

## 🎨 Design System

O projeto utiliza um design system consistente com:

- **Cores primárias:** Azul (#3b82f6)
- **Cores secundárias:** Cinza (#64748b)
- **Tipografia:** Inter (Google Fonts)
- **Espaçamento:** Sistema baseado em múltiplos de 4
- **Componentes:** Reutilizáveis e modulares

## 🔧 Scripts Disponíveis

- `npm start` - Executa o projeto em modo de desenvolvimento
- `npm build` - Cria build de produção
- `npm test` - Executa os testes
- `npm eject` - Ejecta a configuração do Create React App

## 📱 Responsividade

O projeto foi desenvolvido com mobile-first approach e é totalmente responsivo:

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🚀 Próximos Passos

Para continuar o desenvolvimento, considere implementar:

1. **✅ Integração GraphQL com Magento** - CONCLUÍDO
2. **Integração com APIs reais** (Instagram, Facebook)
3. **Sistema de pagamento** (Stripe, PayPal)
4. **Analytics avançados** com gráficos
5. **Notificações em tempo real**
6. **Upload de imagens** e editor de posts
7. **Testes automatizados** (Jest, React Testing Library)
8. **Módulo PostPilot** para Magento (backend)

## 🐛 Solução de Problemas

### Erro de dependências
```bash
# Limpe o cache do npm
npm cache clean --force

# Delete node_modules e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Porta já em uso
```bash
# Execute em uma porta diferente
PORT=3001 npm start
```

### Erro de conexão GraphQL
```bash
# Verifique se o Magento está rodando
# Verifique a URL no arquivo .env
# Verifique se o GraphQL está habilitado no Magento
```

### Erro CORS
```bash
# Configure CORS no seu servidor web (nginx/apache)
# Ou use um proxy no package.json:
"proxy": "http://localhost"
```

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação do React ou abra uma issue no repositório.

---

**Desenvolvido com ❤️ para automatizar sua presença nas redes sociais**
