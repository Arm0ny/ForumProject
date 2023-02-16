import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSlug'
})
export class GetSlugPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value.length < 255){
      return value
    }
    let slug = value.slice(0, 100)

    return slug + '...';
  }

}
