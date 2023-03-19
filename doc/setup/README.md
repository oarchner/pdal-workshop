# Setup

## 1. Software Installation

- [Conda Package Management System](https://docs.conda.io/en/latest/miniconda.html)

::: details PDAL Installation in Conda
  ```bash
conda create --name pdal
conda activate pdal
conda install -c conda-forge pdal python-pdal gdal
```
:::

::: info

Nach Ende des Workshops lässt sich das Environment mit folgendem Befehl entfernen:
```bash
conda env remove --name pdal
``` 
:::

- [QGIS Version >= 3.28](https://qgis.org/de/site/forusers/download.html)


Ein Texteditor wie z. B. [nano](https://www.nano-editor.org/dist/latest/nano.html) oder [Visual Studio Code](https://code.visualstudio.com/) wird für die Bearbeitung der [JSON](https://www.json.org)-Dateien benötigt.

## 2. Workshop Daten

Bitte entpacke das Archiv [pdal-ws.zip](https://cloud.bayceer.uni-bayreuth.de/index.php/s/DErPUXFceXZlcfE/download) nach:
::: tabs

@tab Linux

```bash 
/home/<NAME>/pdal-ws
```

@tab Windows

```bash
C:\Users\<NAME>\Documents\pdal-ws
```

:::


__Datenquelle und Lizenz__   
Freistaat Thüringen, Landesamt für Bodenmanagement und Geoinformation, [Geoportal-Th.de](https://www.geoportal-th.de/de-de/Downloadbereiche/Download-Offene-Geodaten-Th%C3%BCringen), bereitgestellt unter der „Datenlizenz Deutschland – Namensnennung – Version 2.0" verfügbar unter [http://www.govdata.de/dl-de/by-2-0](http://www.govdata.de/dl-de/by-2-0), zuletzt abgerufen am 16.02.2023
