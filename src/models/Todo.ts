export enum TodoStatus {
	PENDING = 'pending',
	FINISHED = 'finished'
}

export default class Todo {
	id: string;
	title: string;
	status: TodoStatus;

	constructor(title: string) {
		this.title = title;
		this.id = Math.random().toString();
		this.status = TodoStatus.PENDING;
	}
}
