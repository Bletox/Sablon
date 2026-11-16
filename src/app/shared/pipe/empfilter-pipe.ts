import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'empfilter',
})
export class EmpfilterPipe implements PipeTransform {
  transform(employees: any[], filter: { name: string, city: string }): any {
    if (!employees || (!filter.name && !filter.city)) {
      return employees
    }
    return employees.filter(emp => {
      return (
        (!filter.name || emp.name.toLowerCase()
        .includes(filter.name.toLowerCase()))
        &&
        (!filter.city || emp.city.toLowerCase()
        .includes(filter.city.toLowerCase()))
      )}
    );
  }
}
