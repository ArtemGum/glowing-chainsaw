import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { fireEvent } from '@testing-library/react';

describe('Sidebar', () => {
    test('test render', () => {
        const { getByTestId } = renderWithTranslation(<Sidebar />);
        expect(getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test render', () => {
        const { getByTestId } = renderWithTranslation(<Sidebar />);
        const toggleButton = getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);
        expect(getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
