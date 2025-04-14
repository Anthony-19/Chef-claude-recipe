import Header from './components/Header'
import AddIngredient from './components/AddIngredient'
import SuggestedRecipe from './components/SuggestedRecipe'


import './App.css'

function App() {
  return (
    <div className='my-app'>
        <Header />
        <AddIngredient />
        <SuggestedRecipe />
    </div>
  )
}

export default App
