import React, { useEffect, useState } from 'react';

const Test = () => {
  return (
    <div>
      {localStorage.getItem('Name') && (
        <div>
          Name: <p>{localStorage.getItem('Name')}</p>
        </div>
      )}
      {localStorage.getItem('Password') && (
        <div>
          Password: <p>{localStorage.getItem('Password')}</p>
        </div>
      )}
      {localStorage.getItem('data') && (
        <div>
          Data: <p>{localStorage.getItem('data')}</p>
        </div>
      )}
    </div>
  );
};

export default Test;
