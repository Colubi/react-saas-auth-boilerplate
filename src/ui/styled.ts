import styled, { CreateStyled } from '@emotion/styled';
import { emotionTheme } from '../config/theme';

// Interpolate Types of EmotionTheme in Styled Components
export default styled as CreateStyled<typeof emotionTheme>;
