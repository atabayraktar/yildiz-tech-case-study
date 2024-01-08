const Button = ({ onClick, variant, label, disabled, ...props }: any) => {
  return (
    <div id="btn" className={`btn-${variant}`}>
      <button disabled={disabled} {...props} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
