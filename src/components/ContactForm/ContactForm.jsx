import { useState,useMemo } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

const ContactForm = ({onSubmit}) => {

  // const [state, setState] = useState({...INITIAL_STATE});
  const [name, setName]= useState('');
  const[number, setNumber]=useState('')

  const handleChangeName = ({ target }) => {
    const { name, value } = target;
    console.log(value);
    console.log(name);
    setName(value)
  };  

  const handleChangeNumber = ({ target }) => {
    const { name, value } = target;
    console.log(value);
    console.log(name);
    setNumber(value)
  };  

  const contactNameId = useMemo(() => nanoid(), []);
  const contactNumberId = useMemo(() => nanoid(), []);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target.name.value);
    console.log(evt.target.number.value);
    onSubmit(evt.target.name.value, evt.target.number.value);
    // reset();
  };

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   console.log(value);
  //   console.log(name);
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // reset() {
  //   this.setState({ ...INITIAL_STATE });
  // }

  
    // const { handleSubmit, handleChange } = this;
    // const { name, number } = this.state;
    return (
      <form onSubmit={handleSubmit} className={styles.formWrap}>
        {/* <div className={styles.formItem}> */}
        <label htmlFor={contactNameId} className={styles.formItem}>
          Name
          <input
            onChange={handleChangeName}
            value={name}
            name="name"
            required
            id={contactNameId}
            placeholder="Name"
            type="text"
          ></input>
        </label>

        <label htmlFor={contactNumberId} className={styles.formItem}>
          Number
          <input
            onChange={handleChangeNumber}
            value={number}
            name="number"
            id={contactNumberId}
            placeholder="Number"
            required
          ></input>
        </label>

        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  
}

export default ContactForm;