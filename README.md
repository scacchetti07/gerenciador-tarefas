# Projeto Gerenciador de Tarefas com React + Vite

Este projeto consiste na criação de uma aplicação de gerenciamento de tarefas (To-Do List), **desenvolvida com o objetivo de aplicar e solidificar os conceitos fundamentais da biblioteca React**. A aplicação permite ao usuário adicionar, visualizar, marcar como concluída e remover tarefas.

## 🚀 Funcionalidades

* **Criação de Tarefas:** Adicionar novas tarefas à lista.
* **Listagem de Tarefas:** Visualizar todas as tarefas cadastradas.
* **Marcação de Conclusão:** Alterar o estado de uma tarefa para "concluída".
* **Exclusão de Tarefas:** Remover tarefas da lista.
* **Navegação:** Utilização de rotas para diferentes visualizações (ex: detalhes da tarefa).
* **Persistência de Dados:** As tarefas são salvas no `Local Storage` do navegador, mantendo os dados entre sessões.
* **Instância de Tarefas via API:** Caso queira tarefas automáticas, é possível obter a partir da conexão com a API _JSON placeholder_

## 🛠️ Conceitos Técnicos e Tecnologias Aplicadas

O desenvolvimento deste projeto abordou os seguintes pilares do React e seu ecossistema:

* **Componentização:** Estruturação da interface em componentes reutilizáveis e de responsabilidade única.
* **JSX:** Sintaxe utilizada para descrever a UI de forma declarativa.
* **Estado (State):** Gerenciamento de dados dinâmicos da aplicação com o Hook `useState`.
* **Propriedades (Props):** Comunicação e passagem de dados de componentes pais para filhos.
* **Hooks:**
    * `useState`: Para gerenciar o estado dos componentes (lista de tarefas, valor do input, etc.).
    * `useEffect`: Para lidar com efeitos colaterais, como a sincronização com o `Local Storage`.
* **React Router DOM:** Implementação de um sistema de rotas para criar uma experiência de SPA (Single Page Application).
* **Estilização com Tailwind CSS:** Construção de uma interface moderna e responsiva utilizando classes utilitárias.
* **Manipulação de Eventos:** Captura de interações do usuário, como cliques e digitação.

## 🎓 Créditos

Este projeto foi desenvolvido com base no excelente curso **React para Iniciantes**, ministrado por **Felipe Rocha**.

[Link para o vídeo no YouTube](https://www.youtube.com/watch?v=2RWsLmu8yVc)