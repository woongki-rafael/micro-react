import { queryClient, QueryClientProvider, useGetAllTodosQuery } from "@dable/query";
import TodoList from "@dable/todolist";
import Header from "@dable/header";

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <TodoList />
      </div>
    </QueryClientProvider>
  )
}

export default App
