# Como Publicar no GitHub Pages (Gratuito)

## Passo a Passo

### 1. Criar conta no GitHub (se ainda nao tem)
- Acesse https://github.com
- Clique em "Sign up" e crie uma conta gratuita

### 2. Criar um novo repositorio
- Clique no botao "+" no canto superior direito > "New repository"
- Nome do repositorio: `tfconsultoria` (ou outro nome que preferir)
- Deixe como "Public"
- Clique em "Create repository"

### 3. Fazer upload dos arquivos
- Na pagina do repositorio, clique em "uploading an existing file"
- Arraste TODOS os arquivos desta pasta:
  - `index.html`
  - A pasta `cases/` com todos os SVGs
- Escreva uma mensagem como "Site inicial"
- Clique em "Commit changes"

### 4. Ativar GitHub Pages
- Va em "Settings" (engrenagem) do repositorio
- No menu lateral, clique em "Pages"
- Em "Source", selecione "Deploy from a branch"
- Em "Branch", selecione "main" e pasta "/ (root)"
- Clique em "Save"

### 5. Acessar o site
- Em poucos minutos, seu site estara disponivel em:
  `https://SEU-USUARIO.github.io/tfconsultoria/`

### 6. Configurar dominio proprio (opcional mas recomendado)
- Registre o dominio `tfconsultoria.com.br` (custa ~R$40/ano no Registro.br)
- No GitHub Pages (Settings > Pages), insira o dominio em "Custom domain"
- No Registro.br, configure o DNS:
  - Tipo: CNAME
  - Nome: www
  - Valor: SEU-USUARIO.github.io
  - Tipo: A
  - Valor: 185.199.108.153 (e os outros 3 IPs do GitHub Pages)
- Marque "Enforce HTTPS" no GitHub Pages

## Estrutura de arquivos

```
tfconsultoria/
  index.html          <- Pagina principal
  cases/
    fluxo-producao-industrial.svg
    fluxo-manutencao-industrial.svg
    fluxo-atendimento-hospitalar.svg
    fluxo-logistica-distribuicao.svg
    fluxo-onboarding-rh.svg
```

## Para atualizar o site
- Basta editar o `index.html` no GitHub (clique no arquivo > icone de lapis)
- Ou faça upload de uma nova versao
- As mudancas aparecem em 1-2 minutos
