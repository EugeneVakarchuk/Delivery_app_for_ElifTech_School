declare global {
	namespace NodeJS {
		interface ProcessEnv {
			API_URL: string;
			SERVER_URL: string;
		}
	}
}
export {};
