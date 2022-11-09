import { hygraphClient } from '@lib';
import { gql } from 'graphql-request';

export const fetchText = async ({ locale, resourceName }: { locale: string; resourceName: string }) => {
  const {
    textContent: { text }
  } = await hygraphClient.request(
    gql`
      query TextContent($locale: Locale!, $resourceName: String!) {
        textContent(locales: [$locale], where: { resourceName: $resourceName }) {
          text
        }
      }
    `,
    { locale, resourceName }
  );

  return text;
};
