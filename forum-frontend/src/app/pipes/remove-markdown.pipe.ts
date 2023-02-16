import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeMarkdown'
})
export class RemoveMarkdownPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.replace(/[^a-zA-Z0-9,:;\-.?! ]/g, '')
  }

}
