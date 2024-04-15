import { Film } from '../types';
import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class FilmService {
	constructor(private httpService: HttpService) {}

	private async getFilmsInfo(id: string): Promise<Film> {
		const response = await this.httpService.get<Film>(`films/${id}`);

		return response;
	}

	public async getFilms(ids: Array<string>): Promise<Array<Film>> {
		const promises = ids?.map((id) => this.getFilmsInfo(id));

		return await Promise.all(promises);
	}
}

const factory = new HttpFactoryService();

export const filmService = new FilmService(factory.createHttpService());
