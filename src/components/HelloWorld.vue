<template>
  <v-app-bar
    :elevation="2"
    color="teal-darken-4"
    dark>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn variant="text" v-bind="props" icon="mdi-menu"></v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(list, index) in menuList"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ list.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-app-bar-title>HatoChan!</v-app-bar-title>
    <template v-slot:append>
      <v-switch
        v-model="darkTheme"
        @update:model-value="changeTheme"
        :prepend-icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'"
        hide-details
        inset
        class="mr-auto"
      />
    </template>
  </v-app-bar>
  <v-row>
    <v-col>
      <section class="nes-container">
        <section class="message-list">
          <section class="message -left">
            <i class="nes-mario"></i>
            <!-- Balloon -->
            <div class="nes-balloon from-left" style="background-color: transparent;">
              <p>Hello NES.css</p>
            </div>
          </section>

          <section class="message -right">
            <!-- Balloon -->
            <div class="nes-balloon from-right" style="background-color: transparent;">
              <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            </div>
            <i class="nes-kirby"></i>
          </section>
        </section>
      </section>
    </v-col>
    <v-col cols="3">
      <img src="" alt="犬の画像">
      <ArticleList />
    </v-col>
  </v-row>
  <v-btn @click="test">ぼたん</v-btn>
  <SoundPlayer number=1></SoundPlayer>
  <ApiTest></ApiTest>
  <PropsTest title="こんにちは" description="Propsてすとだよ。"></PropsTest>
</template>


<script setup>
import ArticleList from './component/ArticleList.vue'

import { ref } from 'vue'
import { useTheme } from 'vuetify'

const darkTheme = ref(false)
const theme = useTheme()
const menuList = ref([
  { title: 'niwatori' },
  { title: 'hiyoko' },
  { title: 'hato' },
  { title: 'uguisu' },
])

const changeTheme = () => {
  theme.global.name.value = darkTheme.value ? 'dark' : 'light'
}

const test = () => {
  console.log("押した")
}

import PropsTest from "@/components/PropsTest.vue";
import ApiTest from "@/components/ApiTest.vue";
import SoundPlayer from "@/components/SoundPlayer.vue";
</script>


