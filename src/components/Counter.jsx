const Counter = ({count, handleIncrement, handleDecrement}) => {

    return (
        <div>
            <h1 className="bg-blue-500">Welcome to my Counter Application</h1>
            <h2>Count: { count }</h2>
            <button onClick={ handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            {count > 10 ? <h3>You are kind of famous</h3> : <h3>Go chase some clout!</h3>}
            
            { count < 0 && <h3>Count is negative!</h3> }
        </div>
    )
}

export default Counter;