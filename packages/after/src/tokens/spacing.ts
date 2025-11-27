/**
 * 디자인 시스템 간격 토큰
 * 일관된 간격 시스템 제공
 */

export const spacing = {
  // 기본 간격
  xs: '4px',
  sm: '6px',
  md: '8px',
  lg: '10px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '20px',
  '4xl': '24px',
  '5xl': '32px',

  // Button 패딩
  button: {
    sm: {
      vertical: '6px',
      horizontal: '12px',
    },
    md: {
      vertical: '10px',
      horizontal: '20px',
    },
    lg: {
      vertical: '12px',
      horizontal: '24px',
    },
  },

  // Form 간격
  form: {
    groupMargin: '16px',
    labelMargin: '6px',
    helperMargin: '4px',
    inputPadding: '8px 10px',
    textareaPadding: '16.5px 14px',
    textareaPaddingFocus: '15.5px 13px',
  },

  // Card 간격
  card: {
    padding: '20px',
    headerPadding: '20px',
    bodyPadding: '20px',
  },

  // Modal 간격
  modal: {
    padding: '16px',
    headerPadding: '16px 24px',
    bodyPadding: '24px',
    footerPadding: '16px 24px',
    closePadding: '0 4px',
  },

  // Table 간격
  table: {
    cellPadding: '16px',
  },

  // Badge 간격
  badge: {
    small: {
      padding: '0px 4px',
      height: '16px',
    },
    medium: {
      padding: '0px 8px',
      height: '20px',
    },
    large: {
      padding: '0px 10px',
      height: '24px',
    },
  },

  // Alert 간격
  alert: {
    padding: '10px 12px',
    marginBottom: '16px',
    gap: '8px',
    titleMargin: '4px',
  },

  // Checkbox 간격
  checkbox: {
    marginRight: '8px',
    marginTop: '2px',
    hintMargin: '2px',
    hintMarginLeft: '24px',
  },
} as const;

