import { describe, expect, test } from 'vitest';
import { Screen } from '@termuijs/core';
import { FormField } from './FormField.js';
import { TextInput } from '@termuijs/widgets';

describe('FormField', () => {
  test('renders label and child correctly', () => {
    const field = new FormField({
      label: 'Username',
      child: new TextInput(),
    });

    const screen = new Screen(40, 10);

    field.updateRect({
      x: 0,
      y: 0,
      width: 40,
      height: 10,
    });

    field.render(screen);

    const output = screen.back
      .map(row => row.map(cell => cell.char).join(''))
      .join('\n');

    expect(output).toContain('Username');
  });

  test('renders error when set', () => {
    const field = new FormField({
      label: 'Username',
      error: 'Required',
      child: new TextInput(),
    });

    const screen = new Screen(40, 10);

    field.updateRect({
      x: 0,
      y: 0,
      width: 40,
      height: 10,
    });

    field.render(screen);

    const output = screen.back
      .map(row => row.map(cell => cell.char).join(''))
      .join('\n');

    expect(output).toContain('Required');
  });
});