import { gql } from 'graphql-request';

import { hygraphClient } from '@/lib';

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
