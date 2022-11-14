import {createI18n} from 'vue-i18n'
import en from '@/i18n/en-US'
import zh from '@/i18n/zh-CN'

export default defineNuxtPlugin(({vueApp}) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en',
        messages: {
            en: en,
            zh: zh
        }
    })
    vueApp.use(i18n)
})