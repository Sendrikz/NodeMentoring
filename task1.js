import reverse from 'reverse-string';

process.stdin.on('data', data => {
    let reversedStr = reverse(data.toString());
    process.stdout.write(reversedStr + '\n');
});