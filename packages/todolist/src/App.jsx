import { queryClient, QueryClientProvider } from "@dable/query";
import TodoList from "./TodoList";

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
