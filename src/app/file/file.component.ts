import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  text$: Promise<string>;

  constructor(private textService: TextService) {
  }

  ngOnInit() {
    this.text$ = this.textService.getMockText();
  }
}
