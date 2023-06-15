import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { SectionWrapper } from '@/components/SectionWrapper';

type PrivacyPolicyProps = {
  content: string;
};

export default function PrivacyPolicy({ content }: PrivacyPolicyProps) {
  const [menuHeadings, setMenuHeadings] = useState<string[]>([]);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('.markdown h2')).map(
      (title, idx) => {
        title.id = `section-${idx}`;
        return title.textContent || '';
      }
    );

    setMenuHeadings(headings);
  }, []);

  return (
    <SectionWrapper className="md:pt-0 lg:pt-0">
      <aside className="fixed bottom-70 top-30 hidden max-w-xl overflow-y-scroll md:block md:w-1/3">
        <div className="mb-10 text-2xl font-semibold">Menu</div>
        {menuHeadings.map((title, index) => (
          <div className="mb-5" key={index}>
            <a
              className="text-left text-2xl font-semibold"
              href={`#section-${index}`}
            >
              {title}
            </a>
          </div>
        ))}
      </aside>
      <ReactMarkdown className="markdown ml-auto py-10 md:w-1/2 md:bg-grey md:px-5">
        {content}
      </ReactMarkdown>
    </SectionWrapper>
  );
}

export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    'src/assets/markdown',
    'privacy-policy.md'
  );
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(fileContent);

  return {
    props: {
      content
    }
  };
}
