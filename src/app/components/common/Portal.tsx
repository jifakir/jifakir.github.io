import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }: { children?: ReactNode }) => {
  const el = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    el.current = document.createElement('div');
    el.current.setAttribute('id', 'overlay');
    document.body.appendChild(el.current);
    return () => {
      if (el.current) {
        document.body.removeChild(el.current);
      }
    };
  }, []);
  //  @ts-ignore
  return el.current ? createPortal(children, el.current) : null;
};

export default Portal;
