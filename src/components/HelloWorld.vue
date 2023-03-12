<template>
  <v-app-bar
    :elevation="2"
    color="teal-darken-4"
    dark>
    <v-btn variant="text" icon="mdi-menu"></v-btn>
    <v-app-bar-title>Title</v-app-bar-title>
  </v-app-bar>
  <section class="nes-container">
    <section class="message-list">
      <section class="message -left">
        <i class="nes-mario"></i>
        <!-- Balloon -->
        <div class="nes-balloon from-left">
          <p>Hello NES.css</p>
        </div>
      </section>

      <section class="message -right">
        <!-- Balloon -->
        <div class="nes-balloon from-right">
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
        <i class="nes-kirby"></i>
      </section>
    </section>
  </section>

</template>


