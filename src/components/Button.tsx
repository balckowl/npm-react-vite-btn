const Button = () => {

    const onClick = () => {
        console.log('Vite + React + TypeScript + Tailwindcss = ❤️')
    }
    
    return (
        <button onClick={onClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded'>vite is better than webpack</button>
    )
}

export { Button }