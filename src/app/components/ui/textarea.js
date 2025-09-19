export function Textarea({ value, onChange, placeholder = '', rows = 4, style = {}, ...props }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={{
        width: '100%',
        padding: '0.5em 1em',
        borderRadius: '0.375em',
        border: '1px solid #ccc',
        fontSize: '1em',
        marginBottom: '1em',
        resize: 'vertical',
        ...style,
      }}
      {...props}
    />
  );
}
