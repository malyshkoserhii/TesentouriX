import { HttpClient, HttpConfig, Map, Response } from '../types';

import { BASE_URL } from '@env';

export class HttpService {
	constructor(
		private fetchingService: HttpClient,
		private baseUrl = BASE_URL,
	) {}

	public createQueryLink(base: string, args: Map) {
		let url = `${base}?`;
		Object.keys(args).forEach((parameter, index) => {
			if (args[parameter]) {
				url =
					url +
					`${index > 0 ? '&' : ''}${parameter}=${args[parameter]}`;
			}
		});
		return url;
	}

	public async get<T>(url: string, config?: HttpConfig) {
		return this.fetchingService
			.get<Response<T>>(this.getFullApiUrl(url), {
				...config,
				headers: {
					...config?.headers,
					...this.populateContentTypeHeaderConfig(),
				},
			})
			.then((result) => {
				this.checkResponseStatus(result);
				return result.data;
			});
	}

	public async post<T, D>(url: string, data: D, config?: HttpConfig) {
		return this.fetchingService
			.post<Response<T>, D>(this.getFullApiUrl(url), data, {
				...config,
				headers: {
					...config?.headers,
					...this.populateContentTypeHeaderConfig(),
				},
			})
			.then((result) => {
				this.checkResponseStatus(result);
				return result.data;
			});
	}

	public put<T, D>(url: string, data: D, config?: HttpConfig) {
		return this.fetchingService
			.put<Response<T>, D>(this.getFullApiUrl(url), data, {
				...config,
				headers: {
					...config?.headers,
					...this.populateContentTypeHeaderConfig(),
				},
			})
			.then((result) => {
				this.checkResponseStatus(result);
				return result.data;
			});
	}

	public patch<T, D>(url: string, data: D, config?: HttpConfig) {
		return this.fetchingService
			.patch<Response<T>, D>(this.getFullApiUrl(url), data, {
				...config,
				headers: {
					...config?.headers,
					...this.populateContentTypeHeaderConfig(),
				},
			})
			.then((result) => {
				// this.checkResponseStatus(result);
				return result.data;
			});
	}

	public delete<T>(url: string, config?: HttpConfig) {
		return this.fetchingService
			.delete<Response<T>>(this.getFullApiUrl(url), {
				...config,
				headers: {
					...config?.headers,
					...this.populateContentTypeHeaderConfig(),
				},
			})
			.then((result) => {
				// this.checkResponseStatus(result);
				return result.data;
			});
	}

	public populateContentTypeHeaderConfig() {
		return {
			'Content-Type': 'application/json',
		};
	}

	private getFullApiUrl(url: string) {
		return `${this.baseUrl}/${url}`;
	}

	private checkResponseStatus<T>(result: Response<T>) {
		if (result.status >= 400 && result.status < 600) {
			const errorData = {
				response: {
					status: result.status,
					data: result.data,
				},
			};

			throw new Error(JSON.stringify(errorData));
		}
	}
}
