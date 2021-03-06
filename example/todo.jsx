import { dom, component } from 'mise';

component({
  template: state => actions => (
    <div>
      <h1>Todos</h1>
      <ul>
        {state.todos.map(todo =>
          (<li>{todo.text}</li>)
        )}
      </ul>

      <input
        type="text"
        value={state.input}
        oninput = {e => actions.input({ value: e.target.value })}/>
      <button
        onclick={actions.add}>Add Todo</button>
    </div>
  ),
  state: {
    todos: [],
    input: '',
  },
  actions: {
    add: (state, actions) => {
      const text = state.input;
      actions.clearInput();
      return { todos: [...state.todos, { text }] };
    },
    input: (state, actions, { value }) => ({ input: value }),
    clearInput: () => ({ input: '' }),
  },
});
