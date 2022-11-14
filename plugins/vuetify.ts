import {createVuetify} from 'vuetify'
import {en, zhHans} from 'vuetify/locale'
import '@mdi/font/css/materialdesignicons.css'
import {aliases, mdi} from 'vuetify/lib/iconsets/mdi'

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        ssr: process.server,
        locale: {
            locale: 'en',
            fallback: 'en',
            messages: {en, zhHans}
        },
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: '#434c73',
                        secondary: '#3f51b5',
                        accent: '#03a9f4',
                        error: '#f44336',
                        warning: '#ffc107',
                        info: '#607d8b',
                        success: '#8bc34a'
                    }
                }
            }
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi
            }
        }
    })
    nuxtApp.vueApp.use(vuetify)
})