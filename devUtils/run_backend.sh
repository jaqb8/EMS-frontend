#!/bin/bash

dir=`node ./devUtils/getEnvVar.js`
npm run --prefix $dir serve