import React from 'react';
import { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewform/ReviewForm';
import './Reviews.css';
const Reviews = ({ getMovieData, movie, reviews, setReviews, showAlert }) => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);

    }, [])

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;
        try {
            const response = await api.post("/reviews", { reviewBody: rev.value, imdbId: movieId })
            const updatedReviews = [...reviews, { body: rev.value }];
            rev.value = "";

            setReviews(updatedReviews);
            showAlert("Review is added Successfully", "success")

        } catch (error) {
            console.log(error)
            showAlert("Review could not be added y", "danger")
        }
    }

    return (
        <Container className='review bg-dark '>
            <Row>
                <Col><h3 className='text-white'>Reviews</h3></Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText="write a Review" />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <hr />
                                </Col>
                            </Row>

                        </>

                    }
                    {
                        reviews?.map((r) => {
                            return (
                                <div key={r.id}>
                                    <Row>
                                        <Col className='text-white'>
                                            {r.body}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <hr />
                                        </Col>
                                    </Row>
                                </div>
                            )

                        })
                    }
                </Col>
                <Row>
                    <Col >
                        <hr />
                    </Col>
                </Row>

            </Row>
        </Container>
    )
}

export default Reviews