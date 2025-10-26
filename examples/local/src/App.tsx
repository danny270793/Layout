import type { ReactNode } from 'react';
import { Layout } from '@danny270793/layout';
import '@danny270793/layout/dist/index.css';

export const App = (): ReactNode => {
  return (
    <Layout>
      <Layout.Header className="bg-red-500">
        <h1>App bar</h1>
      </Layout.Header>
      <Layout.Content className="bg-blue-500">
        {Array.from({ length: 100 }).map((_, index) => (
          <h1 key={index}>item {index + 1}</h1>
        ))}
      </Layout.Content>
      <Layout.Footer className="bg-green-500">
        <h1>Footer</h1>
      </Layout.Footer>
    </Layout>
  );
};
