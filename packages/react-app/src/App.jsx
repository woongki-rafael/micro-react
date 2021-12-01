import { queryClient, QueryClientProvider, useGetAllTodosQuery } from "@dable/query";
import TodoList from "@dable/todolist";

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <TodoList />
      </div>
    </QueryClientProvider>
  )
}

export default App
