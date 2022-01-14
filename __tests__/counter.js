import containerReducer from '../src/utils/counter/reducer'; 
import { initialState } from '../src/utils/counter/reducer'; 
import { incrementAction, decrementAction } from '../src/utils/counter/action'; 

describe('Test increment', () => {
  it('Test counter increment', () => {
    expect(containerReducer(initialState, incrementAction()).counter).toBe(1);
  });
});

describe('Test decrement', () => {
  it('Test counter decrement', () => {
    expect(containerReducer({...initialState,counter:1}, decrementAction()).counter).toBe(0);
  });
});

describe('Test decrement 0', () => {
  it('Test counter decrement below 0', () => {
    expect(containerReducer(initialState, decrementAction()).counter).toBe(0);
  });
});