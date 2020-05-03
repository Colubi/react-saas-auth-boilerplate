import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

type LoadingButtonProps = React.ComponentProps<typeof Button> & {
  children: React.ReactNode;
  loading: boolean;
};

const LoadingButton: React.FC<LoadingButtonProps> = (props) => {
  const { children, loading, ...rest } = props;
  return (
    <Button {...rest}>
      {children}
      {loading && (
        <CircularProgress
          size={16}
          css={(theme) => ({ marginLeft: theme.spacing(2) })}
        />
      )}
    </Button>
  );
};

export default LoadingButton;
