import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'receivedSample'
})
export class ReceivedSamplePipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    //管道逻辑
    return value.filter(x=>x.received==true)
  }

}
