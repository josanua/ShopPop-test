
const FilterBtns = ({ open, setOpenState }) => {
    return (
        <div>
            <button className={`filter-btn${open ? ' active' : ''}`} onClick={() => setOpenState(true)}>Open</button>
            <button className={`filter-btn${!open ? ' active' : ''}`} onClick={() => setOpenState(false)}>Close</button>
        </div>
    )
}

export default FilterBtns;