import { contentApi } from '@/services';

const Test = ({ test }: { test: string }) => <p>{test}</p>;

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const test = await contentApi.fetchText({ locale, resourceName: 'test' });

  return {
    props: {
      test
    }
  };
};

export default Test;
