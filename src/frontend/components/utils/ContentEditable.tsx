// https://github.com/lovasoa/react-contenteditable/issues/161

import React, { useEffect, useRef, useCallback, DependencyList } from 'react';
import ReactContentEditable, { Props } from 'react-contenteditable';

// Custom hook to use ref as state.
export const useRefCallback = <T extends any[]>(
  value: ((...args: T) => void) | undefined,
  deps?: DependencyList,
): ((...args: T) => void) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, deps ?? [value]);

  const result = useCallback((...args: T) => {
    ref.current?.(...args);
  }, []);

  return result;
};

/**
 * Wrapper for ReactContentEdiable, needed in order for preserve state consistently across events when using hooks.
 * Uses useRefCallback to abstract state into refs, which ill preserve the most recent state for content without requiring
 * internal state changes from ReactContentEditable (shouldComponentUpdate). A quote from the github discussion:
 *
 * react-contenteditable has to prevent rendering (using shouldComponentUpdate) very frequently. Otherwise, the caret would
 * jump to the end of the editable element on every key stroke. With useState, you create a new onBlur event handler on every
 * keystroke, but since the ContentEditable is preventing rendering, your event handlers are not taken into account on every
 * keystroke, and it's the handler function that was creating the last time the component was rendered that gets called.
 */
export const ContentEditable = ({ ref, onChange, onInput, onBlur, onKeyPress, onKeyDown, ...props }: Props) => {
  const onChangeRef = useRefCallback(onChange);
  const onInputRef = useRefCallback(onInput);
  const onBlurRef = useRefCallback(onBlur);
  const onKeyPressRef = useRefCallback(onKeyPress);
  const onKeyDownRef = useRefCallback(onKeyDown);

  return (
    <ReactContentEditable
      {...props}
      onChange={onChangeRef}
      onInput={onInputRef}
      onBlur={onBlurRef}
      onKeyPress={onKeyPressRef}
      onKeyDown={onKeyDownRef}
    />
  );
};

export default ContentEditable;
