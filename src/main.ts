
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../index.css'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';


import App from './App.vue'
import router from './router'
import { definePreset } from '@primeuix/themes';

const app = createApp(App)

const finPreset = definePreset(Aura, {
    components: {
        button: {
            colorScheme: {
                light: {
                    root: {
                        primary: {
                            background: 'var(--color-figma-grey-900)',
                            borderColor: 'var(--color-figma-grey-900)',
                            hoverBackground: 'var(--color-figma-grey-500)',
                            hoverBorderColor: 'var(--color-figma-grey-500)',
                            activeBackground: 'var(--color-figma-grey-300)',
                            activeBorderColor: 'var(--color-figma-grey-300)',
                        },
                        secondary: {
                            background: 'var(--color-figma-beige-100)',
                            borderColor: 'var(--color-figma-beige-100)',
                            hoverBackground: 'var(--color-figma-beige-200)',
                            hoverBorderColor: 'var(--color-figma-beige-200)',
                            activeBackground: 'var(--color-figma-beige-300)',                            activeBorderColor: 'var(--color-figma-beige-300)',
                        }
                    }
                }
            }
        }
    }
})

app.use(PrimeVue, {
    theme: {
        preset: finPreset
    }
});

app.use(createPinia())
app.use(router)

app.mount('#app')
