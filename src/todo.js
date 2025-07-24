class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completionStatusBoolean = false;
  }

  changePriority(value) {
    this.priority = value;
  }
  changeCompletionStatus() {
    this.completionStatusBoolean = true;
  }
}

export default ToDo;
