import { SvgIconComponent } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

export function InputAddonsIconRight(props: { icon: SvgIconComponent }) {
  return <SvgIcon data-direction="right" component={props.icon} />;
}
