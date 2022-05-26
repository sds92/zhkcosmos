import React from 'react';

type Props = {
  className: string;
  placeholder: string;
  reset: () => void
};

const InputFooter = ({ className, placeholder, reset }: Props) => {
  const [input, setInput] = React.useState<string>('');
  const [isValid, setIsValid] = React.useState<undefined | boolean>(undefined);

  const _reset = () => {
    setInput('');
  };

  const validate = (string: string) => {
    setIsValid(true);
  };

  React.useEffect(() => {
    validate(input);
  }, [input]);

  return (
    <div className={className}>
      <input
        className={`w-full h-full text-black`}
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default InputFooter;
