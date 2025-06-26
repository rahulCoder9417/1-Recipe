import RecipeFinder from './RecipeFinder'
import Ui from './Ui'
import Search from './Search'
import { useState } from 'react'

function App() {
    const [listOfItmes, setListOfItmes] = useState({
        ingredients: [],
        exclude: []})
    const [toggle, setToggle] = useState('')
    const ingredientsList = [
        "Apple", "Banana", "Carrot", "Tomato", "Spinach",
        "Lettuce", "Onion", "Garlic", "Broccoli", "Cucumber",
        "Bell pepper", "Avocado", "Lemon", "Potato", "Milk",
        "Cheese", "Yogurt", "Butter", "Cream", "Cottage cheese",
        "Sour cream", "Chicken", "Eggs", "Beef", "Salmon",
        "Pork", "Shrimp", "Tofu", "Turkey", "Rice",
        "Oats", "Bread", "Pasta", "Quinoa", "Barley",
        "Couscous", "Salt", "Pepper", "Basil", "Oregano",
        "Cinnamon", "Ginger", "Paprika", "Cumin", "Olive oil",
        "Coconut oil", "Avocado oil", "Butter", "Ghee", 
        "Sesame oil", "Almonds", "Peanuts", "Chickpeas", 
        "Lentils", "Black beans", "Kidney beans"
    ]
    const exculdeList = [
        "Apple", "Banana", "Carrot", "Tomato", "Spinach",
        "Lettuce", "Onion", "Garlic", "Broccoli", "Cucumber",
        "Bell pepper", "Avocado", "Lemon", "Potato", "Milk",
        "Cheese", "Yogurt", "Butter", "Cream", "Cottage cheese",
        "Sour cream", "Chicken", "Eggs", "Beef", "Salmon",
        "Pork", "Shrimp", "Tofu", "Turkey", "Rice",
        "Oats", "Bread", "Pasta", "Quinoa", "Barley",
        "Couscous", "Salt", "Pepper", "Basil", "Oregano",
        "Cinnamon", "Ginger", "Paprika", "Cumin", "Olive oil",
        "Coconut oil", "Avocado oil", "Butter", "Ghee", 
        "Sesame oil", "Almonds", "Peanuts", "Chickpeas", 
        "Lentils", "Black beans", "Kidney beans"
    ]


    
    const [listDAta, setListDAta] = useState({
        ingredients: [false, ingredientsList],
        exclude: [false, exculdeList],

    })

    const Ingop = (op) => {
        setToggle('')
        const newData = { ...listDAta }
        const currentState = newData[op][0]
        Object.keys(newData).forEach(key => {
            newData[key][0] = false
        })
        newData[op][0] = !currentState
        setListDAta(newData)
    }

    return (
        <div>
            <p className='text-center text-4xl text-gray-200 font-op m-3'>Find recipes</p>
            <Ui Ingop={Ingop}/>
            <Search a={listDAta} listOfItmes={listOfItmes} setListOfItmes={setListOfItmes} toggle={toggle} setToggle={setToggle}/>
            <RecipeFinder listOfItmes={listOfItmes} ingredientsList = {ingredientsList} excludeList = {exculdeList} />
        </div>
    )
}

export default App
