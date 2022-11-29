#!/bin/bash

function pause(){
   read -p "$*"
}

node server.js

pause 'Press [Enter] key to continue...'