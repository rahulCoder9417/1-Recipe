import React from 'react';
import './op.css'
const Card = ({ op }) => {
    return (
        <div  className="text-gray-800 scrollbar-hidden overflow-y-scroll bg-white rounded-lg shadow-lg p-2 m-auto h-[320px] w-[250px] "> 
            <img src={op.image} alt={op.title} className="w-full h-28 object-cover rounded-t-lg" />
            <h2 className="text-md font-bold mt-2">{op.title}</h2>
            <button className="bg-gray-200 text-gray-800 rounded px-2 py-1 mt-2 text-sm"> 
                👍 {op.likes}
            </button>

            <div className="mt-2">
                <h3 className="font-semibold text-sm">Used Ingredients:</h3>{op.usedIngredients.length!=0 ?
                <ul className="flex flex-wrap">
                    {op.usedIngredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center mr-2 mb-2">
                            <img src={ingredient.image} alt={ingredient.name} className="w-8 h-8 rounded-full mr-2" />
                            <span className="text-xs">{ingredient.original}</span> 
                        </li>
                    ))} 
                </ul>:<p>Nothing</p>}
            </div>

            <div className="mt-2">
                <h3 className="font-semibold text-sm">Missed Ingredients:</h3>{op.missedIngredients.length!=0 ?
                <ul className="flex flex-wrap">
                    {op.missedIngredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center mr-2 mb-2">
                            <img src={ingredient.image} alt={ingredient.name} className="w-8 h-8 rounded-full mr-2" />
                            <span className="text-xs">{ingredient.original}</span>
                        </li>
                    ))}
                </ul>:<p>Nothing</p>}
            </div>

            <div className="mt-2">
                <h3 className="font-semibold text-sm">Unused Ingredients:</h3>{op.unusedIngredients.length!=0 ?
                <ul className="flex flex-wrap">
                    {op.unusedIngredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center mr-2 mb-2">
                            <img src={ingredient.image} alt={ingredient.name} className="w-8 h-8 rounded-full mr-2" />
                            <span className="text-xs">{ingredient.original}</span>
                        </li>
                    ))}
                </ul> :<p>Nothing</p>}
            </div>
        </div>
    );
};

export default Card;
