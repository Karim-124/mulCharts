import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="pagination">
            {pages.map((page) => (
                <button
                    key={page}
                    className={`page-item ${currentPage === page ? 'active' : ''}`}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
