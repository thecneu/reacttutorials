import React from 'react';

export default ({isLoading, playerInfo}) => {
  return isLoading
    ? <p>Loading...</p>
    : <p>Confirm Battle</p>
}