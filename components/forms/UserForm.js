import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createUser, updateUser } from '../../controllers/userData';

const initialState = {
  name: '',
  email: '',
  isSeller: false,
};

export default function UserForm({ userObj, onUpdate }) {
  const { user } = useAuth();
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (userObj.id) setFormInput(userObj);
  }, [userObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userObj.id) {
      updateUser(formInput).then(() => router.push(`/user/${userObj.id}`));
    } else {
      createUser({ ...formInput, uid: user.uid })?.then(onUpdate);
    }
  };
  console.warn(userObj);
  return (
    <>
      <Form onSubmit={handleSubmit} className="userForm">
        <h1 className="text-white mt-5">{userObj.id ? 'Update' : 'Add'} User</h1>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            name="email"
            value={formInput.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Check
          className="text-white mb-3"
          type="switch"
          id="isSeller"
          name="isSeller"
          label="Seller?"
          aria-label="Seller?"
          checked={formInput.isSeller}
          onChange={(e) => {
            setFormInput((prevState) => ({
              ...prevState,
              isSeller: e.target.checked,
            }));
          }}
        />
        <Button variant="outline-secondary" type="submit">
          {userObj.id ? 'Update' : 'Register'}
        </Button>
      </Form>
    </>
  );
}

UserForm.propTypes = {
  userObj: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    isSeller: PropTypes.bool,
    uid: PropTypes.string,
    id: PropTypes.number,
  }),
  onUpdate: PropTypes.func.isRequired,
};

UserForm.defaultProps = {
  userObj: initialState,
};
