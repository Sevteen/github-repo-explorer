import { renderHook } from '@testing-library/react-hooks';
import useIsFirstRender from './useFirstRender';

describe('useIsFirstRender', () => {
  it('should return true on first render and false on subsequent renders', () => {
    const { result, rerender } = renderHook(() => useIsFirstRender());

    expect(result.current).toBe(true);

    rerender();
    expect(result.current).toBe(false);

    rerender();
    expect(result.current).toBe(false);
  });
});
