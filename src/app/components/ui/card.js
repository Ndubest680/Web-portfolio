export function Card({ children, style = {}, ...props }) {
  return (
    <div
      style={{
        borderRadius: '0.75em',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        padding: '1.5em',
        marginBottom: '1em',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, style = {}, ...props }) {
  return (
    <div style={{ ...style }} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, style = {}, ...props }) {
  return (
    <div
      style={{
        borderBottom: '1px solid #eee',
        paddingBottom: '0.75em',
        marginBottom: '1em',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, style = {}, ...props }) {
  return (
    <h3
      style={{
        fontSize: '1.25em',
        fontWeight: 600,
        margin: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </h3>
  );
}
