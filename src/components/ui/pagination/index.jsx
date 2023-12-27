import cls from "./pagination.module.scss"
import React, { useState } from 'react';
import paramsToObject from "../../../hooks/paramsToObject";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ totalPages, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [params, setSearchParams] = useSearchParams()
    const handlePageChange = (newPage) => {

        setCurrentPage(newPage);
        setSearchParams({ ...paramsToObject(params.entries()), page: newPage })
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        const visiblePages = 3; // Adjust the number of visible pages as needed

        let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        let endPage = Math.min(totalPages, startPage + visiblePages - 1);

        if (endPage - startPage < visiblePages - 1) {
            startPage = Math.max(1, endPage - visiblePages + 1);
        }

        if (startPage > 1) {
            buttons.push(
                <button key={1} onClick={() => handlePageChange(1)}>
                    1
                </button>
            );
            if (startPage > 2) {
                buttons.push(<span key="startEllipsis">...</span>);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`${currentPage === i ? cls.pagination__active : ''}`}
                >
                    {i}
                </button>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                buttons.push(<span key="endEllipsis">...</span>);
            }
            buttons.push(
                <button key={totalPages} onClick={() => handlePageChange(totalPages)}>
                    {totalPages}
                </button>
            );
        }

        return buttons;
    };

    return (
        <div className={cls.pagination}>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                &lt;
            </button>
            {renderPaginationButtons()}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
