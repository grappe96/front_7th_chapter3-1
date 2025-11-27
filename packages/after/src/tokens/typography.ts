/**
 * 디자인 시스템 타이포그래피 토큰
 * 폰트 패밀리, 크기, 두께 등 타이포그래피 관련 값
 */

export const typography = {
  // 폰트 패밀리
  fontFamily: {
    sans: 'Arial, sans-serif',
    system: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    mono: 'monospace',
  },

  // 폰트 크기
  fontSize: {
    xs: '12px',
    sm: '13px',
    base: '14px',
    md: '15px',
    lg: '16px',
    xl: '18px',
    '2xl': '20px',
    '3xl': '24px',
    '4xl': '28px',
  },

  // 폰트 두께
  fontWeight: {
    normal: 'normal',
    medium: '500',
    bold: 'bold',
  },

  // 라인 높이
  lineHeight: {
    tight: '1',
    normal: '1.4',
    relaxed: '1.5',
    loose: '1.6',
    extraLoose: '1.43',
  },

  // 컴포넌트별 폰트 크기
  component: {
    button: {
      sm: '13px',
      md: '14px',
      lg: '15px',
    },
    form: {
      label: '13px',
      input: '14px',
      helper: '12px',
      textarea: '16px',
    },
    badge: {
      small: '0.625rem',
      medium: '0.75rem',
      large: '0.8125rem',
    },
    card: {
      title: '1.125rem',
      subtitle: '0.875rem',
    },
    alert: {
      title: '15px',
      body: '14px',
      icon: '20px',
    },
    table: {
      header: '0.75rem',
      body: '0.875rem',
    },
    modal: {
      title: '1.25rem',
      close: '28px',
    },
  },
} as const;

