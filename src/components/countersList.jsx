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

    const handleIncrement = (id) => {
        // console.log(id);
        setCounters((counters) => {

            return counters.map((count) => {
                if (count.id === id) {
                    return {
                        ...count,
                        value: count.value + 1
                    };
                }
                return count;
            });
        });
    };

    const handleDecrement = (id) => {
        // console.log(id);
        setCounters((counters) => {

            return counters.map((count) => {
                if (count.id === id && count.value > 0) {
                    return {
                        ...count,
                        value: count.value - 1
                    };
                }
                return count;
            });
        });
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
