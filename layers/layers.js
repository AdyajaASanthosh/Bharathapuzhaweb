var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_clip_GEOMORPHOLOGY_1 = new ol.format.GeoJSON();
var features_clip_GEOMORPHOLOGY_1 = format_clip_GEOMORPHOLOGY_1.readFeatures(json_clip_GEOMORPHOLOGY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_GEOMORPHOLOGY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_GEOMORPHOLOGY_1.addFeatures(features_clip_GEOMORPHOLOGY_1);
var lyr_clip_GEOMORPHOLOGY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_GEOMORPHOLOGY_1, 
                style: style_clip_GEOMORPHOLOGY_1,
                popuplayertitle: "clip_GEOMORPHOLOGY",
                interactive: true,
                title: '<img src="styles/legend/clip_GEOMORPHOLOGY_1.png" /> clip_GEOMORPHOLOGY'
            });
var format_clip_SOIL_2 = new ol.format.GeoJSON();
var features_clip_SOIL_2 = format_clip_SOIL_2.readFeatures(json_clip_SOIL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_SOIL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_SOIL_2.addFeatures(features_clip_SOIL_2);
var lyr_clip_SOIL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_SOIL_2, 
                style: style_clip_SOIL_2,
                popuplayertitle: "clip_SOIL",
                interactive: true,
                title: '<img src="styles/legend/clip_SOIL_2.png" /> clip_SOIL'
            });
var format_clip_DRAINAGE_3 = new ol.format.GeoJSON();
var features_clip_DRAINAGE_3 = format_clip_DRAINAGE_3.readFeatures(json_clip_DRAINAGE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_DRAINAGE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_DRAINAGE_3.addFeatures(features_clip_DRAINAGE_3);
var lyr_clip_DRAINAGE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_DRAINAGE_3, 
                style: style_clip_DRAINAGE_3,
                popuplayertitle: "clip_DRAINAGE",
                interactive: true,
                title: '<img src="styles/legend/clip_DRAINAGE_3.png" /> clip_DRAINAGE'
            });
var format_clip_Road_4 = new ol.format.GeoJSON();
var features_clip_Road_4 = format_clip_Road_4.readFeatures(json_clip_Road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Road_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Road_4.addFeatures(features_clip_Road_4);
var lyr_clip_Road_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Road_4, 
                style: style_clip_Road_4,
                popuplayertitle: "clip_Road",
                interactive: true,
                title: '<img src="styles/legend/clip_Road_4.png" /> clip_Road'
            });
var format_Book1_5 = new ol.format.GeoJSON();
var features_Book1_5 = format_Book1_5.readFeatures(json_Book1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Book1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Book1_5.addFeatures(features_Book1_5);
var lyr_Book1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Book1_5, 
                style: style_Book1_5,
                popuplayertitle: "Book1",
                interactive: true,
                title: '<img src="styles/legend/Book1_5.png" /> Book1'
            });
var format_dam_6 = new ol.format.GeoJSON();
var features_dam_6 = format_dam_6.readFeatures(json_dam_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dam_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dam_6.addFeatures(features_dam_6);
var lyr_dam_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dam_6, 
                style: style_dam_6,
                popuplayertitle: "dam",
                interactive: true,
                title: '<img src="styles/legend/dam_6.png" /> dam'
            });

lyr_OSMStandard_0.setVisible(true);lyr_clip_GEOMORPHOLOGY_1.setVisible(true);lyr_clip_SOIL_2.setVisible(true);lyr_clip_DRAINAGE_3.setVisible(true);lyr_clip_Road_4.setVisible(true);lyr_Book1_5.setVisible(true);lyr_dam_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_clip_GEOMORPHOLOGY_1,lyr_clip_SOIL_2,lyr_clip_DRAINAGE_3,lyr_clip_Road_4,lyr_Book1_5,lyr_dam_6];
lyr_clip_GEOMORPHOLOGY_1.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_clip_SOIL_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERSOIL_': 'KERSOIL_', 'KERSOIL_ID': 'KERSOIL_ID', 'CODE': 'CODE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'DEPTH': 'DEPTH', 'TEXTURE': 'TEXTURE', 'SLOPE': 'SLOPE', 'DRAINAGE': 'DRAINAGE', });
lyr_clip_DRAINAGE_3.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_clip_Road_4.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_Book1_5.set('fieldAliases', {'Location': 'Location', 'Latitiude': 'Latitiude', 'Longitude': 'Longitude', });
lyr_dam_6.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'Image': 'Image', });
lyr_clip_GEOMORPHOLOGY_1.set('fieldImages', {'NAME': '', 'TYPE1': '', 'TYPE2': '', });
lyr_clip_SOIL_2.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'KERSOIL_': '', 'KERSOIL_ID': '', 'CODE': '', 'MAP_SYMBOL': '', 'DEPTH': '', 'TEXTURE': '', 'SLOPE': '', 'DRAINAGE': '', });
lyr_clip_DRAINAGE_3.set('fieldImages', {'ORDER1': '', });
lyr_clip_Road_4.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_Book1_5.set('fieldImages', {'Location': '', 'Latitiude': '', 'Longitude': '', });
lyr_dam_6.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'Image': 'ExternalResource', });
lyr_clip_GEOMORPHOLOGY_1.set('fieldLabels', {'NAME': 'inline label - always visible', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_clip_SOIL_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KERSOIL_': 'no label', 'KERSOIL_ID': 'no label', 'CODE': 'no label', 'MAP_SYMBOL': 'no label', 'DEPTH': 'no label', 'TEXTURE': 'inline label - always visible', 'SLOPE': 'no label', 'DRAINAGE': 'no label', });
lyr_clip_DRAINAGE_3.set('fieldLabels', {'ORDER1': 'no label', });
lyr_clip_Road_4.set('fieldLabels', {'NAME': 'inline label - always visible', 'Length': 'no label', });
lyr_Book1_5.set('fieldLabels', {'Location': 'inline label - always visible', 'Latitiude': 'no label', 'Longitude': 'no label', });
lyr_dam_6.set('fieldLabels', {'id': 'no label', 'NAME': 'inline label - always visible', 'Image': 'no label', });
lyr_dam_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});