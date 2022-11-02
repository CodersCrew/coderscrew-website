import React from 'react';

import { Hexagon } from '../Hexagon';

export type CommentProps = { text: string; name: string };

export const Comment = ({ text, name }: CommentProps) => (
  <div className="bg-white flex h-full w-full flex-col items-center gap-5 rounded py-8 shadow-md" data-testid="comment">
    <div className="h-13 w-13">
      <Hexagon variant="default" primaryColor="quaternary" secondaryColor="quaternary" icon opacity={10} />
    </div>
    <p className="px-14 text-center text-base font-semibold text-primary">{text}</p>
    <p className="text-secondary">
      - <span className="font-normal">{name}</span>
    </p>
  </div>
);
