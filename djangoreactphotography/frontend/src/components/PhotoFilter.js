import React from 'react';

function PhotoFilter({ filter, onFilter, photos }) {
    let subcategories = [];
    photos.map(photo => {
        if (!subcategories.includes(photo.subcategory)) {
            return subcategories.push(photo.subcategory)
        }
    })

    const subcategoriesToDisplay = [...subcategories].sort((a, b) => a > b ? 1 : -1);

    return (
        subcategories.length > 1 ?
            <div className="filter">
                <label>Filter by Subcategory</label>
                <select className="form-control" value={filter} onChange={(e) => onFilter(e.target.value)}>
                    <option>All</option>
                    {subcategoriesToDisplay.map(subcategory => <option key={subcategory}>{subcategory[0].toUpperCase() + subcategory.slice(1)}</option>)}
                </select>
            </div>
            : null
    )
}

export default PhotoFilter;