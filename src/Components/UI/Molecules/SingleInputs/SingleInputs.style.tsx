import { styled } from 'styled-components';

import InputStatus from '../../Interface/IStatus';
import { TTheme } from '@/Components/UI/Interface/TTheme';

interface IInputWrapper {
  $status?: Omit<InputStatus, 'isLoading'>;
  theme: TTheme;
}
export const InputWrapper = styled.div<IInputWrapper>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.md};

  input {
    ${({ $status, theme }) =>
      $status?.isError ? `border-color: ${theme.colors.error[0]}` : $status?.isSucceed ? `border-color: ${theme.colors.success[0]};` : ''};
    transition: border-color 0.3s ease-in-out;
  }
`;
