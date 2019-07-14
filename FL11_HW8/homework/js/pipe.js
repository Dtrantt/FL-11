const addOne = x => x + 1;

const pipe = (x, ...args) => {
    for(let i = 0; i < args.length; i++) {
        x = args[i](x);
    }

    return x;
}

  console.log(pipe(1, addOne));
  console.log(pipe(1, addOne, addOne));