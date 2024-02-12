import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todo from './components'
import Questions from './components/Questions'
import Pokemons from './components/Pokemons';
import { store } from './state/reduxState/store';
import Counter from './components/reduxPractice/counter/Counter';
// import CryptoTable from './components/cryptos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Todo />
  },
  {
    path: '/pokemons',
    element: <Pokemons />
  },
  {
    path: '/counter',
    element: <Counter />
  }
])

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>new App</h1>
        <RouterProvider router={router} />

        {/* <Todo />
        <Questions />
        <Pokemons />
        <Counter /> */}
        {/* <CryptoTable /> */}
      </div>
    </Provider>
  );
}

export default App;
