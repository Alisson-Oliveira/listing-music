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



export const _COUNTER = (duraction: number): number => {
  const counter = duraction.toString().split('.');

  return Number.parseInt(counter[0]);
}

const _TIME_COUNTER = (duraction: number): number => {
  const arrayTime = duraction.toString().split(':');

  const segundos = Number.parseInt(arrayTime[0]);
  const minutos = Number.parseInt(arrayTime[1]) * 60;

  return minutos + segundos;
}



// export const fullTimer = (timer: number): string => {
//   const fullTimer = _TIME(timer);

//   const responseTimer = secondFormat(fullTimer);
// }; 

export const secondFormat = (timer: string): string => {
  const arrayTime = timer.split(':')[2];

  const array = arrayTime.toString().split('.');

  return `${array[0]}${array[1]}`;
}