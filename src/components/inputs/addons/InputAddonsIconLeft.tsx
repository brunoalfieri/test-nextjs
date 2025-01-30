import { SvgIconComponent } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

export function InputAddonsIconLeft(props: { icon: SvgIconComponent }) {
  return <SvgIcon data-direction="left" component={props.icon} />;
}
