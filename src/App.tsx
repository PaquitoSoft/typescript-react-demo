import React, { useState } from 'react';
import NewTodo from './component/NewTodo';
import TodoList from './component/ToloList';
import Todo from './models/Todo';

function App() {
	const [todos, setTodos] = useState<Todo[]>([new Todo('Finish the course')]);

	function onNewTodo(newTodo: Todo) {
		setTodos((_todos) => [..._todos, newTodo]);
	}

	function deleteItemHandler(todo: Todo) {
		setTodos((_todos) => _todos.filter((_todo) => _todo.id !== todo.id));
	}

	return (
		<div className="App">
			<h1>Typescript demo app</h1>
			<div className="new-todo">
				<NewTodo onNewTodo={onNewTodo} />
			</div>
			<div className="todo-lists">
				<TodoList items={todos} deleteItemHandler={deleteItemHandler} />
			</div>
		</div>
	);
}

export default App;
