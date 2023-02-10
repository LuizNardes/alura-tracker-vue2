<template>
    <FormInput @aoSalvarTarefa="salvarTarefa" />
    <div class="listaTarefas">
        <HistoricoTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxTarefa v-if="listaEstaVazia">
            Você não está muito produtivo hoje. :(
        </BoxTarefa>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormInput from "@/components/Formulario.vue";
import HistoricoTarefa from "@/components/Tarefa.vue";
import iTarefa from '@/interfaces/iTarefa';
import BoxTarefa from "@/components/BoxTarefa.vue";

export default defineComponent({
    name: 'App',
    components: {
        FormInput,
        HistoricoTarefa,
        BoxTarefa
    },
    data() {
        return {
            tarefas: [] as iTarefa[]
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: iTarefa) {
            this.tarefas.push(tarefa)
        } 
    }
});
</script>
