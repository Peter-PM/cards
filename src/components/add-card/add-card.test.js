import React from 'react';
import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddCard from './add-card';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore({});

describe('Component AddCard testing', () => {
  it('correct render', () => {
    render(
      <Provider store={mockStore({})}>
        <AddCard/>
      </Provider>,
    );

    expect(screen.getByText(/Добавить карточку/i)).toBeInTheDocument();
  })
})