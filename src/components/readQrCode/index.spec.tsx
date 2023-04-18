import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../home';

describe('<ReadQrCode>', () => {
  it('correctly renders the qr code screen and close button', () => {
    render(<HomePage />);
    const qrCodeScreenTitle = screen.getByText('LER QR CODE');
    const closeBtn = screen.getByText('X');

    expect(qrCodeScreenTitle).toBeInTheDocument();
    expect(closeBtn).toBeInTheDocument();
  });
});
