import React from 'react';
import '../main.css';

function Toolbar({filters, selected, onSelectFilter}) {

    const elements = filters.map((filter) => (
        <button
            className={
                selected === filter ? 'selected' : ''
            }
            key={filter}
            onClick={() => onSelectFilter(filter)}
        >
            {filter}
        </button>
    ));

    return (
        <div>
            {elements}
        </div>
    );
}

export default Toolbar;
