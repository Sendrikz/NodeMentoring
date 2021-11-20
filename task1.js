process.stdin.on('data', data => {
    let reversedStr = data.toString().split('').reverse().join('');
    process.stdout.write(reversedStr + '\n');
});