import { Input } from '@/components/inputs/Input';
import { faker } from '@faker-js/faker';
import { Abc } from '@mui/icons-material';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('Check all rendering possibilities', () => {
  test('Should render only the Input', () => {
    const page = render(
      <Input.Root>
        <Input.Text.Root size="sm" />
      </Input.Root>
    );
    const inputTextEl = page.getByRole('textbox');
    expect(inputTextEl).toBeInTheDocument();
  });
  test('Should render the input with an icon on the left', () => {
    const page = render(
      <Input.Root>
        <Input.Text.Root size="sm">
          <Input.Text.IconLeft icon={Abc} />
        </Input.Text.Root>
      </Input.Root>
    );
    const inputTextEl = page.getByRole('textbox');
    const inputTextIconLeftEl = page.getByTestId('AbcIcon');
    expect(inputTextEl).toBeInTheDocument();
    expect(inputTextIconLeftEl).toHaveAttribute('data-direction', 'left');
  });
  test('Should render the Input with an Icon on the right', () => {
    const page = render(
      <Input.Root>
        <Input.Text.Root size="sm">
          <Input.Text.IconRight icon={Abc} />
        </Input.Text.Root>
      </Input.Root>
    );
    const inputTextEl = page.getByRole('textbox');
    const inputTextIconRightEl = page.getByTestId('AbcIcon');
    expect(inputTextEl).toBeInTheDocument();
    expect(inputTextIconRightEl).toHaveAttribute('data-direction', 'right');
  });
  test('Should render the Input with both Icons', () => {
    const page = render(
      <Input.Root>
        <Input.Text.Root size="sm">
          <Input.Text.IconLeft icon={Abc} />
          <Input.Text.IconRight icon={Abc} />
        </Input.Text.Root>
      </Input.Root>
    );
    const inputTextEl = page.getByRole('textbox');
    const [inputTextIconLeftEl, inputTextIconRightEl] =
      page.getAllByTestId('AbcIcon');

    expect(inputTextEl).toBeInTheDocument();
    expect(inputTextIconLeftEl).toHaveAttribute('data-direction', 'left');
    expect(inputTextIconRightEl).toHaveAttribute('data-direction', 'right');
  });
  test('Should render the Input with all Elements', () => {
    const page = render(
      <Input.Root>
        <Input.Text.Root size="sm">
          <Input.Text.IconLeft icon={Abc} />
          <Input.Text.IconRight icon={Abc} />
        </Input.Text.Root>
        <Input.Addons.Helper></Input.Addons.Helper>
        <Input.Addons.MaxChars maxChars={300} />
      </Input.Root>
    );
    const inputTextEl = page.getByRole('textbox');
    const [inputTextIconLeftEl, inputTextIconRightEl] =
      page.getAllByTestId('AbcIcon');
    page.container.querySelectorAll('label');

    expect(inputTextEl).toBeInTheDocument();
    expect(inputTextIconLeftEl).toHaveAttribute('data-direction', 'left');
    expect(inputTextIconRightEl).toHaveAttribute('data-direction', 'right');
  });
  test('Should render the Input with a Helper', () => {
    const helperText = faker.word.words(2);

    const page = render(
      <Input.Root>
        <Input.Addons.Helper>{helperText}</Input.Addons.Helper>
        <Input.Text.Root size="sm" />
      </Input.Root>
    );

    const inputTextEl = page.getByRole('textbox');
    const helperTextEl = page.container.querySelector('small');

    expect(inputTextEl).toBeInTheDocument();
    expect(helperTextEl?.tagName).toBe('SMALL');
    expect(helperTextEl).toHaveTextContent(helperText);
  });
  test('Should render the Input with a Max Chars', () => {
    const maxChars = faker.number.int({ min: 10, max: 999 });
    const inputValue = faker.word.words(2);

    const page = render(
      <Input.Root>
        <Input.Addons.MaxChars maxChars={maxChars} currentValue={inputValue} />
        <Input.Text.Root defaultValue={inputValue} size="sm" />
      </Input.Root>
    );

    const inputTextEl = page.getByRole('textbox');
    const maxCharsEl = page.container.querySelector('small');

    expect(inputTextEl).toBeInTheDocument();
    expect(maxCharsEl?.tagName).toBe('SMALL');
    expect(maxCharsEl).toHaveTextContent(`${inputValue.length}/${maxChars}`);
  });
  test('Should render the Input with both Max Chars and Helper', () => {
    const helperText = faker.word.words(2);
    const maxChars = faker.number.int({ min: 10, max: 999 });
    const inputValue = faker.word.words(2);

    const page = render(
      <Input.Root>
        <Input.Addons.MaxChars maxChars={maxChars} currentValue={inputValue} />
        <Input.Addons.Helper>{helperText}</Input.Addons.Helper>
        <Input.Text.Root defaultValue={inputValue} size="sm" />
      </Input.Root>
    );

    const inputTextEl = page.getByRole('textbox');
    const [helperTextEl, maxCharsEl] = page.container.querySelectorAll('small');

    expect(inputTextEl).toBeInTheDocument();
    expect(maxCharsEl?.tagName).toBe('SMALL');
    expect(maxCharsEl?.textContent).toBe(`${inputValue.length}/${maxChars}`);
    expect(helperTextEl?.tagName).toBe('SMALL');
    expect(helperTextEl).toHaveTextContent(helperText);
  });
});
