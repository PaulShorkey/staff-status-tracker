import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';



test("renders without crashing", () => {
  render(<App />);
});

test("Section status returns status", () => {
  const row = [
    {
      index: 1,
      shop: 's1',
      color: 'red',
      blurb: 'blurb1'
    },
    {
      index: 2,
      shop: 's2',
      color: 'yellow',
      blurb: 'blurb2'
    },
    {
      index: 3,
      shop: 's3',
      color: 'green',
      blurb: 'blurb3'
    }
  ];

  const output = [{index: 1,
    shop: 's1',
    color: 'red',
    blurb: 'blurb1'}]
 
    expect().toEqual();
})
