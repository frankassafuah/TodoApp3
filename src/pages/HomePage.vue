<template>
  <div>
    <InputField
      @cancel-edit="cancelEditEvent"
      @edit-mode="editModeEvent"
      @todo-data="todoDataEvent"
      :todoData="todoData"
      :editModeProp="editMode"
      :todoItemProp="todoItem"
      @add-todo="addTodo"
    ></InputField>
    <TodoList
      :todoData="todoData"
      @remove-todo="removeTodo"
      @edit-todo="editTodo"
    />
  </div>
</template>
<script>
export default {
  name: "HomePage",
  components: {
    InputField: () => import("@/components/InputField.vue"),
    TodoList: () => import("@/components/TodoList.vue"),
  },
  data() {
    return {
      todoData: [],
      todoItem: {},
      editMode: false,
    };
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      const response = await this.axios.get("todos");
      this.todoData = response.data.slice(0, 5);
    },
    addTodo(todo) {
      this.todoData.push(todo);
    },
    removeTodo(id) {
      const index = this.todoData.findIndex((item) => item.id === id);
      if (index > -1) {
        //check if item was found in the array
        this.todoData.splice(index, 1);
      }
    },
    editTodo(todoItem) {
      this.todoItem = todoItem;
      this.editMode = true;
    },

    todoDataEvent(NewTodoData) {
      const index = this.todoData.findIndex(
        (item) => item.id === NewTodoData.id
      );
      this.$set(this.todoData, index, NewTodoData);
    },

    editModeEvent (newEditMode) {
      this.editMode = newEditMode
    },
    cancelEditEvent (newCancelEditEvent) {
      this.editMode = newCancelEditEvent
    }
  },
};
</script>