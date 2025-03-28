import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo msg',
            checked: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (is, todo) => {},
    deleteTodo: (id) => {},
    toggleChecked: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider