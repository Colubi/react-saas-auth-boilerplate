/**
 * This calculates the spacing for the
 * grid container component based on the viewsize
 */

import { isWidthUp } from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

function calculateSpacing(width: Breakpoint): 0 | 1 | 2 | 3 | 4 | 5 {
  if (isWidthUp('lg', width)) {
    return 5;
  }
  if (isWidthUp('md', width)) {
    return 4;
  }
  if (isWidthUp('sm', width)) {
    return 3;
  }
  return 2;
}

export default calculateSpacing;
