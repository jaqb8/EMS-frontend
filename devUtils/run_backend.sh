#!/bin/bash

dir=`node ./devUtils/parseEnvVar.js`
npm run --prefix $dir serve
