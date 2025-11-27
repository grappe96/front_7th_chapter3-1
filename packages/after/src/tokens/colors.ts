/**
 * 디자인 시스템 색상 토큰
 * 하드코딩된 색상 값을 중앙에서 관리
 */

export const colors = {
  // Primary 색상
  primary: {
    50: '#e3f2fd',
    100: '#bbdefb',
    500: '#1976d2',
    600: '#1565c0',
    900: '#0d47a1',
  },

  // Secondary 색상
  secondary: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e0e0e0',
    300: '#ddd',
    400: '#bdbdbd',
    500: '#757575',
    600: '#666',
    700: '#424242',
    800: '#333',
    900: '#000',
  },

  // Danger 색상
  danger: {
    50: '#ffebee',
    100: '#ffcdd2',
    500: '#d32f2f',
    600: '#c62828',
    700: '#b71c1c',
  },

  // Success 색상
  success: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    500: '#388e3c',
    600: '#2e7d32',
    700: '#1b5e20',
  },

  // Warning 색상
  warning: {
    50: '#fff3e0',
    100: '#ffe0b2',
    500: '#f57c00',
    600: '#e65100',
  },

  // Info 색상
  info: {
    50: '#e3f2fd',
    100: '#bbdefb',
    500: '#0288d1',
    600: '#0d47a1',
  },

  // 기본 색상
  base: {
    white: '#fff',
    black: '#000',
    transparent: 'transparent',
  },

  // Alert 배경색
  alert: {
    info: {
      bg: '#e3f2fd',
      border: '#90caf9',
      text: '#0d47a1',
    },
    success: {
      bg: '#e8f5e9',
      border: '#81c784',
      text: '#1b5e20',
    },
    warning: {
      bg: '#fff3e0',
      border: '#ffb74d',
      text: '#e65100',
    },
    error: {
      bg: '#ffebee',
      border: '#e57373',
      text: '#b71c1c',
    },
    default: {
      bg: '#f5f5f5',
      border: '#bdbdbd',
      text: '#424242',
    },
  },

  // Form 색상
  form: {
    border: '#ccc',
    borderFocus: '#1976d2',
    borderError: '#d32f2f',
    background: '#fff',
    backgroundDisabled: '#f5f5f5',
    text: '#000',
    textLabel: '#333',
    textHelper: '#666',
    textError: '#d32f2f',
  },

  // Table 색상
  table: {
    headerBg: '#fafafa',
    headerText: 'rgba(0, 0, 0, 0.6)',
    bodyText: 'rgba(0, 0, 0, 0.87)',
    border: 'rgba(0, 0, 0, 0.12)',
    borderLight: 'rgba(0, 0, 0, 0.08)',
    stripedBg: '#fafafa',
    hoverBg: 'rgba(0, 0, 0, 0.04)',
  },

  // Modal 색상
  modal: {
    overlay: 'rgba(0, 0, 0, 0.5)',
    background: '#fff',
    border: 'rgba(0, 0, 0, 0.12)',
    text: 'rgba(0, 0, 0, 0.87)',
    textSecondary: 'rgba(0, 0, 0, 0.54)',
  },

  // Card 색상
  card: {
    background: '#fff',
    backgroundFlat: '#fafafa',
    border: 'rgba(0, 0, 0, 0.12)',
    borderLight: 'rgba(0, 0, 0, 0.08)',
    text: 'rgba(0, 0, 0, 0.87)',
    textSecondary: 'rgba(0, 0, 0, 0.6)',
  },

  // Checkbox 색상
  checkbox: {
    border: '#d1d5db',
    checked: '#1976d2',
    text: '#374151',
    textError: '#ef4444',
    textHint: '#6b7280',
  },
} as const;

