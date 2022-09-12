<template>
  <div class="todo-container">
    <ul>
      <li v-for="item in todoData" :key="item.id">
        <div class="check-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          {{ item.title }}
        </div>
        <div class="icons">
          <font-awesome-icon icon="fa-solid fa-pen" @click="editTodo(item)"/>
          <font-awesome-icon icon="fa-solid fa-trash" @click="deleteTodo(item.id)"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todoData: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    async deleteTodo(id) {
      const response = await this.axios.delete(`todos/${id}`);
      if(response) {
        this.$emit('remove-todo', id)
      }
    },

    editTodo (todoItem) {
      this.$emit ('edit-todo', todoItem)
    }
  }
};
</script>


<style scoped>
ul {
  padding: 0 40px;
  width: 60%;
  margin: 0 auto;
}

li {
  list-style: none;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
}
.check-item {
  display: flex;
}

/* The container */
li .checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 100%;
}

/* On mouse-over, add a grey background color */
/* .checkbox-container:hover input ~ .checkmark {
  background: none;
  border: 2px solid #2196f3;
  box-sizing: border-box;
} */

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked ~ .checkmark {
  background-color: rgb(41, 81, 210);
  display: flex;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 2px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.fa-pen {
  margin-right: 15px;
  font-size: 13px;
  cursor: pointer;
}

.fa-trash {
  font-size: 13px;
  cursor: pointer;
}
</style>