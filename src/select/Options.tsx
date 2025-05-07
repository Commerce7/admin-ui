import React from 'react';

export interface OptionItem {
  value?: string | number;
  label: string;
  options?: OptionItem[];
}

export interface OptionsProps {
  /**
   * Array of options to render in the select
   */
  options: OptionItem[];

  /**
   * Optional placeholder text
   */
  placeholder?: string;
}

const Options = ({ options, placeholder = '' }: OptionsProps) => (
  <>
    {placeholder && (
      <option value="" hidden>
        {placeholder}
      </option>
    )}
    {options.map((option) => {
      if (option.options) {
        return (
          <optgroup key={option.label} label={option.label}>
            {option.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </optgroup>
        );
      }
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    })}
  </>
);

export default Options;
