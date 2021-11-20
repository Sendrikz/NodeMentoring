import csv from 'csvtojson';
import { createReadStream, createWriteStream } from 'fs';

const csvFilePath='./csv/nodejs-hw1-ex1.csv';

const readStream = createReadStream(csvFilePath);
const writeStream= createWriteStream("./resultPipe.txt", 'utf8')

readStream.pipe(csv({ output: "json" })).pipe(writeStream);
