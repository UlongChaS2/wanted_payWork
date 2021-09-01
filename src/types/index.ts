export type task = {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: Date;
};

export type tasks = { list: task[] };
