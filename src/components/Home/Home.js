import React from 'react'
import Movies from '../Movies/Movies'

const Home = ({ movies }) => {
    return (
        <div>
            <Movies movies={movies} />
            {/* {console.log(movies)} */}

        </div>
    )
}

export default Home