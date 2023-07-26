import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import style from '../../Styles/list.module.css';
import ListArrow from '../Components/List/ListArrow';

describe('ListArrow', () => {
  const title = 'Test Title';
  const location = 'Test Location';
  const handleClick = jest.fn();


  it('renders the title prop correctly', () => {
    render(<ListArrow title={title} location={location} handleClick={handleClick} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(style.list_arrow_title);
  });

  it('renders the location prop correctly', () => {
    render(<ListArrow title={title} location={location} handleClick={handleClick} />);
    const locationElement = screen.getByText(location);
    expect(locationElement).toBeInTheDocument();
    expect(locationElement).toHaveClass(style.list_arrow_subtext);
  });

  it('renders the WISEIconButton component', () => {
    render(<ListArrow title={title} location={location} handleClick={handleClick} />);
    const wiseIconButton = screen.getByRole('button');
    expect(wiseIconButton).toBeInTheDocument();
  });

  it('calls the handleClick function when clicked', () => {
    render(<ListArrow title={title} location={location} handleClick={handleClick} />);
    const wiseIconButton = screen.getByRole('button');
    userEvent.click(wiseIconButton);
    expect(handleClick).toHaveBeenCalled();
  });
});
