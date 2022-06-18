const Home = ()=> import('./components/Home.vue');
const Contacto = ()=> import('./components/Contacto.vue');

//importar los componetes para el Blog
const Añadir = ()=> import('./components/blog/Añadir.vue');
const Consultar = ()=> import('./components/blog/Consultar.vue');
const Editar = ()=> import('./components/blog/Editar.vue');
const Eliminar = ()=> import('./components/blog/Eliminar.vue');
const Mostrar = ()=> import('./components/blog/Mostrar.vue');

export const routes = [
    
    {
        name:'home',
        path: '/',
        component:Home
    },
    {
        name:'contacto',
        path: '/contacto',
        component:Contacto
    },
    {
        name:'añadirBlogs',
        path: '/añadir',
        component:Añadir
    },
    {
        name:'consultarBlogs',
        path: '/consultar',
        component:Consultar
    },
    {
        name:'editarBlog',
        path: '/editar/:id',
        component:Editar
    },
    {
        name:'eliminartBlogs',
        path: '/eliminar',
        component:Eliminar
    },
    {
        name:'mostrarBlogs',
        path: '/mostrar',
        component:Mostrar
    },

];
