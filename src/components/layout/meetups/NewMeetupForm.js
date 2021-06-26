import { useRef } from 'react';
import { Button } from 'react-bootstrap';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitMeetupFormHandler(event) {
        // event object is handled by React fn is 'onSubmit' in Form tag
        // using a vanilla JS to prevent refresh on submit
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupDataObject = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }

        console.log(meetupDataObject);
        props.onAddMeetupChildObject(meetupDataObject);
    }

    return (
        <div>
            <form className='pb-5' onSubmit={submitMeetupFormHandler}>
                <div>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' id='title' required ref={titleInputRef}></input>
                </div>

                <div>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' id='image' required ref={imageInputRef}></input>
                </div>

                <div>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' id='address' required ref={addressInputRef}></input>
                </div>

                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea rows='5' id='description' required ref={descriptionInputRef}></textarea>
                </div>

                <div>
                    <button variant='dark'>Add Meetup</button>
                </div>

            </form>

            {/* RBS form start */}
            {/* <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
            {/* form end */}
        </div>
    )
}

export default NewMeetupForm
