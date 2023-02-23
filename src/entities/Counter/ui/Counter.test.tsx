import { componentRender } from 'shared/lib/tests/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('test render', () => {
        const { getByTestId } = componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        const { getByTestId } = componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(getByTestId('increment-btn'));
        expect(getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        const { getByTestId } = componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(getByTestId('decrement-btn'));
        expect(getByTestId('value-title')).toHaveTextContent('9');
    });
});
