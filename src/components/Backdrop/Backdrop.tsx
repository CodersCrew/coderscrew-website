type BackdropProps = {
  background?: boolean;
  onClick?: () => void;
  zIndex?: number;
};

export const Backdrop = ({
  background,
  onClick,
  zIndex = 40
}: BackdropProps) => (
  <span
    className={`fixed inset-0 ${background ? 'bg-tetriary/50' : ''}`}
    onClick={onClick}
    style={{ zIndex }}
  />
);
