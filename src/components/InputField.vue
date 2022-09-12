<template>
  <div class="input-container">
    <div class="input-field">
      <input type="text" required placeholder="Enter Title" v-model="todoItem.title" />
      <div v-if="editModeProp" style="margin: 0 auto">
        <button @click="updateTodo">Edit</button>
        <button @click="cancelEdit" style="background-color: red; margin-left: 10px">Cancel</button>
      </div>
      <button v-else @click="addTodo">ADD</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    todoItemProp: {
      type: Object,
      default: () => ({}),
    },
    editModeProp: {
      type: Boolean,
      default: false,
    },
    todoData: {
      type: Array,
      default: () => ([])
    }
  },

  data() {
    return {
      todoItem: {
        id: "",
        title: "",
        userId: 11,
      }
    };
  },

  methods: {
    async addTodo() {
      const response = await this.axios.post("todos", this.todoItem);

      if (response) {
        this.$emit("add-todo", response.data);
        this.todoItem.title = "";
      }
    },

    async updateTodo() {
      const response = await this.axios.put(`todos/${this.todoItem.id}`, this.todoItem);
      if (response) {
        this.$emit("todo-data", response.data);
        this.$emit("edit-mode",  false);
        this.todoItem.title = "";
      }
    },
    cancelEdit() {
      this.todoItem.title = ""
      this.$emit("cancel-edit", false)
    }
  },

  watch: {
    todoItemProp(newValue, oldValue) {
      this.todoItem = { ...newValue };
    },
  },
};
</script>

<style scoped>
.input-field {
  width: 40%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 10px auto 30px;
  padding: 15px;
}

.input-field input {
  padding: 10px 5px;
}

.input-field button {
  background-color: rgb(41, 81, 210);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  width: 15%;
  margin: 10px auto;
  cursor: pointer;
}
</style>
