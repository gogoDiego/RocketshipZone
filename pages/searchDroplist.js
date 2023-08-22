import React from 'react';
import { Dropdown } from 'semantic-ui-react'


export default function SearchDropList ( {options,placeholder,props,handleChange} ) {


    
    return(
        <Dropdown
            options={options}
            placeholder={placeholder}
            search
            fluid
            selection
            className='categorySearchDroplist'
            value={props}
            onChange={(e) => handleChange(e)}
        />
    )
}
