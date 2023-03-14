<template>
  <i @click="Aram()" class="nes-icon coin is-large"></i>
</template>

<script setup>
import {Howl} from 'howler';

const sound = new Howl({
  src: [require('@/assets/audio/coin05.mp3')],
});

const Aram = () =>
{
  sound.play();
}
</script>

