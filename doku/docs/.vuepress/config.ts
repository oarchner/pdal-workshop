import { defaultTheme, defineUserConfig, SidebarConfig } from 'vuepress';
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  lang: 'de-DE',
  title: 'PDAL Workshop',
  description: 'Point Cloud Verarbeitung und Analyse mit PDAL',
  plugins: [copyCodePlugin(), mdEnhancePlugin({
    mermaid: true, container: true, tabs: true, sub: true, sup: true,
  })], 
  theme: defaultTheme({
    contributors:false,
    sidebar: [
      '/intro/',
      '/overview/',
      '/practice/',
      '/example/'
    ],
    logo: '/bubbles.png',
  }),
  base: '/pdal-workshop/',
  dest: '../docs/'

});