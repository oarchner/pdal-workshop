# Praxis

## Starten der Umgebung

a. Starten der Kommandozeile durch Aufruf der Conda Konsole aus dem Startmenü  
b. Aktivieren des pdal Environments

```bash
conda activate pdal
```

c. Wechsel in das WS-Verzeichnis
::: tabs  
 @tab Linux

```bash
cd /home/<NAME>/pdal-ws
```

@tab Windows

```bash
cd c:\Users\<NAME>\Documents\pdal-ws
```

:::
d. PDAL Anwendung starten

```bash
# Usage anzeigen
pdal
# Version ausgeben
pdal --version
```

## Anwendungen

::: info
Bei allen Anwendungen kann der Log-Level zur Steuerung der Log-Meldungen in der Konsole über das Flag -v [0-8] gesetzt werden.
:::

### Info

a. Ausgabe des ersten Punktes

```bash
pdal info sample.laz -p 0
```

::: info
Die Werte der Dimension Classification sind in der [LAS-Format Definition](https://www.asprs.org/wp-content/uploads/2019/07/LAS_1_4_r15.pdf) der American Society for Photogrammetry & Remote Sensing (ASPRS) wie folgt definiert:

| Wert  | Meaning                       |
| ----- | ----------------------------- |
| 0     | Created, Never Classified     |
| 1     | Unclassified2                 |
| 2     | Ground                        |
| 3     | Low Vegetation                |
| 4     | Medium Vegetation             |
| 5     | High Vegetation               |
| 6     | Building                      |
| 7     | Low Point (Noise)             |
| 8     | Model Key-Point (Mass Point)  |
| 9     | Water                         |
| 10    | Reserved for ASPRS Definition |
| 11    | Reserved for ASPRS Definition |
| 12    | Overlap Points3               |
| 13-31 | Reserved for ASPRS Definition |

:::

### Merge

a. Vereinigen von mehreren Dateien zu einer Datei

```bash
# Achtung: Dieses Commando dauert ein paar Sekunden ...
pdal merge las_a_2014.laz las_b_2014.laz las_c_2014.laz las_d_2014.laz merge2014.laz
```

### Pipeline

a. Alle vorhandenen Stages auflisten

```bash
pdal --drivers
```

b. Kleinste mögliche Pipeline `pl_hello.json`:
@[code](./pl_hello.json)
c. Pipeline Start:

```bash
pdal pipeline pl_hello.json
```

d. Pipeline Start mit Überschreiben der Reader- und Writer-Stage

```bash
pdal pipeline --readers.las.filename=sample.laz --writers.las.filename=sample2.laz pl_hello.json
```

### Translate

a. Dateiformatkonvertierung

```bash
pdal translate sample.laz sample.las
```

b. Filteraufruf mit Argumenten

```bash
# LAS Writer mit Option zum Setzen des CRS
pdal translate sample2.laz sample2_utm.laz --writers.las.a_srs="EPSG:25832"
```

c. Aufruf einer Pipeline-Datei mit Überschreiben von Ein- und Ausgabedatei

```bash
pdal translate --json pl_hello.json sample.laz sample2.laz
```

## Stapelverarbeitung

Point Cloud Daten werden aufgrund ihrer Größe oft in mehrere kleine Dateien aufgeteilt. Skripts zur Stapelverarbeiung helfen uns unserer Arbeitsschritte zu automatisieren.

Das folgende Skript ruft die [Translate-Anwendung](#translate) für mehrere Dateien im Verzeichnis auf und führt einen [Reproject](https://pdal.io/en/latest/stages/filters.reprojection.html) durch:

::: tabs

@tab Bash

@[code](./reproject.bash)

@tab Powershell

@[code](./reproject.ps1)

:::

::: info
Umfangreichere Möglichkeiten zur Automatisierung bietet die [Python PDAL Bibliothek](https://pypi.org/project/pdal/)
:::
