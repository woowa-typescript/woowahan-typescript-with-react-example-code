import {useState, useEffect} from 'react';

const [email, setEmail] = useState(initialEmail);

useEffect(() => {
  setEmail(initialEmail);
}, [initialEmail]);