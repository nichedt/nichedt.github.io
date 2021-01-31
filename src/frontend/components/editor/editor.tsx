import React, { useCallback } from 'react';
import ContentEditable from '../utils/ContentEditable';

export const Editor = () => {
  const [text, setText] = React.useState('Testing');

  const handleChange = useCallback((evt) => {
    setText(evt.target.value);
  }, []);

  const handleBlur = useCallback(() => {
    console.log(text);
  }, [text]);

  return <ContentEditable html={text} onBlur={handleBlur} onChange={handleChange} />;
};
