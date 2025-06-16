import { useReducer } from "react"; // Import useReducer hook
import ReactDOM from "react-dom/client"; // For rendering

// Initial list of todos
const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

// Reducer function defining how state updates based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE": // Action to toggle completion status
      return state.map((todo) => {
        if (todo.id === action.id) {
          // Flip the 'complete' value for the matching todo
          return { ...todo, complete: !todo.complete };
        } else {
          // Keep other todos unchanged
          return todo;
        }
      });
    default:
      // Return the current state if action type not recognized
      return state;
  }
};

// Todo component
function Todos() {
  // Initialize state and dispatcher with useReducer
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  // Handler to toggle todo completion status
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  // Render the list of todos
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            {/* Checkbox to toggle completion */}
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

// Render the component into the root DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todos />);