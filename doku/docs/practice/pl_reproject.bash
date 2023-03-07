#!/bin/bash
find . -name 'las_*.laz' | while read file;
do
    echo "Processing $file"
    pdal pipeline --readers.las.filename=$file --writers.las.filename=./$(basename $file .laz)_c.laz pl_reproject_crop.json    
done