import HomePage from "@/pages/HomePage.vue";
import TodoDetails from '@/pages/TodoDetails.vue'
import Discount from '@/pages/Discount.vue'

export default [{
        name: 'home',
        path: "/",
        components: {
            default: HomePage,
            discount: Discount
        },
    },
    {
        name: 'todo-details',
        path: "/todo/:id/details",
        component: TodoDetails
    }
];