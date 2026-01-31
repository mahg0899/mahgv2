import React, { useMemo } from 'react';
import * as ReactDOM from 'react-dom';
import * as _jsx_runtime from 'react/jsx-runtime';

export const getMDXComponent = (code: string, globals: Record<string, any> = {}) => {
    const scope = { React, ReactDOM, _jsx_runtime, ...globals };
    const fn = new Function(...Object.keys(scope), code);
    return fn(...Object.values(scope)).default;
};

export const useMDXComponent = (code: string, globals: Record<string, any> = {}) => {
    return useMemo(() => getMDXComponent(code, globals), [code, globals]);
};
