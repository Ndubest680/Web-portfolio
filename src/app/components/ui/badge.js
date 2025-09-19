export function Badge({ children, color = 'gray' }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '0.25em 0.75em',
      borderRadius: '0.5em',
      background: color,
      color: '#fff',
      fontSize: '0.85em',
      fontWeight: 500,
      marginRight: '0.5em',
    }}>
      {children}
    </span>
  );
}
