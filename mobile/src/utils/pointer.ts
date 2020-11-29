export const POINTER = (duraction: number): string => {
  const segundos = duraction / 1000;
  
  const minutos = segundos / 60;
  
  const horas = minutos / 60;
  
  return POINTER_FORMAT(`${horas}:${minutos}:${segundos}`); 
}

export const POINTER_FULL = (duraction: string): number => {
  const timeFull = duraction.split(':');

  const horas = parseInt(timeFull[0]) * 3600;

  const minutos = parseInt(timeFull[1]) * 60;

  const segundos = parseInt(timeFull[2]);

  const total = horas + minutos + segundos;

  return total; 
}

const POINTER_FORMAT = (timer: string): string => {
  const array: string[] = [];

  const arrayTime = timer.split(':');
  
  arrayTime.forEach(number => {
    if (parseInt(number.split('.')[0]) < 10) {
      array.push(`0${parseInt(number.split('.')[0])}`);
    } else {
      array.push(`${parseInt(number.split('.')[0])}`);
    }
  });

  const second = POINTER_FORMAT_SECOND(array[2]);

  return `${array[0]}:${array[1]}:${second}`;
}

const POINTER_FORMAT_SECOND = (second: string): string => {
  const caracter = second.split('');

  return `${caracter[0]}${caracter[1]}`;
}