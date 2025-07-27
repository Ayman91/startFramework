import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Contact = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column gap-3 py-5">
      <div className="text-center px-3">
        <h2 className="fs-1 fw-bolder mb-4">CONTACT ME</h2>

        <div className={`line ${styles.contactLine} position-relative`}>
          <FontAwesomeIcon icon={faStar} size="lg" />
        </div>
      </div>

      <div className="container px-3 px-md-5">
        <Form className="mx-auto" style={{ maxWidth: '800px' }}>
          <div className="row g-3">
            <div className="col-md-6">
              <FormGroup floating>
                <Input
                  id="userName"
                  name="userName"
                  placeholder="Name"
                  type="text"
                  className="rounded-1"
                />
                <Label for="userName">Name</Label>
              </FormGroup>
            </div>

            <div className="col-md-6">
              <FormGroup floating>
                <Input
                  id="userEmail"
                  name="userEmail"
                  placeholder="Email"
                  type="email"
                  className="rounded-1"
                />
                <Label for="userEmail">Email Address</Label>
              </FormGroup>
            </div>

            <div className="col-12">
              <FormGroup floating>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="tel"
                  className="rounded-1"
                />
                <Label for="phoneNumber">Phone Number</Label>
              </FormGroup>
            </div>

            <div className="col-12">
              <FormGroup floating>
                <Input
                  id="message"
                  name="message"
                  placeholder="Message"
                  type="textarea"
                  className="rounded-1"
                  style={{ height: '150px' }}
                />
                <Label for="message">Your Message</Label>
              </FormGroup>
            </div>

            <div className="col-12 text-center text-md-start">
              <Button
                color="success"
                className="px-5 py-2 rounded-1 text-uppercase fw-bold"
              >
                Send Message
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
