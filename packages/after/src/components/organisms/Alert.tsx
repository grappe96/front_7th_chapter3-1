import React from 'react';
import { Button } from '../ui/button';

// Alert - Different styling approach with inconsistent variants
interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error' | 'default';
  title?: string;
  onClose?: () => void;
  showIcon?: boolean;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'default',
  title,
  onClose,
  showIcon = true,
}) => {
  const getIcon = () => {
    switch (variant) {
      case 'info':
        return 'ℹ️';
      case 'success':
        return '✓';
      case 'warning':
        return '⚠️';
      case 'error':
        return '✕';
      default:
        return '•';
    }
  };

  const alertClasses = ['alert', `alert-${variant}`].join(' ');

  return (
    <div className={alertClasses}>
      {showIcon && <div className="alert-icon">{getIcon()}</div>}
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-body">{children}</div>
      </div>
      {onClose && (
        <Button
          variant="ghost"
          size="sm"
          className="h-auto p-1 text-xl font-normal ml-auto flex-shrink-0 hover:bg-transparent"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </Button>
      )}
    </div>
  );
};
