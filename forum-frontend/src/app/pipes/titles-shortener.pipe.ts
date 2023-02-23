import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlesShortener',
})
export class TitlesShortenerPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let title = value;
    if (title.length < 30) {
      return title;
    }
    return title.slice(0, 26) + '...';
  }
}
