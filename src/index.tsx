/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router } from "@solidjs/router";
import 'solid-devtools';
import "./index.css";
import Home from './pages/Home';
import Search from './pages/Search';
import { init as initSentry, withSentryErrorBoundary } from "@sentry/solid";
import { ErrorBoundary } from 'solid-js';
import { solidRouterBrowserTracingIntegration, withSentryRouterRouting } from "@sentry/solid/solidrouter";

const SentryErrorBoundary = withSentryErrorBoundary(ErrorBoundary);
const SentryRouter = withSentryRouterRouting(Router);

initSentry({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [solidRouterBrowserTracingIntegration()],
    sendDefaultPii: true,
    environment: import.meta.env.MODE,
    enabled: import.meta.env.PROD,
    sampleRate: 0.1,
    tracesSampleRate: 0.1,
});

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

render(
    () => (
        /**
         * @todo Make a proper error page.
         */
        <SentryErrorBoundary fallback={error => ""}>
            <SentryRouter>
                <Route path="/search" component={Search} />
                <Route path="*" component={Home} />
            </SentryRouter>
        </SentryErrorBoundary>
    ),
    root!
);
