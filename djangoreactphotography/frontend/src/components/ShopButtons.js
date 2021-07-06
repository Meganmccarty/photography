import React from 'react';

function ShopButtons({ alamy, faa }) {
    console.log(alamy, faa);
    return (
        <div className="button-container">
            {alamy ?
                <a href={alamy}>
                    <button className="enabled">
                        <i className="shopping cart icon"></i>
                        Digital Downloads
                    </button>
                </a>
                :
                <button className="disabled">
                    <i className="dont icon"></i>
                    Digital Downloads
                </button>
            }
            {faa ?
                <a href={faa}>
                    <button className="enabled">
                        <i className="shopping cart icon"></i>
                        Prints
                    </button>
                </a>
                :
                <button className="disabled">
                    <i className="dont icon"></i>
                    Prints
                </button>
            }
        </div>
    )
}

export default ShopButtons;