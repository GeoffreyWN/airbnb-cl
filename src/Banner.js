import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import './Banner.css'
import Search from './Search';

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            {showSearch && <Search/> }
            <div className="banner__search">
                <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">{ showSearch? "Hide" : "Search Dates"}</Button>
            </div>
            <div className="banner__info">
                <h1>Let's Travel the world.</h1>
                <h5>Around the world in 30 days. Set a record bruh!</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
