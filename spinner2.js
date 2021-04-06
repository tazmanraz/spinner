let time = 100;
let frames = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let i = 0; i < frames.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${frames[i]}   `);
  }, time);
  time += 200;
}