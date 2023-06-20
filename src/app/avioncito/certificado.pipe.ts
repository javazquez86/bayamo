import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'certificado'
})
export class CertificadoPipe implements PipeTransform {

  transform(codigo: number): string {
    if (codigo >= 0 && codigo <= 3) {
      return 'Insegura';
    } else if (codigo >= 4 && codigo <= 7) {
      return 'Segura';
    } else if (codigo > 7) {
      return 'Confiable';
    } else {
      return 'Código no válido';
    }
  }

}
