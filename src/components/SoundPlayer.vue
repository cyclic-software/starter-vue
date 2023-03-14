<template>
  <i @click="Aram(props.number)" class="nes-icon coin is-large"></i>
</template>

<script setup>
import {Howl} from 'howler';
import { defineProps } from 'vue';

const props = defineProps({
  number: Number,
});

const coinSound = new Howl({
  src: [require('@/assets/audio/coin05.mp3')],
});

const jumpSound = new Howl({
  src: [require('@/assets/audio/jump01.mp3')],
});

const powerUpSound = new Howl({
  src: [require('@/assets/audio/powerup01.mp3')],
});

const Aram = (i) =>
{
  if (i == 0)
  {
    coinSound.play();
  }
  if (i == 1)
  {
    jumpSound.play();
  }
  if (i == 2)
  {
    powerUpSound.play();
  }
}
</script>

