import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ListFlat from '../Components/List/ListFlat';
import Icon from '../Assets/icons';
import WISEIconButton from '../Components/Buttons/WISEIconButton';
import style from '../../Styles/list.module.css';

describe('ListFlat', () => {
  const title = 'Test Title';
  const location = 'Test Location';
  const date = 'Test Date';
  const subtext = 'Test Subtext';
  const color = '#FFF';
  const handleClick = jest.fn();

  it('renders the component', () => {
    const { container } = render(
      <ListFlat title={title} location={location} date={date} arrow color={color} subtext={subtext} handleClick={handleClick} />
    );
    expect(container.firstChild).toHaveClass(style.list_flat);
    expect(container.firstChild).toHaveStyle({ backgroundColor: color });
  });

  it('renders the title prop correctly', () => {
    render(<ListFlat title={title} location={location} date={date} arrow color={color} subtext={subtext} handleClick={handleClick} />);
    expect(screen.getByText(title)).toHaveClass(style.list_arrow_title);
  });

  it('renders the location prop correctly', () => {
    render(<ListFlat title={title} location={location} date={date} arrow color={color} subtext={subtext} handleClick={handleClick} />);
    const locationElement = screen.getByText(location);
    expect(locationElement).toBeInTheDocument();
    expect(locationElement).toHaveClass(style.list_arrow_subtext);
    expect(locationElement.previousSibling).toHaveClass(style.icon);
  });

  it('renders the date prop correctly', () => {
    render(<ListFlat title={title} location={location} date={date} arrow color={color} subtext={subtext} handleClick={handleClick} />);
    const dateElement = screen.getByText(date);
    expect(dateElement).toBeInTheDocument();
    expect(dateElement).toHaveClass(style.list_arrow_subtext);
    expect(dateElement.previousSibling).toHaveClass(style.icon);
  });

  it('renders the subtext prop correctly', () => {
    render(<ListFlat title={title} location={location} date={date} arrow color={color} subtext={subtext} handleClick={handleClick} />);
    expect(screen.getByText(subtext)).toHaveClass(style.list_arrow_subtext);
  });

  it('renders the WISEIconButton component', () => {
    render(<ListFlat title={title} location={location} date={date} arrow color={color} subtext={subtext} handleClick={handleClick} />);
    expect(screen.getByRole('button')).toHaveClass('icon_container primary');
  });

  it('calls the handleClick function when button is clicked', () => {
    render(<ListFlat title={title} location={location} date={date} arrow color={color} subtext={subtext} handleClick={handleClick} />);
    userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
