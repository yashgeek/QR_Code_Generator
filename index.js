import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            message: 'Type in URL: ',
            name: 'URL',
        },
    ])
    .then((answers) => {
        const url = answers.URL;

        // Generate QR code
        const qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));

        // Save URL to a text file
        fs.writeFile('URL.txt', url, (err) => {
            if (err) throw err;
            console.log('The URL has been saved to URL.txt');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error('Prompt couldn\'t be rendered in the current environment');
        } else {
            console.error('Something else went wrong');
        }
    });
