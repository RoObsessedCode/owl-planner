import React from 'react';

const obsessionArr = ['joggin', 'side project', 'eating well', 'family']

const AllObsessions = (props) => {
  return (
    obsessionArr && obsessionArr.map((obsession, i) => {
      return <div key={i}>{obsession}</div>
    })
  )
}

export default AllObsessions;
