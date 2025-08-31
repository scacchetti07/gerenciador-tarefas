import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Sempre que o valor da lista for alterado, a função serão executada. (Criando um 'efeito', sempre que algo muda)
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // // INTERAÇÃO COM APIs
  // // O usuário só irá ser executada quando o usuário entrar na aplicação pela 1° vez. (Por causa da lista vazia no 2° parâmetro)
  // useEffect(() => {
  //   async function fetchTasks() {
  //     // CHAMAR A API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     ); // O método padrão do fetch é 'GET'

  //     // PEGAR OS DADOS DA API
  //     const data = await response.json();

  //     // ARMAZENAR/PERSISTIR OS DADOS NO STATE
  //     setTasks(data);
  //   }
  //   // SE QUISER, É POSSÍVEL CHAMAR UMA API PARA PEGAR AS TAREFAS
  //    fetchTasks();
  // }, []);

  // Função que Atualiza o "IsCompleted" da tarefa (estado de conclusão da tarefa)
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      if (task.id !== taskId) return task;

      // PRECISO ATUALIZAR ESSA TAREFA
      return { ...task, isCompleted: !task.isCompleted };
    });
    setTasks(newTasks);
  }

  // Removendo a tarefa do state e lista
  function onDeleteTaskClick(taskId) {
    // Irá criar uma nova lista de tarefas com exceto da que tem o id do parâmetro enviado
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks); // atualiza o estado visual da variável
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    // Adicionando novo elemento na lista de tarefas junto com o que já tinha (...tasks)
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
