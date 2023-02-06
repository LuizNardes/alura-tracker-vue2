<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <DisplayCronometro :tempoEmSegundos="tempoEmSegundos" />
        <button class="button" @click="iniciar" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronometroRodando">
            <span class="icon">
                <div class="fas fa-stop">
                </div>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DisplayCronometro from '@/components/Cronometro.vue';

export default defineComponent({
    name: 'ControlesDisplay',
    emits: ['aoTemporizadorFinalizado'],
    components: {
        DisplayCronometro
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },

    methods: {
        iniciar() {
            //comerçar a contagem
            this.cronometroRodando = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000)
        },
        finalizar() {
            this.cronometroRodando = false;
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    }
})
</script>