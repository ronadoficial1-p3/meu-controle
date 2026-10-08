import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({base:'/meu-controle/',plugins:[react(),VitePWA({registerType:'autoUpdate',manifest:{name:'Meu Controle Financeiro',short_name:'Meu Controle',description:'Controle financeiro pessoal',theme_color:'#111827',background_color:'#111827',display:'standalone',start_url:'/meu-controle/',scope:'/meu-controle/',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]}})]});
