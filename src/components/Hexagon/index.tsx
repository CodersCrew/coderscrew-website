import { Icon } from '../Icon';
import { colors, dropShadowColors, opacities } from './lookup';

const variants = ['default', 'shadow'] as const;

export type HexagonProps = {
  variant: typeof variants[number];
  primaryColor: keyof typeof colors;
  secondaryColor?: keyof typeof colors;
  opacity: keyof typeof opacities;
  icon?: boolean;
};

export const Hexagon = ({ variant, primaryColor, secondaryColor, opacity, icon, ...props }: HexagonProps) => {
  const colorClass = colors[primaryColor];
  const opacityClass = opacities[opacity];
  const iconColorClass = secondaryColor && colors[secondaryColor];
  const dropShadowColorClass = secondaryColor && dropShadowColors[secondaryColor];

  const variantClasses = {
    shadow: dropShadowColorClass,
    default: ''
  };

  return (
    <div className={`h-full w-full ${variantClasses[variant]}`}>
      <div
        className={`relative h-full w-full clip-path-hexPolygon ${colorClass} ${opacityClass} rotate-90`}
        data-testid="hexagon"
        {...props}
      >
        {!!icon && (
          <div className="caption absolute top-1/2 flex w-full -translate-y-1/2 -rotate-90 items-center justify-center">
            <Icon color={iconColorClass} />
          </div>
        )}
      </div>
    </div>
  );
};
