import {useGetAllTodosQuery} from "@dable/query";

const Todo = ({todo}) => {
  return (
    <div
      style={{
        padding: '15px 30px',
        margin: '5px',
        border: '1px solid #666',
        borderRadius: '10px'
      }}
    >
      <h3>{todo.title}</h3>
      <p>{todo.completed ? 'completed' : 'not done yet'}</p>
    </div>
  );
};

const TodoContainer = () => {
  const { isLoading, isError, data } = useGetAllTodosQuery();
  if (isLoading) return <h1>로-딩 중입니닷</h1>;
  if (isError) return <p>에러가 발생해부러쓰</p>;

  return (
    <div>
      {
        data.map((todo) => {
          return <Todo key={todo.id} todo={todo} />
        })
      }
    </div>
  );

};

export { TodoContainer as default };
