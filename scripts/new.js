const makeDir = require('make-dir');
var createFile = require('create-file');

const params = process.argv.slice(2)
console.log(params[0])

async function createFolder(props) {
    const path = await makeDir('./components/Gallery');
    console.log(path);
    return path;
}

let page = `import React from "react";
import { Box } from '@chakra-ui/react';

import { Container } from '#layout'

const ${params[1]} = (props) => {

	return(
		<Container>

		</Container>
	);
}

export default ${params[1]};

`;

async function createFileMain(props) {
    console.log(props)
    createFile(`./components/${props.name}/index.js`, page, function(err) {
        // file either already exists or is now created (including non existing directories)
    });
}

if (params[0] === 'component') {

    console.log('creating component')

    let data = {
        name: params[1]
    }

    const start = async () => {
        console.log('creating folder')
        let name = await createFileMain(data);
    }

    start();

}

if (params[0] === 'api') {
    console.log('creating an api')
}