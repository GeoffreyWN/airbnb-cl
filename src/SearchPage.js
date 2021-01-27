import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

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
            <SearchResult image="https://images.unsplash.com/photo-1535082623926-b39352a03fb7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2FmYXJpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" location="Awesome room in Kenya" title="Join us this holiday season" description="3 guests - 3 awesome place you people. you will be amazed and a bunch of other awesome things to say" star={4.56} price="Ksh 30,000 / night" total="KSh 34,000"/>

            <SearchResult image="https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" location="Awesome room in Kenya" title="Join us this holiday season" description="3 guests - 3 awesome place you people. you will be amazed and a bunch of other awesome things to say" star={4.16} price="Ksh 30,000 / night" total="KSh 34,000"/>

        </div>
    )
}

export default SearchPage
