export const helloVoid = (): void => {
  alert("test");
};
export const helloError = (str: string) => {
  // Intentional Error for Error Handling Demonstration
  //@ts-ignore
  str = strr;
};

export const helloStr = (str: string) => {
  alert(`ExtendScript received a string: ${str}`);
  return (str.toUpperCase()+'  '+'text');
};
export const helloNum = (n: number) => {
  alert(`ExtendScript received a number: ${n.toString()}`);
  return n;
};
export const helloArrayStr = (arr: string[]) => {
  alert(
    `ExtendScript received an array of ${arr.length} strings: ${arr.toString()}`
  );
  return arr;
};
export const helloObj = (obj: { height: number; width: number }) => {
  alert(`ExtendScript received an object: ${JSON.stringify(obj)}`);
  let a: number= obj.height *2;
  let n: number= obj.width *3;
  //   const retnObj = {
  //     height: y, 
  //     width: x,
  //   } 

  return {
   rHeight: a,
   rWidth: n,
  };
};
