import { describe, it, expect } from 'vitest';
import { FormField } from './FormField.js';
import { Widget } from '@termuijs/widgets';
import { Screen } from '@termuijs/core';

const createChild = () =>
    new (class extends Widget {
        protected _renderSelf(): void {}
    })();

describe('FormField', () => {
    it('renders label', () => {
        const screen = new Screen(20, 3);

        const field = new FormField({
            label: 'Username',
            child: createChild()
        });

        field.updateRect({ x: 0, y: 0, width: 20, height: 3 });
        field.render(screen);

        const text = screen.back
            .map(r => r.map(c => c.char).join(''))
            .join('\n');

        expect(text).toContain('Username');
    });
});