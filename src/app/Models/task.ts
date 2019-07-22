export class Task {
    public TaskID: number;
    public ParentTaskID: number;
    public TaskName: string;
    public ParentTaskName: string;
    public StartDate: string;
    public EndDate: string;
    public Priority: number;
    public Status: string;
    public IsDeleteEnable: boolean;
    public IsEndTaskEnable: boolean;
}
