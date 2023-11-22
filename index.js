import inquirer from 'inquirer';
import qr from "qr-image"
import fs from "fs"

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            "message": "Type in URl: ",
            "name": "URL"
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        // console.log(answers)
        const url = answers.URL
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));

        
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

