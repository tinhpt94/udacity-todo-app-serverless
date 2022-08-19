export interface TodoItem {
  userId: string;
  createdAt: string;
  todoId: string;
  name: string;
  dueDate: string;
  done: boolean;
  attachmentUrl: string;
  highPriority: boolean;
}

export interface GetTodosResp {
  items: TodoItem[];
}

export interface GetTodoResp {
  item: TodoItem[];
}

export interface CreateTodoResp {
  newTodo: TodoItem;
}

// Fields in a request to create a single TODO item.
export interface TodoCreate {
  name: string;
  dueDate: string;
  attachmentUrl: string;
}

// Fields in a request to update a single TODO item.
export interface TodoUpdate {
  name: string;
  dueDate: string;
  done: boolean;
  highPriority: boolean;
}

export interface UploadUrl {
  uploadUrl: string;
}
