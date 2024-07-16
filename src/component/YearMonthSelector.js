import React, { useState } from 'react';
import './YearMonthSelector.css';

const YearMonthSelector = ({ onDateChange }) => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    const handleYearChange = (e) => {
        const newYear = parseInt(e.target.value, 10);
        setYear(newYear);
        onDateChange(newYear, month);
    };

    const handleMonthChange = (e) => {
        const newMonth = parseInt(e.target.value, 10);
        setMonth(newMonth);
        onDateChange(year, newMonth);
    };

    const renderYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear - 100; i <= currentYear + 10; i++) {
            years.push(i);
        }
        return years.map((year) => (
            <option key={year} value={year}>
                {year}
            </option>
        ));
    };

    const renderMonthOptions = () => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months.map((month, index) => (
            <option key={index + 1} value={index + 1}>
                {month}
            </option>
        ));
    };

    return (
        <div className="year-month-selector">
            <select style={{borderRadius:'20px',background:"#ededb4"}}  value={year} onChange={handleYearChange}>
                {renderYearOptions()}
            </select>
            <select style={{borderRadius:'20px',background:"#ededb4"}} value={month} onChange={handleMonthChange}>
                {renderMonthOptions()}
            </select>
        </div>
    );
};

export default YearMonthSelector;
