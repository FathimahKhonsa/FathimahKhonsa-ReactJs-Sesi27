import { TableProps} from "antd";
import Delete from "../delete-posts/Delete";
import Edit from "../edit-posts/Edit";

export interface DataType {
    id: number;
    title: string;
    body: string;
}

const columns: TableProps<DataType>['columns'] = [
    {title: 'Title', dataIndex: 'title', key: 'title', render: (val) => {
        return <span style={{color: "blue"}}>{val}</span>}},
    {title: 'Description', dataIndex: 'body', key: 'body'},
    {title: 'Action', key: 'body', render: (value: DataType) => {
        return <div>
            <Edit {...value}/> 
            <Delete id={value.id}/>
        </div>
    }}
]

export default columns
