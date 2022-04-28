const FilterBtns = ({ open, setOpenState }) => {
    return (
        <div className="filter-btns">
            <button className={`filter-btn${open ? ' active' : ''}`} onClick={() => setOpenState(true)}>Open</button>
            <button className={`filter-btn${!open ? ' active' : ''}`} onClick={() => setOpenState(false)}>Closed</button>
        </div>
    )
}

export default FilterBtns;