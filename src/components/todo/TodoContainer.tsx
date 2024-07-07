/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  //  loacalstorage
  // const {todos} = useAppSelector((state)=> state.todos)

  // from server
  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);

  console.log(todos)

  if (isError) {
    console.log(isError);
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-8">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient p-1 w-full h-full rounded-md ">
        <div className="bg-white w-full h-full rounded-lg space-y-3 p-2">
          {todos.data && todos.data.length > 0 ? (
            todos.data?.map((item: any) => <TodoCard {...item} />)
          ) : (
            <div className="p-3 w-full flex justify-center items-center font-bold text-2xl">
              <p>There is no task pending</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
