import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TechSelect from '../../pages/techSelect';

describe('<TechSelect>', () => {
  it('correctly renders the tech select page', () => {
    render(<TechSelect />);
    const techSelectScreenTitle = screen.getByRole('heading', { level: 3 });
    const selectOption = screen.getByRole('option');
    const closeBtn = screen.getByText('X');

    expect(techSelectScreenTitle).toHaveTextContent(
      'TÉCNICO QUE REALIZARÁ O SERVIÇO',
    );
    expect(selectOption).toHaveTextContent('John Doe');
    expect(closeBtn).toBeInTheDocument();
  });
});
