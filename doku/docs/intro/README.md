# Einführung

## 1. Software Installation

- [QGIS Version >= 3.28](https://qgis.org/de/site/forusers/download.html)
- [Conda Package Management System](https://docs.conda.io/en/latest/miniconda.html)

::: info 
[Update Skript für OSGeo Live 15](./setup.sh)
::: 

- [PDAL](https://pdal.io/en/latest/)
  ::: details PDAL Installation in Conda
   ```bash
  # Conda aktualisieren
  conda update conda
  # Environment anlegen
  conda create --name pdal
  # Environment aktivieren
  conda activate pdal
  # PDAL latest
  conda install -c conda-forge pdal python-pdal gdal
  ```
  :::

Ein Texteditor wie z. B. [nano](https://www.nano-editor.org/dist/latest/nano.html) oder [Visual Studio Code](https://code.visualstudio.com/) wird für die Bearbeitung der JSON-Dateien benötigt.

## 2. Workshop Daten

Bitte entpacke das Archiv [pdal-ws.zip](https://cloud.bayceer.uni-bayreuth.de/index.php/s/DErPUXFceXZlcfE/download) nach:

```bash 
# Linux
/home/user/pdal-ws

# Windows
C:\Users\<NAME>\Documents\pdal-ws
```

__Datenquelle und Lizenz__

Freistaat Thüringen, Landesamt für Bodenmanagement und Geoinformation, [Geoportal-Th.de](https://www.geoportal-th.de/de-de/Downloadbereiche/Download-Offene-Geodaten-Th%C3%BCringen), bereitgestellt unter der „Datenlizenz Deutschland – Namensnennung – Version 2.0" verfügbar unter [http://www.govdata.de/dl-de/by-2-0](http://www.govdata.de/dl-de/by-2-0), zuletzt abgerufen am 16.02.2023


::: info
Detaillierte Informationen zum LAS-Format findest du in der [LAS Format Definition](https://www.asprs.org/wp-content/uploads/2019/07/LAS_1_4_r15.pdf) 
::: 

## 3. Visualisieren von Punktwolkendaten in QGIS
__[Working with Point Clouds](https://docs.qgis.org/3.28/en/docs/user_manual/working_with_point_clouds/point_clouds.html#)__
+ QGIS starten
+ Project als 'PDAL-WS' in WS-Ordner speichern
+ Datei sample.laz zur Karte hinzufügen
+ Layer Properties aufrufen 
+ Tab Symbology aufrufen
+ Dialog zeigt die Standard Klassifikation nach Classifaction Attribut
![](./QGIS-tab-symbology-las.png)
+ Tab: Stats aufrufen 
+ Dialog zeigt die Attribute und Classification Statistik 
![](./QGIS-tab-stats-las.png)

__[3D Map View](https://docs.qgis.org/3.28/en/docs/user_manual/map_views/3d_map_view.html)__
+ Neue 3D Kartenansicht anlegen mit Menu 'View/3D Map Views/New 3D Map View' 
+ 3D Map View zeigt Kartenlayer 
+ Configuration öffnen 
+ Shadows aktivieren  
![](./QGIS-3d-view-show-shadows.png)  
+ Zoom out  
+ 3D Map view zeigt shadows 
![](./QGIS-3d-view-las.png)  

::: note
Um das Handling von großen Point Cloud Daten zu verbesseren, erzeugt QGIS beim erstmaligen Lesen einer LAS/LAZ Datei eine sog. [Cloud Optimized Point Cloud Datei](https://mapscaping.com/cloud-optimized-point-clouds-in-qgis/) mit der Endung '*.copc.laz' im Verzeichnis der Originaldatei. Sie dient als Cache und muss zur Zeit noch manuelle gelöscht werden, falls die Originaldatei geändert wird. 
::: 

