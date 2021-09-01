export type task = {
  id: string;
  taskName: string;
  status: string;
  dueDate: Date;
  createAt: Date;
};

export type tasks = task[];
