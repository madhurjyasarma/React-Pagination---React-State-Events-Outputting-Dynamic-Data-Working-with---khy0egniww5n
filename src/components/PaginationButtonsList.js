import React, { useEffect, useRef, useState } from 'react'
const PaginationButtonsList = ({ setCurrentPage }) => {
    const listRef = useRef()
    const onClick = (event) => {
        const arr = event.target.id.split('-')
        setCurrentPage(Number(arr[1]))
        // console.log(Number(arr[1]))
    }

    useEffect(() => {
        listRef.current.children[0].classList.add('active-btn')
    }, [])

    let buttonsToRender = []
    for (let i = 1; i <= 20; i++) {
        buttonsToRender.push(
            <button onClick={onClick} key={i} id={`button-${i}`}>{i}</button>
        )
    }
    const handleClick = function (event) {
        for (let btn of listRef.current.children) {
            if (event.target.id === btn.id) {
                btn.classList.add('active-btn')
            } else {
                btn.classList.remove('active-btn')
            }
        }
    }
    return (
        <div className="pagination-buttons-list" ref={listRef} onClick={handleClick}>
            {buttonsToRender}
        </div>
    )
}

export { PaginationButtonsList }