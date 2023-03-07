Get-ChildItem las_*.laz | foreach { pdal pipeline --readers.las.filename=.\$($_.BaseName).laz 
--writers.las.filename=.\$($_.BaseName)_c.laz pl_reproject_crop.json}