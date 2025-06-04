import type { Module } from '@/types/module.type';

export const modules: Module[] = [
    {
        title: 'Principio de responsabilidad única',
        description: 'Una entidad (función, clase, componente, hook) debería tener un único motivo para cambiar',
        path: '/single-responsibility-principle',
    },
    {
        title: 'Atomic Design',
        description:
            'No es la única forma válida de organizar componentes, pero es una de las más claras y efectivas para escalar proyectos y facilitar el mantenimiento.',
        path: '/atomic-design',
    },
    {
        title: 'Nomenclaturas',
        description: 'card 3',
        path: '/naming-conventions',
    },
    {
        title: 'Iteraciones y render optimizados',
        description: 'card 4',
        path: '/optimized-render-and-iterations',
    },
    {
        title: 'Hooks',
        description: 'card 5',
        path: '/hooks',
    },
];
