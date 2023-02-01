/**
 * @jest-environment jsdom
 */
require('dotenv').config()
import React, { useState } from "react";
import { renderHook, act, getByTestId, getByText } from '@testing-library/react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getByRole, findByText } from '@testing-library/react';
import useFetchProduct from "../Hooks/useFetchProduct";
import axios from "axios";

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

const sampleData = {
  "review_id": 1256130,
  "rating": 1,
  "summary": "Tenetur velit velit.",
  "recommend": false,
  "response": "\"Qui consectetur nobis.\"",
  "body": "Laudantium eaque voluptates inventore. Modi atque corporis aperiam dolor id qui adipisci molestiae inventore. Vel ipsum saepe nobis.",
  "date": "2021-07-10T00:00:00.000Z",
  "reviewer_name": "Zechariah_Leannon",
  "helpfulness": 28,
  "photos": [
    {
      "id": 2451076,
      "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
      "id": 2451077,
      "url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    },
    {
      "id": 2451078,
      "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
    }
  ]
}




jest.mock('axios');

describe('useFetchProduct', () => {
  it('should make an API call with the given productId and return the response', async () => {
    const data = sampleData;
    axios.mockResolvedValue({ data });

    const productId = 71698;

    const Example = () => {
      const { response, error, loading } = useFetchProduct(71698);

      if (loading) return <div data-testid="loading">{loading}</div>;
      if (error) return <div data-testid="error">Error!</div>;
      if (response) return <div data-testid="response">{response.body}!</div>;

    }
    // render the component
    const { getByTestId } = render(<Example />);

    // check if loading that is is from the useFetchProduct hook is true
    expect(getByTestId('loading')).toBeInTheDocument();

    // check if the response is the same as the data from the API call
    await waitFor(() => {
      expect(getByTestId('response')).toBeInTheDocument();
      //expect that the response is the same as the sample data from the API call
      expect(getByTestId('response')).toHaveTextContent(sampleData.body);

    })

  })

  // if the API call fails, the error text should be displayed
  it('should display error text if API call fails', async () => {
    const error =  new Error('Something went wrong');

    axios.mockRejectedValue(error);

    const productId = 23;

    const Example = () => {
      const { response, error, loading } = useFetchProduct(productId);

      if (loading) return <div data-testid="loading">{loading}</div>;
      if (error) return <div data-testid="error">{error.message}</div>;
      if (response) return <div data-testid="response">{response}</div>;
    }

    // render the component
    const { getByTestId } = render(<Example />);

    // while the API call is in progress, the loading text should be displayed
    expect(getByTestId('loading')).toBeInTheDocument();

    // wait for the API call to finish
    await waitFor(() => {
      expect(getByTestId('error')).toBeInTheDocument();
      expect(getByTestId('error')).toHaveTextContent('Something went wrong');
    }
    );
  })


});









// expect(axios).toHaveBeenCalledWith({
//   method: 'post',
//   url: '/products',
//   data: {
//     product_id: productId
//   }
// });
// expect(result.current.response).toEqual(data);
// expect(result.current.error).toBeNull();
// expect(result.current.loading).toBeFalsy();

// jest.mock('axios');

// describe('useFetchProduct', () => {
//   it('should fetch data successfully with valid productId', async () => {

//     const sampleData = {
//       "review_id": 1256130,
//       "rating": 1,
//       "summary": "Tenetur velit velit.",
//       "recommend": false,
//       "response": "\"Qui consectetur nobis.\"",
//       "body": "Laudantium eaque voluptates inventore. Modi atque corporis aperiam dolor id qui adipisci molestiae inventore. Vel ipsum saepe nobis.",
//       "date": "2021-07-10T00:00:00.000Z",
//       "reviewer_name": "Zechariah_Leannon",
//       "helpfulness": 28,
//       "photos": [
//         {
//           "id": 2451076,
//           "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
//         },
//         {
//           "id": 2451077,
//           "url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//         },
//         {
//           "id": 2451078,
//           "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
//         }
//       ]
//     }

//     axios.post.mockResolvedValue({
//       data: sampleData
//     });

//     let responseData, error, loading;

//     const TestComponent = () => {

//       const { response, loading, error } = useFetchProduct(71698)
//       responseData  = response;
//       error = error;
//       loading = loading;

//       return null;
//     };

//     await act(async () => {
//       render(<TestComponent />);
//     });

//     expect(response).toEqual(sampleData);
//     expect(error).toBeNull();
//     expect(loading).toBeFalsy();



//   });

//   it('should return error with invalid productId', async () => {
//     const sampleError = new Error('Request failed with status code 400')
//     axios.post.mockRejectedValue(sampleError);

//     let response, error, loading;

//     const TestComponent = () => {

//       const { response, loading, error } = useFetchProduct(71692)
//       response  = response;
//       error = error;
//       loading = loading;
//       return null;
//     };

//     await act(async () => {
//       render(<TestComponent />);
//     });

//     await waitFor(() => {
//       expect(response).toBe(undefined)
//       expect(error).toEqual(sampleError);
//       expect(loading).toBeFalsy();
//     });

//     expect(response).toBe(undefined)
//     expect(error).toEqual(sampleError);
//     expect(loading).toBeFalsy();
//   });
// });





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