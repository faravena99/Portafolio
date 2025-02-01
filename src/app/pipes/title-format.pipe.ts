import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFormat'
})
export class TitleFormatPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    // Reemplaza guiones por espacios y convierte a minúsculas
    const formatted = value.replace(/-/g, ' ').toLowerCase();
    // Convierte la primera letra a mayúscula
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }
}
