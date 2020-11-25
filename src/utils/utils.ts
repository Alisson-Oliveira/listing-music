export const _TIME = (duraction: number): string => {
  const segundos = duraction / 1000;
  
  const minutos = segundos / 60;
  
  const horas = minutos / 60;
  
  return _TIME_format(`${horas}:${minutos}:${segundos}`); 
}

const _TIME_format = (time: string): string => {
  const array: string[] = [];

  const arrayTime = time.split(':');
  
  arrayTime.forEach(number => {
    if (parseInt(number.split('.')[0]) < 10) {
      array.push(`0${parseInt(number.split('.')[0])}`);
    } else {
      array.push(`${parseInt(number.split('.')[0])}`);
    }
  });

  return `${array[0]}:${array[1]}:${array[2]}`;
}