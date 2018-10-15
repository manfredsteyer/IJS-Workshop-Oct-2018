import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'location',
  pure: true
})
export class LocationPipe implements PipeTransform {

  transform(value: string, fmt: string): string {
    
    let short;
    let long;

    switch(value) {
      case "Graz":
        short = 'GRZ';
        long = 'Flughafen Graz-Thalerhof';
        break;
      case "Hamburg":
        short = 'HAM';
        long = 'Airport Hamburg International -- Helmut Schmidt';
        break;
      case "Bremen":
        short = 'BRE';
        long = 'Airport Bremen -- Manfred Steyer';
        break;
      default:
        short = long = value;
    }

    if (fmt === 'short') return short;
    return long;

  }

}
