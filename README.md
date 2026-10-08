# Meu Controle Financeiro
PWA de finanças pessoais, sem backend e sem custo de hospedagem.

## Executar
1. Instale Node.js LTS.
2. Nesta pasta execute `npm install` e `npm run dev`.
3. Abra o endereço mostrado pelo terminal.

## Publicar no GitHub Pages
1. Crie repositório público `meu-controle` e envie os arquivos (não envie `node_modules` ou `dist`).
2. Execute `npm run build`.
3. Publique o conteúdo da pasta `dist` pelo GitHub Actions ou pelo branch `gh-pages`.
4. Em Settings > Pages configure a fonte da publicação.
5. Endereço esperado: https://SEU-USUARIO.github.io/meu-controle/

**Atenção:** `vite.config.js` usa o caminho `/meu-controle/`. Se o nome do repositório for diferente, atualize `base`, `start_url` e `scope`.

## Segurança e limites
Os dados são armazenados em localStorage (não IndexedDB) somente neste navegador. Faça backup em Ajustes com frequência. Não existe login nem sincronização. Para controle financeiro pessoal, mantenha seu dispositivo protegido. Contas fixas são estimativas e são lançadas apenas quando marcadas como pagas. O aplicativo não oferece aconselhamento financeiro profissional.
