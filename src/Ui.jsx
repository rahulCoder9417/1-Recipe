import React from 'react'

function Ui({ Ingop }) {
  return (
    <>
      <table className='w-full h-16 border-2 border-gray-600 rounded-md overflow-hidden shadow-lg'>
        <tbody>
          <tr className='bg-customColor py-1 border-2 border-gray-950 flex justify-between flex-row'>
            <td className='flex justify-center w-1/4 items-center'>
              <button 
                value="ingredients" 
                onClick={(e) => Ingop(e.target.value)} 
                className='bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300'
              >
                Ingredients
              </button>
            </td>
            <td className='flex justify-center w-1/4 items-center'>
              <button 
                value="exclude" 
                onClick={(e) => Ingop(e.target.value)} 
                className='bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300'
              >
                Exclude
              </button>
            </td>
          
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Ui
