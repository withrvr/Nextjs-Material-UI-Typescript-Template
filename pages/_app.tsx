import { AppProps } from 'next/app';
import Head from 'next/head';

import NextNProgress from 'nextjs-progressbar';

import 'styles/globals.css';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import theme from 'styles/theme';
import createEmotionCache from 'lib/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	return (
		<CacheProvider value={emotionCache}>
			{/* progress bar on change in router */}
			<NextNProgress
				color="#24292F"
				startPosition={0.0}
				stopDelayMs={0}
				height={2}
				showOnShallow={true}
			/>

			<Head>
				<title>Default Title</title>
				<link rel="icon" href="/logo.svg" />

				{/* meta tags */}
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />

				<main id="main-content" className="container">
					<Component {...pageProps} />
				</main>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;
