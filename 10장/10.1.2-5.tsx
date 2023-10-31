import React, { useState } from 'react';

type UserEmailProps = {
  initialEmail: string;
};

const UserEmail: React.VFC<UserEmailProps> = ({ initialEmail }) => {
  const [email, setEmail] = useState(initialEmail); 
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <div>
      <input type='text' value={email} onChange={onChangeEmail} />
    </div>
  );
};