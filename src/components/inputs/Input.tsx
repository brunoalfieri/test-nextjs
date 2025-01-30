import { InputAddonsHelper } from './addons/InputAddonsHelper';
import { InputAddonsIconLeft } from './addons/InputAddonsIconLeft';
import { InputAddonsIconRight } from './addons/InputAddonsIconRight';
import { InputAddonsMaxChars } from './addons/InputAddonsMaxChars';
import { InputRoot } from './root/InputRoot';
import { InputTextRoot } from './text/InputText';
import { InputTextarea } from './textarea/InputTextarea';

export const Input = {
  Root: InputRoot,
  Addons: {
    Helper: InputAddonsHelper,
    MaxChars: InputAddonsMaxChars,
  },
  Text: {
    Root: InputTextRoot,
    IconLeft: InputAddonsIconLeft,
    IconRight: InputAddonsIconRight,
  },
  Textarea: InputTextarea,
};
