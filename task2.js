import csv from 'csvtojson';
import { appendFile } from 'fs';

const csvFilePath='./csv/nodejs-hw1-ex1.csv';

csv({ output: "json" })
    .fromFile(csvFilePath)
    .subscribe((jsonObjLine)=>{
            appendFile("resultLineByLine.txt", JSON.stringify(jsonObjLine) + '\n', function(error) {
                if (error) {
                    console.error(error);
                }
            });
    }, (error) => console.error(error.message), () => console.log('success') 
);
