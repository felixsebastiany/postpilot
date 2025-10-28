# Variáveis de URL Dinâmicas para Templates de Email do Magento

## URLs Base Disponíveis

### 1. URL Base Segura (HTTPS)
```html
{{config path="web/secure/base_url"}}
```
- **Uso**: Para URLs que precisam ser HTTPS
- **Exemplo**: `{{config path="web/secure/base_url"}}login`

### 2. URL Base Não Segura (HTTP)
```html
{{config path="web/unsecure/base_url"}}
```
- **Uso**: Para URLs que podem ser HTTP
- **Exemplo**: `{{config path="web/unsecure/base_url"}}login`

### 3. URL da Loja (Store URL)
```html
{{store url="caminho"}}
```
- **Uso**: Para URLs internas do Magento
- **Exemplo**: `{{store url="customer/account/login"}}`

## Exemplos Práticos nos Templates

### Template de Reset de Senha
```html
<a href="{{config path="web/secure/base_url"}}reset-password/{{var customer.rp_token}}?email={{var customer.email}}">
    Redefinir senha
</a>
```

### Template de Boas-vindas
```html
<a href="{{config path="web/secure/base_url"}}login">
    Começar Agora
</a>
```

### Template de Confirmação de Alteração de Senha
```html
<a href="{{store url="customer/account/login"}}">
    Fazer Login
</a>
```

## Outras Variáveis Úteis

### Informações da Loja
```html
{{var store.getFrontendName()}}          <!-- Nome da loja -->
{{var store.getStoreName()}}            <!-- Nome da store -->
{{var store_email}}                     <!-- Email da loja -->
```

### Informações do Cliente
```html
{{var customer.firstname}}              <!-- Primeiro nome -->
{{var customer.lastname}}               <!-- Último nome -->
{{var customer.email}}                  <!-- Email -->
{{var customer.name}}                   <!-- Nome completo -->
```

### Data e Hora
```html
{{var "now"|date_format:"%d/%m/%Y"}}    <!-- Data atual -->
{{var "now"|date_format:"%H:%M"}}       <!-- Hora atual -->
```

## Vantagens das URLs Dinâmicas

1. **Flexibilidade**: Funciona em qualquer ambiente (dev, staging, produção)
2. **Manutenibilidade**: Não precisa alterar URLs hardcoded
3. **Segurança**: Usa HTTPS quando configurado
4. **Consistência**: Mantém a mesma base URL em todos os emails
