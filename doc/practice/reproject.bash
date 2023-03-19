#!/bin/bash
find . -name 'las_*.laz' | while read file;
do    
    pdal translate $file ./$(basename $file .laz)_ps.laz reprojection --filters.reprojection.in_srs="EPSG:25832" --filters.reprojection.out_srs="EPSG:3857"
done