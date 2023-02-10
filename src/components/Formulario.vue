<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input display" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">{{ projeto.nome }}</option>
                    </select>
                </div>
            </div>
            <div class="column">
                <ControlesDisplay @ao-temporizador-finalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { key } from "@/store";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import ControlesDisplay from './ControlesDisplay.vue';
import { computed } from 'vue'
import { registerRuntimeHelpers } from "@vue/compiler-core";

export default defineComponent({
    name: 'FormInput',
    emits: ['aoSalvarTarefa'],
    components: {
        ControlesDisplay
    },
    data () {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    setup () {
        const store = useStore(key)
        return {
            projetos: computed(() => store.state.projetos)
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number) : void{
            this.$emit('aoSalvarTarefa',{
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto)
            })
            this.descricao = '';
        }
    }
})
</script>

<style>
.formulario{
    color: var(--texto-primario);
    background: var(--bg-primario);
}
</style>