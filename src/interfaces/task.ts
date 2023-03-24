export interface TaskSearch {
  date: string;
  text: string;
}

export interface InterfaceCreateTask {
  title: string;
  date: string;
  carrier: string;
  priority: string;
  agent: string;
  assignTo: string;
  insured: string;
}
