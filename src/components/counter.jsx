import React from 'react';

// В компоненте counter нужно вызвать методы onIncrement() и onDencrement(), передав их через пaраметры props.
// Эти методы нужно реализовать в countersList и они должны обновлять значения value в состоянии counters.
// Передаем их в качестве аргументов как onIncrement() и onDencrement() и вызываем их в дочерних элементах.

const Counter = (props) => {
    // console.log(props);
    const { value } = props;

    const formatValue = () => {
        return value === 0 ? 'empty' : value
    };

    const getBagdeClasses = () => {
        let classes = 'badge m-2 ';
        classes += (value === 0 ? 'bg-warning' : 'bg-primary');
        return classes;
    };

    return (
        <div>
            <span>{props.name}</span>
            <span
                className={getBagdeClasses()}>
                {formatValue()}
            </span>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={() => props.onIncrement(props.id)}>
                +
            </button>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={() => props.onDecrement(props.id)}>
                -
            </button>
            <button
                className='btn btn-danger btn-sm m-2'
                onClick={() => props.onDelete(props.id)}>
                Удалить
            </button>

        </div>
    );
};

export default Counter;
