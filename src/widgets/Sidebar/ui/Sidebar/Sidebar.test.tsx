import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';

describe('Sidebar', () => {
    test('test render', () => {
        const { getByTestId } = componentRender(<Sidebar />);
        expect(getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        const { getByTestId } = componentRender(<Sidebar />);
        const toggleButton = getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);
        expect(getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
