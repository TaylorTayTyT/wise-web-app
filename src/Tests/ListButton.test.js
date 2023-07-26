import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ListButton from '../Components/List/ListButton';

describe('ListButton', () => {
  const title = 'Test Title';
  const img = 'test-img.png';
  const buttonName = 'Test Button';
  const handleClick = jest.fn();

  it('renders the title prop correctly', () => {
    render(<ListButton title={title} img={img} buttonName={buttonName} handleClick={handleClick} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(title)).toHaveClass('list_arrow_title');
  });

  it('renders the image prop correctly', () => {
    render(<ListButton title={title} img={img} buttonName={buttonName} handleClick={handleClick} />);
    const image = screen.getByAltText('profile');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('image');
    expect(image).toHaveAttribute('src', img);
  });

  it('does not render the image prop if not provided', () => {
    render(<ListButton title={title} buttonName={buttonName} handleClick={handleClick} />);
    expect(screen.queryByAltText('profile')).not.toBeInTheDocument();
  });

  it('renders the button name prop correctly', () => {
    render(<ListButton title={title} img={img} buttonName={buttonName} handleClick={handleClick} />);
    expect(screen.getByText(buttonName)).toBeInTheDocument();
    expect(screen.getByText(buttonName)).toHaveClass('standard primary small');
  });

//   it('calls the handleClick function when button is clicked', () => {
//     render(<ListButton title={title} img={img} buttonName={buttonName} handleClick={handleClick} />);
//     const button = screen.getByText(buttonName);
//     userEvent.click(button);
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });
});

