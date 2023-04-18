import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '.';

describe('<Home>', () => {
  it('correctly renders the buttons', () => {
    render(<HomePage />);
    const searchCustomerText = screen.getByText('BUSCAR CLIENTE');
    const performServiceText = screen.getByText('REALIZAR SERVIÇO');

    expect(searchCustomerText).toBeInTheDocument();
    expect(performServiceText).toBeInTheDocument();
  });
});
