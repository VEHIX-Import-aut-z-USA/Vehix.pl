#!/bin/bash

for file in *.webp; do
  newname=$(echo "$file" | tr '[:upper:]' '[:lower:]' | sed -E 's/[()]+//g' | sed -E 's/[ ]+/-/g' | sed -E 's/--+/-/g')
  mv "$file" "$newname"
  echo "$file => $newname"
done

