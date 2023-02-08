import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from './';

describe('Button component', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      children: 'Click me',
      handleClick: jest.fn(),
      isDisabled: false,
    };
  });

  it('renders the children prop', () => {
    const { getByText } = render(<Button {...props} />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('renders as a link if the linkHref prop is set', () => {
    props.linkHref = '/some/path';
    const { container } = render(<Button {...props} />);
    expect(container.firstChild).toHaveProperty('tagName', 'A');
    expect(container.firstChild).toHaveAttribute('href', '/some/path');
  });

  it('calls the handleClick prop when clicked', () => {
    const { getByText } = render(<Button {...props} />);
    fireEvent.click(getByText('Click me'));
    expect(props.handleClick).toHaveBeenCalled();
  });

  it('is disabled if the isDisabled prop is set', () => {
    props.isDisabled = true;
    const { container } = render(<Button {...props} />);
    expect(container.firstChild).toHaveAttribute('disabled');
    expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
  });

  it('is accessible', () => {
    const { container } = render(<Button {...props} />);
    expect(container.firstChild).toHaveAttribute('aria-disabled', 'false');
    expect(container.firstChild).toHaveAttribute('tabIndex', '0');
  });
});
