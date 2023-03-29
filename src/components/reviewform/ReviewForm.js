import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
    return (
        <Form>

            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                <Form.Label className="text-white">{labelText}</Form.Label>
                <Form.Control ref={revText} as="textarea" rows={3} placeholder="write your review here"></Form.Control>
                <Button className='my-2' varient="outline-info" onClick={handleSubmit}><h5>Submit</h5></Button>
            </Form.Group>
        </Form>
    )
}

export default ReviewForm