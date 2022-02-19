import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startWithIng'
})
export class StartWithIngPipe implements PipeTransform {

  transform(value:string):string {
    return "Ing "+value;
  }

}
