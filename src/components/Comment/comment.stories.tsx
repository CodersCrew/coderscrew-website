import { CommentTextData } from '@common/testData';
import { Comment, CommentProps } from '@components/Comment';
import { Story } from '@storybook/react';
import { ReactNode } from 'react';

export default {
  title: 'Comment',
  component: Comment,
  decorators: [(story: () => ReactNode) => <div style={{ width: '580px', height: '328px' }}>{story()}</div>]
};

const Template: Story<CommentProps> = (args) => <Comment {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: CommentTextData.text,
  name: CommentTextData.name
};
