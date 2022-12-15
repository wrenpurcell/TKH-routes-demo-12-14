import { useLoaderData } from "react-router-dom";

export default function TodoPage(){
  const todo = useLoaderData();

  return (
    <div>
      {todo.name}
    </div>
  )
}