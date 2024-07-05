const Button = ({ text, type = 'submit' }) => {
  return (
    <button type={type} onClick={() => console.log('hi')}>
      {text}{' '}
    </button>
  );
};

export default Button;
