<script lang="ts" setup>
import {useI18n} from 'vue-i18n';
import {useLocale} from 'vuetify'

const i18n = useI18n();
const {current} = useLocale();

function changeLanguage() {
  if (i18n.locale.value === 'en') {
    i18n.locale.value = 'zh';
    current.value = 'zh-Hans';
  } else {
    i18n.locale.value = 'en';
    current.value = 'en';
  }
}
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>Title</v-card-title>
      <v-icon color="green-darken-2" icon="mdi-check"/>
      <v-icon
          color="green-darken-2"
          size="large"
      >
        mdi-domain
      </v-icon>
      <v-card-text>{{ $t("helloWorld") }}</v-card-text>
      <v-btn
          color="primary"
          icon="mdi-star"
          @click="changeLanguage"
      />
    </v-card>
  </v-container>
</template>