import { Button } from '@mui/material';
import { render } from '@testing-library/react';

test(`sample`, () => {
    const { getByTestId } = render(<Button data-testid="test" disabled />);
    expect(getByTestId('test')).toBeDisabled();
});
