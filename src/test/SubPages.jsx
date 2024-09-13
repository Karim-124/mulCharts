import React, { useState } from 'react';
import Pagination from './Pagination'; // Import Pagination component

const SubPages = () => {
    // Simulated data for subpages
    const subPagesData = [
        { id: 1, title: 'Page 1' },
        { id: 2, title: 'Page 2' },
        { id: 3, title: 'Page 3' },
        { id: 4, title: 'Page 4' },
        { id: 5, title: 'Page 5' },
        { id: 6, title: 'Page 6' },
        { id: 7, title: 'Page 7' },
        { id: 8, title: 'Page 8' },
        { id: 9, title: 'Page 9' },
    ];

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(subPagesData.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate the items to display for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentSubPages = subPagesData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <h1>Subpages</h1>
            <ul>
                {currentSubPages.map((page) => (
                    <li key={page.id}>{page.title}</li>
                ))}
            </ul>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </div>
    );
};

export default SubPages;
