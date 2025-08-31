import { ChevronRight, Trash } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "./Button";

// {tasks, onTaskClick, onDeleteTaskClick} => Destructure, basicamente ta especificando quais propriedades as props terão para não precisar especificar o "props."
function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    // usado para garantir que a string não tenha conflito no searchParams
    const query = new URLSearchParams();
    // Setando os valores dos params
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  // Iterando cada item adicionado a lista de tarefas (função map())
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <Button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ChevronRight />
          </Button>
          <Button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
