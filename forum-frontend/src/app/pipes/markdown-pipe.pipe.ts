import { Pipe, PipeTransform } from '@angular/core';
import {marked} from "marked";

@Pipe({
  name: 'markdownPipe'
})
export class MarkdownPipePipe implements PipeTransform {

  transform(value: string): string {
    return marked(value);
  }

}
