import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// Alias for the pages directory
			'@pages': path.resolve(__dirname, './src/pages'),
		},
	},
});
