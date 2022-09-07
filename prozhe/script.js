console.log(1);
function consoleLog() {
  setTimeout(() => {
    console.log("2");
  }, 1000);
}

async function logger() {
  await consoleLog();
}
logger();
console.log(3);
