import React, { useState } from 'react';

type UserEmailProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

const UserEmail: React.VFC<UserEmailProps> = ({ email, setEmail }) => {
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <div>
      <input type='text' value={email} onChange={onChangeEmail} />
    </div>
  );
};