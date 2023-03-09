# Praxis

## Starten der Umgebung

a. Starten der Kommandozeile durch Aufruf der Conda Console aus dem Startmenü  
b. Aktivieren des pdal Environments
   ```bash
   conda activate pdal
   ```
c. Kontrolle ob PDAL Bibliothek gestartet werden kann
   ```bash
   # Usage anzeigen
   pdal
   # Version ausgeben
   pdal --version
   ```


## Anwendungen

### Info

a. Wechsel in das WS-Verzeichnis
   ```bash
   cd c:\Users\<NAME>\Documents\PDAL
   ```
b. Hilfe zur Info Anwendung 
   ```bash
   pdal info --help
   ```
c. Ausgabe des ersten Punktes
   ```bash
   pdal info sample.laz -p 0
   ```
d. Ausgabe von Metainformationen
   ```bash
   pdal info sample.laz --metadata
   ```


### Merge 

a. Hilfe zur Merge Anwendung 
   ```bash
   pdal merge --help
   ```

b. Vereinigen von mehreren Dateien zu einer Datei
   ```bash
   pdal merge las_a_2014.laz las_b_2014.laz merge2014.laz
   ```
   
### Pipeline

Pipelines erlauben es uns einen kompletten Workflow aus unterschiedlichen Stages aufzubauen. Sie werden im [JSON-Format](http://www.json.org) als ein Array definiert und bestehen immer aus einer Reader- und einer Writer-Stage. Die einzelnen Stages sind Elemente des Arrays und werden der Reihe nach aufgerufen.

a. Hilfe zur Pipeline Anwendung 
   ```bash
   pdal pipeline --help
   ```

b. Kleinste mögliche Pipeline:

@[code](./pl_hello.json)
   
c. Filter Stages

   ```json 
   [
      "input.laz",
      {
         // Stage A in Object Notation
      },
      {
         // Stage B in Objekt Notation 
      },
      "output.laz"
   ]
   ```

d. Alle vorhandenen Stages auflisten
   
   ```bash
   pdal --drivers
   ```

e. Beispiel Pipeline zum Croppen eine LAS Datei
   @[code](./pl_crop.json)

   
f. Pipeline Start
   ```bash
   pdal pipeline pl_crop.json
   ```
g. Pipeline Start mit Überschreiben der Reader- und Writer-Stage
   ```bash
   pdal pipeline --readers.las.filename=merge.laz --writers.las.filename=crop.laz pl_crop.json
   ```

### Translate

a. Hilfe zur Translate Anwendung 
   ```bash
   pdal translate --help
   ```

b. Dateiformatkonvertierung
   ```bash
   pdal translate sample.laz sample.las
   ```
c. Filteraufruf mit Argumenten
   ```bash
   # Crop filter
   pdal translate merge.laz crop.laz crop --filters.crop.polygon="Polygon ((640007 5583845,640087 5583845,640087 5583934,640007 5583934, 640007 5583845))"
   
   # LAS Writer mit Option zum Setzen des CRS
   pdal translate merge.laz merge_utm.laz --writers.las.a_srs="EPSG:25832"
   ```
c. Aufruf einer Pipeline-Datei mit Überschreiben von Ein- und Ausgabedatei
   ```bash
   pdal translate --json pl_crop.json merge.laz crop.laz
   ```

## Stapelverarbeitung

Point Cloud Daten werden aufgrund ihrer Größe oft in mehrere kleine Dateien aufgeteilt. Skripts zur Stapelverarbeiung helfen uns unserer Arbeitsschritte zu automatisieren.

Das folgende Skript ruft die [Translate-Anwendung](#translate) für mehrere Dateien im Verzeichnis auf und führt einen [Reproject](https://pdal.io/en/latest/stages/filters.reprojection.html) durch:

::: tabs

@tab Powershell     

@[code](./reproject.ps1)

@tab Bash

@[code](./reproject.bash)

:::

Alternativ zur Verwendung der Kommandozeilenargumente lässt sich eine Pipeline auch aus einem Stapelverarbeitungs-Skript aufrufen. Die übergebenen Dateinamen überschreiben den Reader und Writer im Pipeline Skript:

@[code](./pl_reproject_crop.json)

::: tabs

@tab Powershell     

@[code](./pl_reproject.ps1)

@tab Bash

@[code](./pl_reproject.bash)

:::

::: info
   Umfangreiche Möglichkeiten zur Automatisierung von Aufgaben ermöglicht die [Python PDAL Bibliothek](https://pypi.org/project/pdal/)
::: 


## Ausgewählte Filterfunktionen

Eine gesamte Liste aller Filterfunktionen befindet sich auf der [PDAL Homepage](https://pdal.io/en/latest/stages/filters.html).

### [filters.expression](https://pdal.io/en/latest/stages/filters.expression.html)
   Nur Punkte bei denen die Expression wahr ist, werden ausgegeben
   ```json
   {
   "type": "filters.expression",
   "expression": "(Z>=10 && Z<50)"
   }
   ```   

### [filters.outlier](https://pdal.io/en/latest/stages/filters.outlier.html)
   Klassifizieren von Ausreißern mit Radius
   ```json
   {
        "type":"filters.outlier",
        "method":"radius", // 
        "radius":1.0, // Distanz in Map Units
        "min_k":4 // Mindestanzahl von Nachbarn 
    }
   ```

   Klassifizieren von Ausreißern über Standardabweichung 
   ```json      
      {
        "type":"filters.outlier",
        "method":"statistical",
        "mean_k":12,  // Anzahl der Nachbarn 
        "multiplier":2 // Grenzwert 2 * Standardabweichung
      }  
   ```
::: note
   Eine weitere Möglichkeit zur Detektion und Klassifizierung von Punkten mit niedrigen Höhen ist die Anwendung des ELM Filters nach Chen.   
   [filters.elm](https://pdal.io/en/latest/stages/filters.elm.html)
:::

### [filters.overlay](https://pdal.io/en/latest/stages/filters.overlay.html)
   
   Overlay aus einer JSON-Datei mit Zuweisung von Werten in einer Dimension.
   ```json
    {
      "type":"filters.overlay",
      "datasource":"classification.geojson",
      "layer":"classification",
      "column":"name",
      "dimension":"Classification",
    }
   ```


### [filters.colorization](https://pdal.io/en/latest/stages/filters.colorization.html)
   Zuweisen von Farbwerten aus einer Raster-Datei
   ```json
   {
     "type":"filters.colorization",
     "raster":"dop2010.tif",      
   }
   ```