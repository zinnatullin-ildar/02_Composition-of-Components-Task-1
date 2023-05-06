import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: 'Ненужная вещь' },
        { id: 1, value: 4, name: 'Ложка' },
        { id: 2, value: 0, name: 'Вилка' },
        { id: 3, value: 0, name: 'Тарелка' },
        { id: 4, value: 0, name: 'Набор минималиста' }
    ];

    const [counters, setCounters] = useState(initialState);

    const handleIncrement = (value) => {
        // console.log(value);
        setCounters(counters.forEach(count => count.value + 1));
    };

    const handleDecrement = (value) => {
        // // console.log(value);
        // setCounters(counters.forEach(count => count.value - 1));
    };

    const handleDelete = (id) => {
        const newCounters = counters.filter((count) => count.id !== id);
        // console.log(newCounters);
        setCounters(newCounters);
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    return (
        <>
            {counters.map(count => (
                <Counter
                    key={count.id}
                    {...count}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}
                />
            ))}
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleReset}>
                Сброс
            </button>
        </>
    );
};

export default CountersList;
