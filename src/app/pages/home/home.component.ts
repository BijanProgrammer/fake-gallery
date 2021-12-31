import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {Photo} from '../../models/photo';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public photos: Photo[] = [];

    public constructor(private changeDetectorRef: ChangeDetectorRef, private photoService: PhotoService) {}

    public async ngOnInit(): Promise<void> {
        await this.updatePhotos();
    }

    public async updateButtonClickHandler(): Promise<void> {
        await this.updatePhotos();
    }

    private async updatePhotos(): Promise<void> {
        this.photos = [];
        this.changeDetectorRef.detectChanges();

        this.photos = await this.photoService.getAllPhotos();
    }
}
