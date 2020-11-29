export const TIMER = (duraction: number): string => {
  const segundos = duraction / 1000;
  
  const minutos = segundos / 60;
  
  const horas = minutos / 60;
  
  return TIMER_FORMATED(`${horas}:${minutos}:${segundos}`); 
};

const TIMER_FORMATED = (time: string): string => {
  const array: string[] = [];

  const arrayFormated = TIME_FORMAT(time);

  const arrayTime = arrayFormated.split(':');

  arrayTime.forEach(number => {
    if (parseInt(number.split('.')[0]) < 10) {
      array.push(`0${parseInt(number.split('.')[0])}`);
    } else {
      array.push(`${parseInt(number.split('.')[0])}`);
    }
  });

  return `${array[0]}:${array[1]}:${array[2]}`;
};

const TIME_FORMAT = (duraction: string) => {
  const array = duraction.split(':');

  const minutos = parseInt(array[1]);

  const converted = parseInt(array[2]) - 60 * minutos;

  return `${array[0]}:${array[1]}:${converted}`;
};

export const COUNTER = (duraction: number): number => {
  const counter = duraction.toString().split('.');

  return Number.parseInt(counter[0]);
};