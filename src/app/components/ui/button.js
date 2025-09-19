export function Button({ children, onClick, type = 'button', style = {}, ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '0.5em 1.25em',
        borderRadius: '0.375em',
  border: 'none',
        fontWeight: 500,
        cursor: 'pointer',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
