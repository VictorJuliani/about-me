import React, { useState } from 'react';
import './styles.scss';

export const Carousel: React.FC = ({ children }) => {
    const childrenLength = Array.isArray(children) ? children.length : 1;
    const hasMultipleChildren = childrenLength > 1;
    const [page, setPage] = useState(0);

    const prev = () => setPage((0 === page) ? childrenLength - 1 : page - 1);
    const next = () => setPage((page + 1) % childrenLength);

    return (
        <div className="carousel">
            {
                hasMultipleChildren &&
                <button className="carousel__btn" onClick={prev}>&lt;</button>
            }
            <div className="carousel__payload">
                { Array.isArray(children) ? children[page] : children }
            </div>
            {
                hasMultipleChildren &&
                <button className="carousel__btn" onClick={next}>&gt;</button>
            }
        </div>
    )
};
