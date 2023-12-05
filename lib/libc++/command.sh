#!/bin/bash

if [ "$#" -lt 1 ]; then
    echo "Usage: $0 <input_string>"
    exit 1
fi

input_string="$1"
hash_result=$(./my_program "$input_string")

echo "$hash_result"
