export function Input({ value, onChange, type = 'text', placeholder = '', style = {}, ...props }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '0.5em 1em',
        borderRadius: '0.375em',
        border: '1px solid #ccc',
        fontSize: '1em',
        marginBottom: '1em',
        ...style,
      }}
      {...props}
    />
  );
}
