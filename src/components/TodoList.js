import { ListContainer } from './PageContainer';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todo, setTodo}) => {
    return (
        <ListContainer>
            {
                todo.map((e)=><TodoListItem key={e.id} item={e} />)
            }
        </ListContainer>
    );
};