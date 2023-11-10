import React from 'react';
import { FieldError } from 'react-hook-form';

import GreenCheck from '@/assets/form-green-check.svg';
import RedCross from '@/assets/form-red-cross-error.svg';

export function FieldStateIndicator({
  error,
  dirty,
  className
}: {
  error: FieldError;
  dirty?: boolean;
  className?: string;
}) {
  if (dirty === undefined && !error)
    return <RedCross className={`${className} invisible`} />;
  return dirty && !error ? (
    <GreenCheck className={className} />
  ) : (
    <RedCross className={className} />
  );
}
