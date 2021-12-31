import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../models/photo';

@Injectable({
    providedIn: 'root',
})
export class PhotoService {
    private readonly BASE_URL = 'https://jsonplaceholder.typicode.com/photos';

    public constructor(private httpClient: HttpClient) {}

    public getAllPhotos(): Promise<Photo[]> {
        return new Promise<Photo[]>((resolve) => {
            this.httpClient.get<Photo[]>(this.BASE_URL).subscribe((photos) => {
                resolve(photos);
            });
        });
    }
}
