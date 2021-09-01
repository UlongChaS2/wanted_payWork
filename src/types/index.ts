export type task = {
  id: number;
  task: string;
  status: string;
  importance: string;
  isCheck: true;
  createdAt: Date;
};

export type tasks = task[];

export type createTask = {
  task: string;
  importance: string;
};
