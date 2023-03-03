import React from 'react'
import { useSelector } from "react-redux";
import Movies from '../Components/Movies';

function Favourite() {
  const { favourites } = useSelector((state) => state.movies);

  return (
    <div>
       {
        favourites.length > 0 ? <Movies moviesList={favourites} title="favourites" /> : (
            <h1 className="text-2xl font-light text-center mt-4 text-gray-500">You haven't added any movie in you favourite list</h1>
        )
       }
    </div>
  )
}

export default Favourite;