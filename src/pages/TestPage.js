import React from 'react';
import useSWR from 'swr';
const fetcher = url => fetch(url).then(res => res.json());

const TestPage = () => {
  let token = localStorage.getItem('token');
  const { data : appointment } = useSWR(
    ['https://enclave-encare.herokuapp.com/api/doctor/appointments', token],
    fetcher
  );
  return (
    <div>
      <h1>{appointment.userResponse?.accountResponse?.avatar}</h1>

    </div>
  );
};

export default TestPage;
