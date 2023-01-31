/**
 * @jest-environment jsdom
 */

import { renderHook, act, getByTestId, getByText } from '@testing-library/react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import useTestHook from './hooks/testHook';
import '@testing-library/jest-dom';
import { getByRole, findByText } from '@testing-library/react';
import React, { useState } from "react";

test("state change example", async () => {
  let component;
  const Example = () => {
    const [state, setState] = useState(false);
    return (
      <div>
        <button data-testid="button1" onClick={() => setState(true)}>Click me</button>
        {state && <p data-testid="test1">State changed</p>}
      </div>
    );
  };

  act(() => {
    component = render(<Example />);
  });

  const button = screen.getByTestId('button1');

  act(() => {
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
  });

  const para = screen.getByTestId('test1');

  await waitFor(() => {
    expect(para).toBeInTheDocument()

  })

  // expect(component.toJSON()).toMatchSnapshot();
});
// jest.mock('./hooks/testHook', () => {
//   return jest.fn().mockImplementation(() => {
//     return { counter: 0, handleInc: jest.fn() }
//   });
// });

// describe('useTestHook', async () => {
//   it('should increment the counter when handleInc is called', () => {
//     const { counter, handleInc } = useTestHook();
//     handleInc({ preventDefault: jest.fn() });
//     expect(counter).toBe(1);
//     expect(handleInc).toHaveBeenCalled();
//   });
// });