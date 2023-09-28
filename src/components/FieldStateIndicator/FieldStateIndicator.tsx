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
  console.log({ error, dirty });
  if (dirty === undefined && !error) return null;
  return dirty && !error ? (
    <GreenCheck className={className} />
  ) : (
    <RedCross className={className} />
  );
}
