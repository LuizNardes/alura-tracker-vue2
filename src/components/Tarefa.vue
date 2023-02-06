<template>
    <BoxTarefa>
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao  || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <DisplayCronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </BoxTarefa>
</template>

<script lang="ts">
import iTarefa from "@/interfaces/iTarefa";
import { defineComponent, PropType } from "vue";
import DisplayCronometro from "./Cronometro.vue";
import BoxTarefa from "./BoxTarefa.vue";

export default defineComponent({
    name: 'HistoricoTarefa',
    components: {
        DisplayCronometro,
        BoxTarefa
    },
    props: {
        tarefa: {
            type: Object as PropType<iTarefa>,
            required: true
        }
    }
})

</script>

