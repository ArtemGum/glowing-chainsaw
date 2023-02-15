import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { render } from '@testing-library/react';

describe('Button', () => {
    test('test render', () => {
        const { getByText } = render(<Button>TEST</Button>);
        expect(getByText('TEST')).toBeInTheDocument();
    });

    test('test clear theme', () => {
        const { getByText } = render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(getByText('TEST')).toHaveClass('clear');
    });
});
