import { useEffect } from 'react';

const useMountEffect = effectFunc => useEffect(effectFunc, []);

export default useMountEffect;
