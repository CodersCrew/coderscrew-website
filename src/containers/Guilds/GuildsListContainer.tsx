import { colors } from '../../components/Hexagon/lookup';
import { GuildCard, GuildCardProps } from './GuildCard';

export type GuildsListContainerProps = {
  openModal: (id: string) => void;
  guilds: GuildCardProps[];
};

export const GuildsListContainer = ({ openModal, guilds }: GuildsListContainerProps) => {
  const delayTime = Number(getComputedStyle(document.documentElement).getPropertyValue('--guildCard-delay'));

  return (
    <div className="flex items-center justify-center">
      <div className="no-scrollbar flex h-max flex-col items-center overflow-y-scroll lg:my-20">
        {guilds.map(({ primaryColor, secondaryColor, label, text, id, onIconDownClick, onIconUpClick }, index) => (
          <div
            key={label}
            style={{ animationDelay: `${index * delayTime}ms` }}
            className="card-box group animate-appear opacity-0"
          >
            <GuildCard
              id={id}
              onClick={() => openModal(id)}
              onIconDownClick={onIconDownClick}
              onIconUpClick={onIconUpClick}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor as keyof typeof colors}
              label={label}
              text={text}
              key={label}
            />
            <div className="card-line ml-[50%] mt-2 h-10 w-[1px] bg-gradient-to-b from-[#878788] via-[#383838] to-[#292929] shadow-md group-last:hidden md:ml-21" />
          </div>
        ))}
      </div>
    </div>
  );
};
