// redux actions

var actions = {
	addTodo(text){
    return {
      type: 'ADD_TODO',
      text
    };
  },

  deleteTodo(id){
    return {
      type: 'DELETE_TODO',
      id
    }
  },
  
  completeTodo(id){
    return {
      type: 'COMPLETE_TODO',
      id
    }
  }

};

module.exports = actions;
