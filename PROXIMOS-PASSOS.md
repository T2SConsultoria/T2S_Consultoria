# Próximos passos — unificação dos branches e publicação

## TL;DR (5 minutos no GitHub Desktop)

1. Feche o GitHub Desktop e o VS Code (se estiverem abertos no repo).
2. Apague o arquivo travado: `C:\Users\stfer\Documents\GitHub\T2S_Consultoria\.git\index.lock` (clique direito → excluir no Explorer).
3. Abra o GitHub Desktop → repositório `T2S_Consultoria`.
4. Troque para o branch `main` (Current Branch → main).
5. **Pull** (Ctrl+Shift+P) — vai trazer o último estado do servidor.
6. Você verá os 12 arquivos abaixo prontos para commit.
7. Commit message sugerida (copie/cole):

   ```
   feat: SEO/OG, Formspree, favicon, brand consistency e infra

   - index.html: meta tags OG/Twitter, JSON-LD ProfessionalService, canonical, theme-color, favicon
   - diagnostico-gratuito.html: integração Formspree com fallback WhatsApp (era console.log → leads perdidos)
   - servico-*.html: TF Consultoria → T2S Consultoria nos títulos
   - artigo-*.html: limpeza de whitespace
   - novos: favicon-new.svg, robots.txt, sitemap.xml, .gitattributes (LF)
   ```

8. Clique **Commit to main**.
9. Clique **Push origin**.
10. Delete o branch antigo: aba "Branches" → `feedbackclienteexigente-7253a` → Delete (marque "também no servidor").

Pronto. ✅

---

## O que foi feito nesta sessão

### 🔥 Fix crítico — você estava perdendo leads

`diagnostico-gratuito.html` tinha esta lógica:

```js
console.log('Form submitted:', data);
// TODO: Integrate with your backend or email service
document.getElementById('successMessage').style.display = 'block';
```

Tradução: o form mostrava "Sucesso!" mas **não enviava nada para lugar nenhum**. Cada lead que preenchia ia para o void.

Agora tem:
- POST para Formspree (`https://formspree.io/f/SEU_FORM_ID_AQUI`)
- Validação de e-mail
- Loading state no botão
- Fallback para WhatsApp se a chamada falhar OU se o endpoint não estiver configurado
- Metadados (`_subject`, `origem`, `timestamp`) para você identificar o lead na inbox

**⚠️ AÇÃO TUA:** crie conta gratuita em https://formspree.io, crie um form, copie o endpoint e substitua `SEU_FORM_ID_AQUI` na linha:

```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/SEU_FORM_ID_AQUI';
```

Enquanto não fizer isso, o form cai no fallback WhatsApp (o que já é melhor que perder o lead).

### 🎯 SEO/Open Graph no index.html

Adicionado no `<head>`:
- `og:url`, `og:site_name`, `og:image` (1200×630) com width/height/alt
- `twitter:card` summary_large_image + image
- `theme-color` #0B1929 (cor da barra do mobile)
- `<link rel="canonical">` (evita duplicate content)
- `favicon` em SVG (escala perfeita em qualquer tamanho)
- JSON-LD `ProfessionalService` com nome, telefone, endereço, founder, serviceType, areaServed

Impacto prático:
- WhatsApp/LinkedIn vão mostrar preview com card grande e imagem
- Google entende melhor que é uma consultoria em Ribeirão Preto
- Aba do navegador mostra logo T2S em vez de ícone branco

**⚠️ AÇÃO TUA:** quando comprar/configurar o domínio real (`t2sconsultoria.com.br`), substitua nas refs (3 ocorrências em index.html). Se for outro domínio, faça find/replace.

### 🖼️ Favicon

Criado `favicon-new.svg` — monograma "T2S" em dourado sobre navy gradient, em SVG (vetor, escala em qualquer DPR).

Não consegui salvar como `favicon.svg` por causa de um cache travado no meu sandbox. Quando rodares no teu computador, recomendo renomear:

```
GitHub Desktop ou Explorer:
favicon-new.svg → favicon.svg
```

E daí trocar em index.html: `favicon-new.svg` → `favicon.svg` (3 ocorrências). Não é obrigatório agora — funciona como está.

### 🏷️ Brand consistency

`servico-mapeamento-processos.html`, `servico-diagnostico-gratuito.html` e `servico-consultoria-completa.html` tinham **"TF Consultoria"** no `<title>`. Corrigido para **"T2S Consultoria"** nos três.

### 🧹 Infra

- **`.gitattributes`** — força LF em todos os textos. Para de gerar diffs falsos quando o GitHub Desktop converte CRLF↔LF (esse era o motivo dos 100+ "modified" fantasmas).
- **`robots.txt`** — autoriza crawlers, bloqueia `/client/`, `/server/`, `/novo site/`, `/_og_template.html`. Aponta para o sitemap.
- **`sitemap.xml`** — 8 URLs (homepage prioridade 1.0, diagnóstico 0.9, serviços 0.8, artigos 0.6).
- **Limpeza** — removido lixo de NULL bytes/whitespace no final de `diagnostico-gratuito.html` e nos 3 `servico-*.html`.

---

## Sobre os dois branches

Ambos `main` e `feedbackclienteexigente-7253a` no GitHub apontam para o **mesmo commit** (`23ad5f7`). São idênticos. O segundo branch foi criado por um workflow automatizado e ficou com nome confuso. Não tem informação a perder ao deletá-lo.

Após o push acima, delete pela interface web também:
1. https://github.com/T2SConsultoria/T2S_Consultoria/branches
2. Encontre `feedbackclienteexigente-7253a`
3. Clique no ícone de lixeira

Ou pelo GitHub Desktop: aba Branches → clique direito no branch → Delete → marque "Also delete on remote".

---

## O que NÃO foi feito (e por quê)

### `og-image.png` (1200×630)
Precisa de Playwright para renderizar via headless Chromium. Tentei na sessão anterior mas o arquivo não persistiu pelo FUSE mount. Recomendo gerar uma vez via Canva/Figma:
- Tamanho: 1200×630 px
- Conteúdo sugerido: logo T2S + headline "Excelência Operacional que devolve dinheiro ao seu caixa" + 3 stats (R$3,2 Mi · 8 anos · 100% gratuito)
- Salvar como `og-image.png` na raiz

Enquanto não tiver, o WhatsApp/LinkedIn vão mostrar preview sem imagem grande, mas a meta tag já está apontando para o caminho correto — assim que subir o PNG, funciona.

### `.gitignore`
Está com conteúdo bizarro (texto de IA acidentalmente commitado). Não toquei para não causar surpresas. Vale uma limpeza posterior — substituir por algo padrão para projeto Node + estático:

```
node_modules/
.DS_Store
.vscode/
*.log
dist/
.env
_og_template.html
```

### Push direto
Não tenho credenciais do GitHub no sandbox, então não consegui pushar. Por isso o roteiro acima.

---

## Validação rápida no navegador (após o push)

1. Abre `index.html` localmente (duplo clique).
2. View source (Ctrl+U) → procura `og:image` → confirma que tem 1200×630.
3. Abre `diagnostico-gratuito.html` → preenche o form → submit.
   - Sem Formspree configurado: deve abrir WhatsApp Web com a mensagem pré-preenchida.
   - Com Formspree configurado: deve mostrar tela de sucesso e o lead chega no e-mail vinculado.
4. Aba do navegador deve mostrar "T2S" dourado em vez de ícone branco.

---

## Resumo dos arquivos modificados/criados

| Arquivo | Tipo | O que mudou |
|---|---|---|
| `index.html` | modified | +47 linhas SEO/OG/JSON-LD/favicon |
| `diagnostico-gratuito.html` | modified | Formspree + WhatsApp fallback (fix lead loss) |
| `servico-mapeamento-processos.html` | modified | TF→T2S no título |
| `servico-diagnostico-gratuito.html` | modified | TF→T2S no título |
| `servico-consultoria-completa.html` | modified | TF→T2S no título |
| `artigo-arte-despadronizacao.html` | modified | limpeza whitespace |
| `artigo-custo-nao-qualidade.html` | modified | limpeza whitespace |
| `artigo-desmistificando-qualidade.html` | modified | limpeza whitespace |
| `.gitattributes` | new | força LF (fim do ruído CRLF) |
| `favicon-new.svg` | new | monograma T2S em SVG |
| `robots.txt` | new | crawlers + sitemap |
| `sitemap.xml` | new | 8 URLs com prioridades |
