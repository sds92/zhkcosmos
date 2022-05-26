import React from 'react';

type Props = {
  submitButton: React.ReactNode;
  children: React.ReactNode;
};

const Form = ({ children, submitButton }: Props) => {
  //   const childrenWithNewProps = React.Children.map(children, (child) => {
  //     if (React.isValidElement(child)) {
  //       return React.cloneElement(child, { data: data });
  //     }
  //     return child;
  //   });
  const reset = (cb: (a: string) => void) => {
    cb('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    // alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
    // reset()
    console.log('🚀 ~ file: Form.tsx ~ line 18 ~ handleSubmit ~ e', e);
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}
      {submitButton}
    </form>
  );
};

export default Form;
