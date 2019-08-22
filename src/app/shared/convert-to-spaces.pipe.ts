import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(initialText: string, characterToReplace: string): string {
    return initialText.replace(characterToReplace, ' ');
  }

}
