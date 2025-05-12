import React from 'react'

const ValueFinder = ({ data, value }) => {
    const item = data.find((entry) => entry.value === value);
    const label = item ? item.label : '*';
    const className = item ? item.class : '*';
  
    return <div className={className}>{label}</div>;
}

export default ValueFinder

