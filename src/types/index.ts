export type task = {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: string;
};

export type tasks = { list: task[] };
