'use client'
import React, { useRef, useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function Fancybox({ children, delegate, options }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const fancyboxDelegate = delegate || '[data-fancybox]';
    const fancyboxOptions = options || {};

    NativeFancybox.bind(container, fancyboxDelegate, fancyboxOptions);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [delegate, options]);

  return <div ref={containerRef}>{children}</div>;
}

export default Fancybox;
