import { colors } from '../../components/Hexagon/lookup';
import { GuildCard, GuildCardProps } from './GuildCard';

export type GuildsListContainerProps = {
  onClick: GuildCardProps;
  guilds: GuildCardProps[];
};

export const GuildsListContainer = ({ onClick, guilds }: GuildsListContainerProps) => {
  const delayTime = Number(getComputedStyle(document.documentElement).getPropertyValue('--guildCard-delay'));

  return (
    <ul className="no-scrollbar relative flex flex-col gap-14 overflow-y-scroll">
      {guilds.map(({ secondaryColor, label, text }, index) => (
        <div
          key={label}
          style={{ animationDelay: `${index * delayTime}ms` }}
          className="card-box animate-appear opacity-0"
        >
          <GuildCard
            onClick={onClick}
            variant="default"
            primaryColor="white"
            secondaryColor={secondaryColor as keyof typeof colors}
            opacity={100}
            label={label}
            text={text}
            key={label}
          />
          <div className="card-line absolute left-21 mt-2 h-10 w-[1px] bg-gradient-to-b from-[#878788] via-[#383838] to-[#292929] shadow-md" />
        </div>
      ))}
    </ul>
  );
};
