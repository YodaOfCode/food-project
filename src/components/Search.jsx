import React, {useState} from 'react';

const Search = ({cb = Function.prototype}) => {
    const [value, setValue] = useState()

    const handleKey = (e) => {
        if(e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value)
    }

    return (
        <div className='row'>
            <input
                type='search'
                id='search-field'
                placeholder='search'
                onKeyDown={handleKey}
                onChange={(e) => setValue(e.target.value)}
                value={value}/>
            <button
                className='btn'
                onClick={handleSubmit}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}>
                Search
            </button>
        </div>
    );
};

export default Search;