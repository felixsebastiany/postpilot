# Configuração de Webhooks para Ambiente Local



## ngrok 

Se preferir usar ngrok (especialmente se seu Magento está em um domínio local como `postpilot.local`):

1. **Instalar ngrok:**
   - Baixe de: https://ngrok.com/download
   - Ou via package manager:
     ```bash
     # macOS
     brew install ngrok/ngrok/ngrok
     
     # Linux (Ubuntu/Debian)
     sudo snap install ngrok
     ```

2. **Autenticar no ngrok (primeira vez):**
   ```bash
   ngrok config add-authtoken SEU_TOKEN_AQUI
   ```
   - Obtenha o token em: https://dashboard.ngrok.com/get-started/your-authtoken

3. **Iniciar túnel apontando para seu domínio local:**
   
   Como seu Magento está em `postpilot.local`, você precisa usar o ngrok com o host header:
   
   ngrok http https://postpilot.local --host-header="postpilot.local"
   
   **Exemplo de saída do ngrok:**
   ```
   Forwarding    https://9b1266a7039c.ngrok-free.app -> http://postpilot.local:80
   ```
   
   **Importante:** Copie a URL HTTPS que aparece (ex: `https://9b1266a7039c.ngrok-free.app`)

4. **Copiar a URL do ngrok:**
   - O ngrok vai mostrar algo como: `https://9b1266a7039c.ngrok-free.app`
   - **Importante:** Use sempre a URL HTTPS (não HTTP)
   - Copie essa URL completa para usar no próximo passo

5. **Configurar webhook no Stripe Dashboard:**
   - Acesse: https://dashboard.stripe.com/test/webhooks (modo teste) ou https://dashboard.stripe.com/webhooks (modo produção)
   - Clique em "Add endpoint" ou "Add endpoint"
   - URL: `https://a954bee2c5db.ngrok-free.app/stripe/webhooks`
   - Selecione os eventos que deseja escutar:
     - `checkout.session.completed` ✅ **Importante para criar orders**
     - `invoice.paid`
     - `invoice.payment_succeeded`
     - `customer.subscription.created`
     - `customer.subscription.updated`
   - Clique em "Add endpoint"
