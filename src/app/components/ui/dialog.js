import { useState } from 'react';

export function Dialog({ open, onOpenChange, children }) {
  return open ? (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      {children}
    </div>
  ) : null;
}

export function DialogContent({ children, style = {}, ...props }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '0.75em',
        padding: '2em',
        minWidth: '300px',
        maxWidth: '90vw',
        boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function DialogTrigger({ children, onClick }) {
  return (
    <span style={{ cursor: 'pointer' }} onClick={onClick}>
      {children}
    </span>
  );
}
