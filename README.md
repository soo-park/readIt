# READIT #
## An app that reads your page ##
## READIT reads your page and image. ##

## Summary ##

READIT reads given page's image and put it in a text to be read.

## Problem ##

1. Read the image
2. Make use of the image reading data into DOM
3. Save the data for repeated use

## Solution ##

1. using clarifai API
2. using React
3. using React state

## Quote from You ##

READIT is an MVP for image recognition in action.

## How to Get Started ##

Fork the repo, run the shell script given in terminal to fire up the app.

## Customer Quote ##

Customer:
A develper who wants barebone image recognition framework

Quote:
I wanted to try the image recognition, and this repo lets me do that!

## Closing and Call to Action ##

1. Get clarifai token

2. Generate .env file in root

3. in secret.sh, write the following

export CLARIFAI_CLIENT_ID='your ID';
export CLARIFAI_CLIENT_SECRET='your secret';
export CLARIFAI_ACCESS_TOKEN='your token';

"npm install" and run the app to see what it does!