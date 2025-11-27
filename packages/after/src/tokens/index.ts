/**
 * 디자인 토큰 통합 export
 * 모든 디자인 토큰을 한 곳에서 관리
 */

export { colors } from './colors';
export { spacing } from './spacing';
export { typography } from './typography';
export { borderRadius } from './borderRadius';
export { opacity } from './opacity';

// CSS 변수로 사용하기 위한 헬퍼
export const tokensToCSSVars = () => {
  return {
    '--color-primary': colors.primary[500],
    '--color-primary-hover': colors.primary[600],
    '--color-secondary': colors.secondary[100],
    '--color-secondary-hover': colors.secondary[200],
    '--color-danger': colors.danger[500],
    '--color-danger-hover': colors.danger[600],
    '--color-success': colors.success[500],
    '--color-success-hover': colors.success[600],
    '--spacing-xs': spacing.xs,
    '--spacing-sm': spacing.sm,
    '--spacing-md': spacing.md,
    '--spacing-lg': spacing.lg,
    '--spacing-xl': spacing.xl,
    '--spacing-2xl': spacing['2xl'],
    '--font-size-sm': typography.fontSize.sm,
    '--font-size-base': typography.fontSize.base,
    '--font-size-md': typography.fontSize.md,
    '--border-radius-base': borderRadius.base,
    '--opacity-disabled': opacity.disabled,
  };
};

