import React from 'react';

function PhotoFilter({ filter, onFilter }) {
    return (
        <div>
            <label>Filter by subcategory</label>
            <select className="form-control" value={filter} onChange={(e) => onFilter(e.target.value)}>
                <option>All</option>
                <option>Butterflies</option>
                <option>Caterpillars</option>
            </select>
        </div>
    )
}

export default PhotoFilter;