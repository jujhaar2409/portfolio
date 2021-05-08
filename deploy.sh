#!/bin/bash

cd .. && 
cd portfolio &&

npm run export

cd out &&
git init &&
git add . &&
git commit -m "deploy" &&
git branch -m ghpages && 
git push -f https://github.com/jujhaar2409/portfolio.git ghpages && 

cd .. &&
rm -rf out/.git