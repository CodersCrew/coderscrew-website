import React from 'react';

import { Hexagon } from '../Hexagon';

export type CommentProps = { text: string; name: string };

export const Comment = ({ text, name }: CommentProps) => {
  return (
    <div
      className="flex h-full w-full flex-col items-center gap-5 rounded bg-white py-8 shadow-md"
      data-testId="comment"
    >
      <div className="h-13 w-13">
        <Hexagon variant="default" primaryColor="blue" secondaryColor="blue" icon opacity={10} />
      </div>
      <p className="px-[60px] text-center text-base font-semibold text-primary">{text}</p>
      <p className="text-secondary">
        - <span className="font-normal">{name}</span>
      </p>
    </div>
  );
};
