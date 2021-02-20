import React from 'react';
import Todo from '../models/Todo';

type TodoListProps = {
	items: Todo[];
	deleteItemHandler: (item: Todo) => void;
};

const TodoList: React.FC<TodoListProps> = ({ items, deleteItemHandler }) => {
	return (
		<ul>
			{items.map((item) => (
				<li key={item.id}>
					<span>
						{item.title} ({item.status})
					</span>
					{/*
						<button
							onClick={(event) => {
								event.preventDefault();
								deleteItemHandler(item);
							}}
						>
							Delete
						</button>
					*/}
					<button
						onClick={deleteItemHandler.bind(null, item)}
					>
						Delete
					</button>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
