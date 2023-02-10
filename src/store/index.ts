import iProjeto from "@/interfaces/iProjeto";
import { InjectionKey } from "vue";
import { createStore } from "vuex";

interface Estado {
    projetos: iProjeto[]
}

export const key: InjectionKey<typeof store> = Symbol();

export const store = createStore<Estado>({
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                nome: 'TypeScript'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vue'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vuex'
            },
        ]
    }
})