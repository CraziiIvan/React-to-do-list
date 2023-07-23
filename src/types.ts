export interface IListProps {
    list: ITask[]
    setList: React.Dispatch<React.SetStateAction<ITask[]>>
}

export interface ITaskProps extends IListProps {
    task: ITask
    setDoneCount: React.Dispatch<React.SetStateAction<number>>
}

export interface ITask {
    id: string
    taskName: string
    done: boolean
}