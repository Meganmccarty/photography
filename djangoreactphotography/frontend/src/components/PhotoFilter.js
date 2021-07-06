import React from 'react';

function PhotoFilter({ filterSubCat, onFilterSubCat, filterProduct, onFilterProduct, photos }) {
    let subcategories = [];
    photos.map(photo => {
        if (!subcategories.includes(photo.subcategory)) {
            return subcategories.push(photo.subcategory)
        }
    })

    const subcategoriesToDisplay = [...subcategories].sort((a, b) => a > b ? 1 : -1);

    return (
        <div className="filter-container">
            
            { subcategories.length > 1 ?
                <div className="filter">
                    <label>Filter by Subcategory</label>
                    <select className="form-control" value={filterSubCat} onChange={(e) => onFilterSubCat(e.target.value)}>
                        <option>All</option>
                        {subcategoriesToDisplay.map(subcategory => <option key={subcategory}>{subcategory[0].toUpperCase() + subcategory.slice(1)}</option>)}
                    </select>
                </div>
            : null }

            <div className="filter">
                <label>Filter by Product Availability</label>
                <select className="form-control" value={filterProduct} onChange={(e) => onFilterProduct(e.target.value)}>
                    <option>All</option>
                    <option>Digital Downloads</option>
                    <option>Prints</option>
                </select>
            </div>

        </div>
    )
}

export default PhotoFilter;