import { ErrorBoundary } from './components/ErrorBoundary';
import { Layout } from './components/layout/Layout';
import { Router } from './components/router/Router';

export default function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Router />
      </Layout>
    </ErrorBoundary>
  );
}