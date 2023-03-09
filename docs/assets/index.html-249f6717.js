import{_ as i,M as o,p as l,q as r,R as s,t as n,N as e,Q as p,a1 as t}from"./framework-5f20ca33.js";const c="/pdal-workshop/assets/map_overview-db553ece.png",u="/pdal-workshop/assets/ex3_QGIS-tab-symbology-las-536dd584.png",d="/pdal-workshop/assets/ex3_QGIS-tab-stats-las-2b1d821f.png",m="/pdal-workshop/assets/ex3_QGIS-3d-view-show-shadows-2ee216fd.png",v="/pdal-workshop/assets/ex3_QGIS-3d-view-las-2f87e6be.png",k="/pdal-workshop/assets/ex4_QGIS_PointDensityMap_Classification-88245bcc.png",h="/pdal-workshop/assets/ex4_QGIS_PointDensityMap-7cef832b.png",g="/pdal-workshop/assets/ex6_QGIS_Categorized_Legend-26422783.png",b="/pdal-workshop/assets/ex6_QGIS_Map_and_Table-f1e79593.png",_="/pdal-workshop/assets/ex7_QGIS_Overlay-de640192.png",q="/pdal-workshop/assets/ex8_QGIS_Ground_Points-546bcdc9.png",f="/pdal-workshop/assets/ex9_QGIS_Map1-20a2b1dc.png",y="/pdal-workshop/assets/ex9_QGIS_Fill_Nodata-376710de.png",x="/pdal-workshop/assets/ex9_QGIS_Map2-a368926d.png",w="/pdal-workshop/assets/ex9_QGIS_Map3-f4a45572.png",z="/pdal-workshop/assets/ex92_QGIS_Map-c4d4a22b.png",D="/pdal-workshop/assets/ex10_QGIS_MapView-14b9543c.png",S="/pdal-workshop/assets/ex10_QGIS_3DView-b02d4327.png",G={},j=t('<h1 id="beispiel-schutzwald-katzberg" tabindex="-1"><a class="header-anchor" href="#beispiel-schutzwald-katzberg" aria-hidden="true">#</a> Beispiel: Schutzwald Katzberg</h1><details class="hint-container details"><summary>Lage</summary><p><img src="'+c+`" alt="Karte"></p></details><div class="hint-container info"><p class="hint-container-title">Information</p><p>Bitte starte die Conda Console und aktiviere die PDAL Umgebung bevor du mit dem Beispiel beginnst.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conda activate pdal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Wechsle anschließend mit &#39;cd&#39; in das WS-Verzeichnis.</p></div><h2 id="_1-merge" tabindex="-1"><a class="header-anchor" href="#_1-merge" aria-hidden="true">#</a> 1. Merge</h2><p>Pipeline</p><ul><li>Input: alle Dateien mit der Endung *2014.laz im WS-Verzeichnis</li><li>Output: Datei &#39;merge2014.laz&#39;</li></ul><details class="hint-container details"><summary>Pipeline e1_merge.json</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">&quot;las_a_2014.laz&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;las_b_2014.laz&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;las_c_2014.laz&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;las_d_2014.laz&quot;</span><span class="token punctuation">,</span>    
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;filters.merge&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;merge2014.laz&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>Aufruf</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pdal pipeline e1_merge.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h2 id="_2-crop" tabindex="-1"><a class="header-anchor" href="#_2-crop" aria-hidden="true">#</a> 2. Crop</h2><p>Beschneiden der Datei merge2014.laz auf die rechteckige Grenze des Untersuchungsgebietes: LL(640007;5583845), UR(640087;5583934)</p><details class="hint-container details"><summary>Pipeline e2_crop.json</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">&quot;merge2014.laz&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;filters.crop&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;polygon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Polygon ((640007 5583845,640087 5583845,640087 5583934,640007 5583934, 640007 5583845))&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;crop2014.laz&quot;</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>Aufruf</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pdal pipeline e2_crop.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h2 id="_3-3d-map-view" tabindex="-1"><a class="header-anchor" href="#_3-3d-map-view" aria-hidden="true">#</a> 3. 3D-Map View</h2><p>Betrachte die Datei <code>crop2014.laz</code> in QGIS</p><ol><li>QGIS starten</li><li>Projekt als &#39;pdal-ws&#39; im WS-Ordner speichern</li><li>Datei <code>crop2014.laz</code> zur Karte hinzufügen</li><li>Layer Properties aufrufen</li><li>Tab Symbology aufrufen</li><li>Dialog zeigt die Standard Klassifikation nach Classifaction Attribut<details class="hint-container details"><summary>Details</summary><p><img src="`+u+'" alt=""></p></details></li><li>Tab: Stats aufrufen</li><li>Dialog zeigt die Attribute und Classification Statistik<details class="hint-container details"><summary>Details</summary><p><img src="'+d+'" alt=""></p></details></li><li>Neue 3D Kartenansicht anlegen mit Menu &#39;View/3D Map Views/New 3D Map View&#39;</li><li>3D Map View zeigt Kartenlayer</li><li>Configuration öffnen</li><li>Shadows aktivieren<details class="hint-container details"><summary>Details</summary><p><img src="'+m+'" alt=""></p></details></li></ol><ul><li>Navigation: Zoom in/out über Wheel-Rad</li><li>3D Map view zeigt LAS mit Schatten<details class="hint-container details"><summary>Details</summary><p><img src="'+v+'" alt=""></p></details></li></ul>',16),I={class:"hint-container info"},Q=s("p",{class:"hint-container-title"},"Information",-1),A={href:"https://mapscaping.com/cloud-optimized-point-clouds-in-qgis/",target:"_blank",rel:"noopener noreferrer"},C={class:"hint-container info"},P=s("p",{class:"hint-container-title"},"Information",-1),K=s("p",null,"Falls du mehr über die Möglichkeiten zur Darstellung von 3D Daten in QGIS Wissen möchtest, hilft ein Blick in das QGIS Manual:",-1),M={href:"https://docs.qgis.org/3.28/en/docs/user_manual/working_with_point_clouds/point_clouds.html#",target:"_blank",rel:"noopener noreferrer"},L={href:"https://docs.qgis.org/3.28/en/docs/user_manual/map_views/3d_map_view.html",target:"_blank",rel:"noopener noreferrer"},V=t(`<h2 id="_4-punktdichtekontrolle" tabindex="-1"><a class="header-anchor" href="#_4-punktdichtekontrolle" aria-hidden="true">#</a> 4. Punktdichtekontrolle</h2><p>Erzeugen eines Hex-Bin Vektor-Layers zur Dichtekontrolle</p><p>a. Rufe die Hilfe zur <code>pdal density</code> Anwendung auf</p><details class="hint-container details"><summary>Details</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pdal density <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><p>b. Erzeuge einen GeoJSON Hex-Bin Density Layer mit 5m Kantenlänge</p><details class="hint-container details"><summary>Details</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pdal density <span class="token parameter variable">--lyr_name</span> density <span class="token parameter variable">--ogrdriver</span> GeoJSON <span class="token parameter variable">--edge_length</span> <span class="token number">5</span> crop2014.laz crop2014hex5.geojson
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><p>c. Öffne QGIS und erzeuge eine &#39;Graduated Symbology Legend&#39; auf dem Feld &#39;crop2014hex5.count&#39; mit der Klassifizierungsmethode Natural Breaks (Jenks) und sieben Werteklassen</p><details class="hint-container details"><summary>QGIS Karte</summary><p><img src="`+k+'" alt=""><img src="'+h+`" alt=""></p></details><h2 id="_5-eleminieren-von-ausreißern" tabindex="-1"><a class="header-anchor" href="#_5-eleminieren-von-ausreißern" aria-hidden="true">#</a> 5. Eleminieren von Ausreißern</h2><p>Löschen von Punkten mit einer Höhe &lt; 450m</p><details class="hint-container details"><summary>Pipeline e5_outlier.json</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">&quot;crop2014.laz&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;filters.expression&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expression&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(Z&gt;=450)&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;crop2014g.laz&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>Aufruf</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pdal pipeline e5_outlier.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>`,12),N={class:"hint-container note"},B=s("p",{class:"hint-container-title"},"Notiz",-1),E=s("br",null,null,-1),O={href:"https://pdal.io/en/latest/stages/filters.elm.html",target:"_blank",rel:"noopener noreferrer"},F=t('<h2 id="_6-categorized-symbology" tabindex="-1"><a class="header-anchor" href="#_6-categorized-symbology" aria-hidden="true">#</a> 6. Categorized Symbology</h2><p>Lade die Datei <code>classification.geojson</code> in QGIS und erzeuge eine &#39;Categorized Symbology&#39; auf dem Feld &#39;name&#39;</p><details class="hint-container details"><summary>QGIS Karte</summary><p><img src="'+g+'" alt=""><img src="'+b+`" alt=""></p></details><h2 id="_7-vector-overlay-mit-filter" tabindex="-1"><a class="header-anchor" href="#_7-vector-overlay-mit-filter" aria-hidden="true">#</a> 7. Vector Overlay mit Filter</h2><p>Pipeline:<br> a. Overlay von crop2014g.laz mit dem Polygon aus der Datei &#39;classification.geojson&#39;<br> b. Extraktion aller Punkte innerhalb der Schutzwälder (Classification==33)</p><details class="hint-container details"><summary>Pipeline e7_overlay_expression.json</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">&quot;crop2014g.laz&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;filters.overlay&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;dimension&quot;</span><span class="token operator">:</span><span class="token string">&quot;Classification&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;datasource&quot;</span><span class="token operator">:</span><span class="token string">&quot;classification.geojson&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;layer&quot;</span><span class="token operator">:</span><span class="token string">&quot;classification&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;column&quot;</span><span class="token operator">:</span><span class="token string">&quot;name&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;filters.expression&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expression&quot;</span><span class="token operator">:</span><span class="token string">&quot;Classification==33&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;overlay2014.laz&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>Aufruf</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pdal pipeline e7_overlay_expression.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><p>c. Ergebnis in QGIS</p><details class="hint-container details"><summary>QGIS Karte</summary><p><img src="`+_+'" alt=""></p></details><h2 id="_8-ground-klassifikation" tabindex="-1"><a class="header-anchor" href="#_8-ground-klassifikation" aria-hidden="true">#</a> 8. Ground Klassifikation</h2>',10),R=s("br",null,null,-1),W={href:"https://pdal.io/en/latest/stages/filters.assign.html",target:"_blank",rel:"noopener noreferrer"},T=s("br",null,null,-1),H={href:"https://pdal.io/en/latest/stages/filters.smrf.html",target:"_blank",rel:"noopener noreferrer"},Z=s("br",null,null,-1),U={href:"https://pdal.io/en/latest/stages/filters.smrf.html",target:"_blank",rel:"noopener noreferrer"},J=s("br",null,null,-1),X=t(`<details class="hint-container details"><summary>Pipeline e8_ground.json</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">&quot;crop2014g.laz&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;filters.assign&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Classification = 0&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
       <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;filters.smrf&quot;</span><span class="token punctuation">,</span>     
       <span class="token property">&quot;cell&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
       <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;filters.expression&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;expression&quot;</span><span class="token operator">:</span><span class="token string">&quot;Classification==2&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;writers.las&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span><span class="token string">&quot;ground2014g.laz&quot;</span>
    <span class="token punctuation">}</span>    
 <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>Aufruf</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   pdal pipeline e8_ground.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><p>Betrachte die Ground Datei in QGIS:</p><details class="hint-container details"><summary>Karte</summary><p><img src="`+q+`" alt=""></p></details><h2 id="_9-dgm" tabindex="-1"><a class="header-anchor" href="#_9-dgm" aria-hidden="true">#</a> 9. DGM</h2><h3 id="_9-1-direkter-export" tabindex="-1"><a class="header-anchor" href="#_9-1-direkter-export" aria-hidden="true">#</a> 9.1 Direkter Export</h3><p>a. GDAL Export</p><details class="hint-container details"><summary>Aufruf</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pdal translate ground2014g.laz ground2014g.tif <span class="token parameter variable">--writers.gdal.resolution</span><span class="token operator">=</span><span class="token number">0.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><p>b. Anzeige in QGIS</p><details class="hint-container details"><summary>Karte mit NODATA Lücken</summary><p><img src="`+f+'" alt=""></p></details><p>c. Füllen der NODATA Werte über Interpolation in QGIS</p><details class="hint-container details"><summary>Dialog Raster/Analysis/Fill nodata</summary><p><img src="'+y+'" alt=""></p></details><p>d. Kontrolle in QGIS</p><details class="hint-container details"><summary>Details</summary><p>Karte ohne NODATA Lücken <img src="'+x+'" alt=""></p><p>3D Map View<br><img src="'+w+'" alt=""></p></details><h3 id="_9-2-triangulation" tabindex="-1"><a class="header-anchor" href="#_9-2-triangulation" aria-hidden="true">#</a> 9.2 Triangulation</h3>',15),Y={href:"https://pdal.io/en/latest/stages/filters.delaunay.html",target:"_blank",rel:"noopener noreferrer"},$={href:"https://pdal.io/en/latest/stages/filters.faceraster.html",target:"_blank",rel:"noopener noreferrer"},ss={href:"https://pdal.io/en/latest/stages/writers.raster.html",target:"_blank",rel:"noopener noreferrer"},ns=t(`<details class="hint-container details"><summary>e92_tin.json</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">&quot;ground2014g.laz&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;filters.delaunay&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;filters.faceraster&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;resolution&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">160</span><span class="token punctuation">,</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">160</span><span class="token punctuation">,</span>
        <span class="token property">&quot;origin_x&quot;</span><span class="token operator">:</span> <span class="token number">640007</span><span class="token punctuation">,</span>
        <span class="token property">&quot;origin_y&quot;</span><span class="token operator">:</span> <span class="token number">5583845</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>    
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;writers.raster&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span><span class="token string">&quot;ground2014t.tif&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>b. Aufruf</p><details class="hint-container details"><summary>Details</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pdal pipeline e92_tin.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><p>c. Kontrolle in QGIS</p><details class="hint-container details"><summary>Karte</summary><p><img src="`+z+'" alt=""></p></details><h2 id="_10-baum-klassifikation" tabindex="-1"><a class="header-anchor" href="#_10-baum-klassifikation" aria-hidden="true">#</a> 10. Baum Klassifikation</h2>',6),as={href:"https://pdal.io/en/latest/stages/filters.hag_delaunay.html",target:"_blank",rel:"noopener noreferrer"},es={href:"https://pdal.io/en/latest/stages/filters.sort.html",target:"_blank",rel:"noopener noreferrer"},ts={href:"https://pdal.io/en/latest/stages/filters.litree.html",target:"_blank",rel:"noopener noreferrer"},is={href:"https://pdal.io/en/latest/stages/filters.expression.html",target:"_blank",rel:"noopener noreferrer"},os={href:"https://pdal.io/en/latest/stages/writers.las.html",target:"_blank",rel:"noopener noreferrer"},ls=t(`<details class="hint-container details"><summary>e10_tree.json</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">&quot;crop2014g.laz&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;filters.hag_delaunay&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;filters.sort&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dimension&quot;</span><span class="token operator">:</span><span class="token string">&quot;HeightAboveGround&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span><span class="token string">&quot;DESC&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;filters.litree&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;min_points&quot;</span><span class="token operator">:</span><span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token property">&quot;min_height&quot;</span><span class="token operator">:</span><span class="token number">10.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;radius&quot;</span><span class="token operator">:</span><span class="token number">20.0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;filters.expression&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expression&quot;</span><span class="token operator">:</span><span class="token string">&quot;(Classification!=2) &amp;&amp; (Classification!=30) &amp;&amp; (ClusterID &gt; 0)&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;writers.las&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span><span class="token string">&quot;tree2014.laz&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;extra_dims&quot;</span><span class="token operator">:</span><span class="token string">&quot;ClusterID=uint8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;minor_version&quot;</span><span class="token operator">:</span><span class="token number">4</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>b. Aufruf</p><details class="hint-container details"><summary>Details</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pdal <span class="token parameter variable">-v</span> <span class="token number">8</span> pipeline e10_tree.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><p>c. Kontrolle in QGIS</p><details class="hint-container details"><summary>Details</summary><p>2D Karte<br><img src="`+D+'" alt="2D Karte"><br> 3D View<br><img src="'+S+`" alt="3D View"></p></details><h2 id="_11-dop-als-rgb-farbwert" tabindex="-1"><a class="header-anchor" href="#_11-dop-als-rgb-farbwert" aria-hidden="true">#</a> 11. DOP als RGB Farbwert</h2><p>Zuweisen von Farbwerten aus einer Raster-Datei</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;filters.colorization&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;raster&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dop2010.tif&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function rs(ps,cs){const a=o("ExternalLinkIcon");return l(),r("div",null,[j,s("div",I,[Q,s("p",null,[n("Um das Handling von großen Point Cloud Daten zu verbesseren, erzeugt QGIS beim erstmaligen Lesen einer LAS/LAZ Datei eine sog. "),s("a",A,[n("Cloud Optimized Point Cloud Datei"),e(a)]),n(" mit der Endung '*.copc.laz' im Verzeichnis der Originaldatei. Sie dient als Cache und muss zur Zeit noch manuelle gelöscht werden, falls die Originaldatei geändert wird.")])]),s("div",C,[P,K,s("ul",null,[s("li",null,[s("a",M,[n("Working with Point Clouds"),e(a)])]),s("li",null,[s("a",L,[n("3D Map View"),e(a)])])])]),V,s("div",N,[B,s("p",null,[n("Eine weitere Möglichkeit zur Detektion und Klassifizierung von Punkten mit niedrigen Höhen ist die Anwendung des ELM Filters nach Chen."),E,s("a",O,[n("filters.elm"),e(a)])])]),F,s("p",null,[n("Pipeline:"),R,n(" a. Reset der Classification Dimension mit "),s("a",W,[n("filters.assign"),e(a)]),T,n(" b. Klassifizierung der Ground Points mit "),s("a",H,[n("filters.smrf"),e(a)]),Z,n(" c. Reduzieren der Ausgabepunkte auf die Ground-Points (Classification==2) mit "),s("a",U,[n("filters.expression"),e(a)]),J,n(" d. Schreibe LAS-Datei")]),X,s("p",null,[n("a. Pipeline aus "),s("a",Y,[n("fiters.delaunay"),e(a)]),n(", "),s("a",$,[n("filters.faceraster"),e(a)]),n(" und "),s("a",ss,[n("writers.raster"),e(a)])]),ns,s("p",null,[n("a. Pipeline aus "),s("a",as,[n("filters.hag_delaunay"),e(a)]),n(", "),s("a",es,[n("filters.sort"),e(a)]),n(", "),s("a",ts,[n("filters.litree"),e(a)]),n(","),s("a",is,[n("filters.expression"),e(a)]),n(" und "),s("a",os,[n("writers.las"),e(a)])]),ls,p(` a. Pipeline aus []()
::: details e11_dop.json
@[code](./e11_dop.json)
:::
b.Aufruf
::: details
\`\`\`bash
pdal pipeline e11_dop.json
\`\`\`
::: `)])}const ds=i(G,[["render",rs],["__file","index.html.vue"]]);export{ds as default};