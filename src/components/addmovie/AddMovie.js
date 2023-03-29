import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axiosConfig';

const AddMovie = (props) => {
    const navigate = useNavigate();
    const [picture, setPicture] = useState({ imdbId: "", title: "", releaseDate: "", trailerLink: "", poster: "", genres: "", backdrops: "" })

    const addPicture = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/addmovie", { imdbId: picture.imdbId, title: picture.title, releaseDate: picture.releaseDate, trailerLink: picture.trailerLink, poster: picture.poster, genres: picture.genres, backdrops: picture.backdrops })

            console.log(response.data);

            props.showAlert("Movie is added Successfully", "success")
            setPicture({ imdbId: "", title: "", releaseDate: "", trailerLink: "", poster: "", genres: "", backdrops: "" })

            navigate("/");
        } catch (error) {
            console.log(error)
            props.showAlert("Movie is not added ", "danger")
        }
    }


    const onChange = (e) => {
        setPicture({ ...picture, [e.target.name]: e.target.value })
    }
    return (
        <div className='bg-secondary '>
            <div className="container w-50  text-white border-primary rounded" style={{ backgroundColor: '#11466f' }}>
                <div className=" pt-3 ">

                    <h2 className='my-2 py-2 text-white'> Add your Movie</h2>
                </div>
                <form>
                    <div className="mb-3 my-3 ">
                        <label htmlFor="imdbId" className="form-label">ImdbId</label>
                        <input type="text" className="form-control" id="imdbId" name="imdbId" onChange={onChange} minLength={3} required value={picture.imdbId} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" onChange={onChange} minLength={3} required value={picture.title} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="releaseDate" className="form-label">Release Date </label>
                        <input type="text" className="form-control" id="releaseDate" name="releaseDate" onChange={onChange} required value={picture.releaseDate} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="trailerLink" className="form-label">trailer Link</label>
                        <input type="text" className="form-control" id="trailerLink" name="trailerLink" onChange={onChange} required value={picture.trailerLink} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="poster" className="form-label">Poster Link</label>
                        <input type="text" className="form-control" id="poster" name="poster" onChange={onChange} required value={picture.poster} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="genres" className="form-label">Genres</label>
                        <input type="text" className="form-control" id="genres" name="genres" onChange={onChange} required value={picture.genres} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="backdrops" className="form-label">Backdrops</label>
                        <input type="text" className="form-control" id="backdrops" name="backdrops" onChange={onChange} required value={picture.backdrops} />
                    </div>

                    <button type="submit" className="btn btn-info border-primary my-3" onClick={addPicture}>Add Movie</button>
                </form>


            </div>
        </div>
    );
}

export default AddMovie