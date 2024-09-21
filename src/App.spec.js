  import React from 'react';
   //import renderer from 'react-test-renderer'; - deprecated
  import { render, screen } from '@testing-library/react';
  import App, { Counter, dataReducer } from './App';
 
  const list = ['a', 'b', 'c'];

//RTL's render function takes any JSX as argument to render it as output.
// import { render, screen } from '@testing-library/react'; 


// describe('My Test Suite1', () => {
//   it('My Test Case', () => {
//     expect(true).toEqual(true);
//   });
// })

// //Test suite1
// describe('My test Suite2 - true is truthy and false is falsy', () => {
//   it('true is truthy', () => {
//     expect(true).toBe(true);
//   });

//   it('false is falsy', () => {
//     expect(false).toBe(false);
//   });
// });



//function defined inline
// function add(x, y) {
//   return x + y;
//  }

//  //test the add()
//  describe('My test suite3 - adding stuff', () => {
//   it('add up two values', () => {
//     expect(add(2, 4)).toBe(6);
//   });
// });

//Not working becasue it was deprecated to use REACT TESTING LIBRARY - https://testing-library.com/
describe('Test suite 4 - Snapshot Test', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Counter counter={1} />);
    let tree = component.toJSON();
     expect(tree).toMatchSnapshot();
  });
});



//This reducer function is exported as standalone JavaScript function 
//which doesn't render anything. Thus, we can test this reducer function 
//as plain JavaScript function.
describe('Test Suite 5 - Test Reducer Hook', () => {
  it('should set a list', () => {
    const state = { list: [], error: null };
    const newState = dataReducer(state, {
      type: 'SET_LIST',
      list,
    });
    expect(newState).toEqual({ list, error: null });
  });

  //This test case "it-block" is called the "not so happy"-path, because they 
  //don't assume a successful outcome (e.g. data fetching fails).
  it('should reset the error if list is set', () => {
    const state = { list: [], error: true };
    const newState = dataReducer(state, {
      type: 'SET_LIST',
      list,
    });

    expect(newState).toEqual({ list, error: null });
  });

  //This test case "it-block" is called the "not so happy"-path, because they 
  //don't assume a successful outcome (e.g. data fetching fails).
  it('should set the error', () => {
    const state = { list: [], error: null };
    const newState = dataReducer(state, {
      type: 'SET_ERROR',
    });

    expect(newState.error).toBeTruthy();
  });
});
  


  // Testing Notes:
  //  - do npm start 
  //  - then ctl + shift ctl + 5 to split
  //    npm run test:watch

  //  - a Test suite can have multiple test cases (it-block)
  //  -  After running your test on the command line, you should see the HTML 
  // output of your App component. Whenever you write a test for a component 
  // with React Testing library, you can render the component first and then 
  // debug what's visible for RTL's renderer in the test. This way, you can 
  // write your test with more confidence:

