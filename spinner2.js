let time = 100;
// IF REPEATING ALL FRAMES TWICE
// const frames = ['\r|   ','\r/   ', '\r-   ','\r\\   '];
const frames = ['\r|   ','\r/   ', '\r-   ','\r\\   ', '\r|   ','\r/   ', '\r-   ','\r\\   '];
let flag = false;

for (let i = 0; i < frames.length; i++) {
  setTimeout(() => {
    process.stdout.write(frames[i]);
  }, time);
  time += 200;

  //TO MAKE IT REPEAT ALL FRAMES TWICE

  // if (i === frames.length - 1 && flag === true) {
  //   break
  // } else if (i === frames.length - 1) {
  //   i = 0;
  //   flag = true
  // }
}