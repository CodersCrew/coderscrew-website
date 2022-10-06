import { Icon } from '@components/Icon';

import { hexColors, hexOpacity, hexShadowColor, hexVariants } from './lookup';

export interface HexProps {
  color: keyof typeof hexColors;
  opacity: keyof typeof hexOpacity;
  icon?: boolean;
  iconOrShadowColor: keyof typeof hexColors;
  variant: keyof typeof hexVariants;
}

export const Hexagon = ({ color, opacity, icon, iconOrShadowColor, variant, ...props }: HexProps) => {
  const colorClasses = hexColors[color];
  const opacityClasses = hexOpacity[opacity];
  const iconColorClasses = hexColors[iconOrShadowColor];
  const shadowClasses = hexShadowColor[iconOrShadowColor];

  return (
    <div className={`h-full w-full ${hexVariants[variant] === 'withShadow' ? shadowClasses : ''}`}>
      <div
        className={`hexagon relative h-full w-full ${colorClasses} ${opacityClasses}`}
        data-testid="hexagon"
        {...props}
      >
        {!!icon && (
          <div className="caption absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-center">
            <Icon color={iconColorClasses} />
          </div>
        )}
      </div>
    </div>
  );
};
