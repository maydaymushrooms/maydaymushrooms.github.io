// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://maydaymushroom.coop/',
    fonts: [{
        provider: fontProviders.local(),
        name: "Pincoya Black",
        cssVariable: "--font-pincoya-black",
        options: {
        variants: [{
            src: ['./src/assets/fonts/PincoyaBlack.otf'],
            weight: 'normal',
            style: 'normal'
        }]
        }
    }]
});
