#!/bin/bash

output=$(node /{{name}}/index.js);

echo "$output";
if [[ "$output" =~ "success" ]]
    then
    echo "success";
else
    echo "error";
    exit 1
fi