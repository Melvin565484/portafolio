import {createRouter, createWebHistory } from 'vue-router';
import Introduccion from './views/portafolio/index.vue';
import Contenido from './views/portafolio/contenido.vue';


import Guia from './views/portafolio/guia.vue';
import Guia1 from './views/portafolio/guia1.vue';
import Guia2 from './views/portafolio/guia2.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/introduccion',
            component: Introduccion
        },
        {
            path: '/introduccion',
            name: 'Introduccion',
            component: Introduccion
        },
        {
            path: '/contenido',
            name: 'Contenidos',
            component: Contenido
        },
        {
            path: '/guia',
            name: 'Guias CI',
            component: Guia
        },
        {
            path: '/guia1',
            name: 'Guias CII',
            component: Guia1
        },
        {
            path: '/guia2',
            name: 'Guias CIII',
            component: Guia2
        },
    ]
});
