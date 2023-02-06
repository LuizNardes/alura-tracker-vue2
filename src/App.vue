<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro' : modoEscuroAtivo}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
     
    </div>
    <div class="column is-three-quarter conteudo">
      <FormInput @aoSalvarTarefa="salvarTarefa"/>
      <div class="listaTarefas">
        <HistoricoTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <BoxTarefa v-if="listaEstaVazia">
          Você não está muito produtivo hoje. :(
        </BoxTarefa>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormInput from "@/components/Formulario.vue";
import HistoricoTarefa from "@/components/Tarefa.vue";
import iTarefa from './interfaces/iTarefa';
import BoxTarefa from "./components/BoxTarefa.vue";

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormInput,
    HistoricoTarefa,
    BoxTarefa
  },
  data() {
    return {
      tarefas: [] as iTarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaEstaVazia () : boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa (tarefa: iTarefa) {
      this.tarefas.push(tarefa)
    },
    trocarTema(modoEscuroAtivo: boolean){
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style>
  .listaTarefas{
    padding: 1.25rem;
  }
  main{
    --bg-primario: #fff;
    --texto-primario: #000;
  }
  main.modo-escuro{
    --bg-primario: #2b2d42;
    --texto-primario: #ddd;
  }
  
  .conteudo{
    background-color: var(--bg-primario);
  }
</style>
