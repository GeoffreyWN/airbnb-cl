import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>34 stays -29 jan to 3rd feb - 6 guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price Flexibility</Button>
                <Button variant="outlined">Rooms and beds Flexibility</Button>
                <Button variant="outlined">More filters</Button>
            </div>
        </div>
    )
}

export default SearchPage
