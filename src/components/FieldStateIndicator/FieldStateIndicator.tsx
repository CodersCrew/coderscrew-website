import React from 'react';
import { FieldError } from 'react-hook-form';

import GreenCheck from '@/assets/form-green-check.svg';
import RedCross from '@/assets/form-red-cross-error.svg';

export function FieldStateIndicator({
  error,
  touched,
  className
}: {
  error: FieldError;
  touched?: boolean;
  className?: string;
}) {
  console.log({ error, touched });
  if (touched === undefined) return null;
  return !error ? (
    <GreenCheck className={className} />
  ) : (
    <RedCross className={className} />
  );
}
