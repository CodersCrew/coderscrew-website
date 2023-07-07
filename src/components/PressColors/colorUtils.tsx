import React from 'react';

// export const hexToRGB = (hex: string) => {
//     let r = parseInt(hex.substring(0, 2), 16);
//     let g = parseInt(hex.substring(2, 4), 16);
//     let b = parseInt(hex.substring(4, 6), 16);

//     return `${r}, ${g}, ${b}`;
//   };

export const hexToRGB = (hex: string) => {
  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);

  return `${red}, ${green}, ${blue}`;
};
