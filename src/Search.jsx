import React, { useState, useEffect } from 'react'
import './op.css'
function Search({ setListOfItmes,listOfItmes,a, toggle, setToggle }) {
    const [buttonStates, setButtonStates] = useState([])

    useEffect(() => {
        if (toggle) {
            let states = a[toggle][1].map(() => false)
            if (listOfItmes[toggle].length!=0) {
                listOfItmes[toggle].forEach(element => {
                    states[element] = true
                });
            }
            setButtonStates(states)
        }
    }, [toggle, a])

    useEffect(() => {
        const activeToggle = Object.keys(a).find(key => a[key][0])
        setToggle(activeToggle || '')
    }, [a, setToggle])

    const toggleButtonState = (index) => {
        const newButtonStates = [...buttonStates]
        newButtonStates[index] = !newButtonStates[index]
        setButtonStates(newButtonStates)
        if (newButtonStates[index]) {
            setListOfItmes(prevState => ({
                ...prevState,
                [toggle]: [...prevState[toggle], index] 
            }))
        } else {
            setListOfItmes(prevState => ({
                ...prevState,
                [toggle]: prevState[toggle].filter(item => item !== index) 
            }))
        }

    }

    const activeCount = buttonStates.filter(Boolean).length
    const translateY = toggle ? 'translateY(0)' : 'translateY(100%)'
    const translateX = 'translateX(-50%)'

    const divStyle = {
        overflowY: 'auto',
        flexDirection: 'column',
        maxHeight: '400px',
        width: '460px',
        position: 'fixed',
        left: '50%',
        transform: `${translateX} ${translateY}`,
        transition: 'transform 0.7s ease, opacity 0.7s ease',
        backgroundColor: '#1f2937',
        borderRadius: '0.375rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        padding: '1rem',
        opacity: toggle ? 1 : 0
    }

    return (
        <div style={divStyle} className={'scrollbar-hidden'}>
            <style>{`
                .overflow-y-auto::-webkit-scrollbar {
                    display: none
                }
            `}</style>
            <p className="text-white text-lg">Recipe -- Selected: {activeCount}</p>
            <div className="mt-2 grid grid-cols-4 gap-4 w-auto">
                {toggle && a[toggle][1].map((op, index) => (
                    <button 
                        onClick={() => toggleButtonState(index)} 
                        key={index} 
                        className={`bg-gray-600 w-24 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition duration-200 ${buttonStates[index] ? 'bg-gray-900' : 'bg-gray-600'}`} 
                        aria-pressed={buttonStates[index]}
                    >
                        {op}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Search
