import HomePage from "@/pages/HomePage.vue";
import TodoDetails from '@/pages/TodoDetails.vue'

export default [{
        name: 'home',
        path: "/",
        component: HomePage,
    },
    {
        name: 'todo-details',
        path: "/todo/:id/details",
        component: TodoDetails
    }
];