import{_ as o,M as i,p as l,q as d,Q as a,R as e,t as n,N as t,a1 as h}from"./framework-5f20ca33.js";const p={},u=e("h1",{id:"uberblick",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uberblick","aria-hidden":"true"},"#"),n(" Überblick")],-1),c=h('<h2 id="bestandteile-aus-konzeptioneller-sicht" tabindex="-1"><a class="header-anchor" href="#bestandteile-aus-konzeptioneller-sicht" aria-hidden="true">#</a> Bestandteile aus konzeptioneller Sicht</h2><h3 id="dimensions" tabindex="-1"><a class="header-anchor" href="#dimensions" aria-hidden="true">#</a> Dimensions</h3><p>Alle PDAL Punktdaten werden als ein Menge von Dimensionen gespeichert. Dimensionen besitzen einen Namen und einen Datentyp. Der Datentyp wird zur Laufzeit bestimmt, es ist jedoch ein Standarddatentyp für jede Dimension vorhanden.</p><p><strong>Beispiel</strong>: X(double), Y(double), Z(double), Intensity(uint16), ReturnNumber(uint8), HeightAboveGround(double), Intensity(uint16)</p><h3 id="stages" tabindex="-1"><a class="header-anchor" href="#stages" aria-hidden="true">#</a> Stages</h3><p>Stages sind ein Überbegriff für Elemente in einer Pipeline. PDAL kennt zwei unterschiedliche Modi beim Starten einer Stage:</p><ul><li><strong>Standard</strong>: Input Daten werden vollständigen in den RAM gelesen, bevor die Stage gestartet wird</li><li><strong>Stream</strong>: Input Daten werden in Junks gelesen und an die Stage übergeben</li></ul><p>PDAL unterscheidet die folgenden Stage Typen:</p><p><strong>Reader</strong>: Reader lesen Dimensions und erzeugen einen Dataflow. Sie stehen überlicherweise am Anfang einer Pipeline.</p>',9),g={href:"https://pdal.io/en/latest/stages/readers.las.html#readers-las",target:"_blank",rel:"noopener noreferrer"},m={href:"https://pdal.io/en/latest/stages/readers.text.html#readers-text",target:"_blank",rel:"noopener noreferrer"},b={href:"https://pdal.io/en/latest/stages/readers.gdal.html#readers-gdal",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[e("strong",null,"Writer"),n(": Writer konsumieren Daten aus dem Data-Flow und Schreiben ihre Daten in eine Ausgabe. Writer stehen deswegen am Ende des Data-Flows.")],-1),f={href:"https://pdal.io/en/latest/stages/writers.las.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://pdal.io/en/latest/stages/writers.raster.html",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,[e("strong",null,"Filter"),n(": Filter arbeiten mit Daten als sog. Inline-Operationen im Data-Flow. Einige Filter können nur mit bestimmten Dimensionen arbeiten, z. B. kann 'filters.reprojection' nur XYZ-Koordinaten reprojezieren.")],-1),w=e("h3",{id:"pipeline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pipeline","aria-hidden":"true"},"#"),n(" Pipeline")],-1),S=e("p",null,"Eine Pipeline besteht aus unterschiedlichen Stage-Elementen. Die Elemente sind über einen Data-Flow miteinander verbunden:",-1),I=e("p",null,"Pipelines sind z.B. über die Anwendung pdal pipeline ausführbar.",-1),x=e("div",{class:"hint-container note"},[e("p",{class:"hint-container-title"},"Notiz"),e("p",null,"Mit der zunehmenden Integration von PDAL in die QGIS Umgebung werden die PDAL-Funktionen auch in QGIS verfügbar und lassen sich mit Tools wie dem 'Graphical Modeler' zu einem ausführbaren Workflow kombinieren.")],-1),z=e("h2",{id:"implementierungen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#implementierungen","aria-hidden":"true"},"#"),n(" Implementierungen")],-1),L={href:"https://pdal.io/en/latest/api/cpp/index.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://pypi.org/project/pdal/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://pdal.io/en/latest/java.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://pdal.io/en/latest/apps/index.html",target:"_blank",rel:"noopener noreferrer"};function E(N,P){const r=i("ExternalLinkIcon"),s=i("Mermaid");return l(),d("div",null,[u,a(` ## Historie

| Datum   | Beschreibung                                              |
| ------- | --------------------------------------------------------- |
| 2011/04 | Howard Butlers erster Commit auf [GitHub](http://pdal.io) |
| 2021/02 | Integration in QGIS 3.18                                  |
| 2023/02 | Version 2.5.1 mit 135 Beitragenden und 900 GitHub Sternen |
| 2023/03 | Verbesserte Integration ab QGIS 3.30                      | `),a(` ## Abgrenzung zu anderen Bibliotheken
//TBD `),c,e("p",null,[n("Beispiel: "),e("a",g,[n("readers.las"),t(r)]),n(", "),e("a",m,[n("readers.txt"),t(r)]),n(", "),e("a",b,[n("readers.gdal"),t(r)])]),_,e("p",null,[n("Beispiel: "),e("a",f,[n("writer.las"),t(r)]),n(","),e("a",k,[n("writers.raster"),t(r)])]),D,w,S,t(s,{id:"mermaid-59",code:"eJxLL0osyFDwCbLmUgCCoNTElNQiXV27YsNoJbfMnJLUIgVDpViIZLEhSMIILmEElzACSoQXZQIFrbkAlgYV9g=="}),I,x,z,e("ul",null,[e("li",null,[n("Language Binding ("),e("a",L,[n("C++"),t(r)]),n(","),e("a",A,[n("Python"),t(r)]),n(","),e("a",B,[n("Java"),t(r)]),n(")")]),e("li",null,[e("a",v,[n("CLI Anwendungen"),t(r)])])])])}const F=o(p,[["render",E],["__file","index.html.vue"]]);export{F as default};