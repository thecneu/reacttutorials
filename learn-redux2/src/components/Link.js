import React from 'react';

export default ({active, children}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#" onClick={e => e.preventDefault()}>
      {children}
    </a>
  )
}
