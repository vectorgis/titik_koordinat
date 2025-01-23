ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([105.165619, -5.594825, 105.386144, -5.082619]);
var wms_layers = [];

var format_PetaLampung_0 = new ol.format.GeoJSON();
var features_PetaLampung_0 = format_PetaLampung_0.readFeatures(json_PetaLampung_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PetaLampung_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaLampung_0.addFeatures(features_PetaLampung_0);
var lyr_PetaLampung_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaLampung_0, 
                style: style_PetaLampung_0,
                popuplayertitle: 'Peta Lampung',
                interactive: false,
                title: '<img src="styles/legend/PetaLampung_0.png" /> Peta Lampung'
            });
var format_TitikKoordinat_1 = new ol.format.GeoJSON();
var features_TitikKoordinat_1 = format_TitikKoordinat_1.readFeatures(json_TitikKoordinat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TitikKoordinat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikKoordinat_1.addFeatures(features_TitikKoordinat_1);
var lyr_TitikKoordinat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikKoordinat_1, 
                style: style_TitikKoordinat_1,
                popuplayertitle: 'Titik Koordinat',
                interactive: true,
                title: '<img src="styles/legend/TitikKoordinat_1.png" /> Titik Koordinat'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: 'Jalan',
                interactive: false,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });

lyr_PetaLampung_0.setVisible(true);lyr_TitikKoordinat_1.setVisible(true);lyr_Jalan_2.setVisible(true);
var layersList = [lyr_PetaLampung_0,lyr_TitikKoordinat_1,lyr_Jalan_2];
lyr_PetaLampung_0.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_TitikKoordinat_1.set('fieldAliases', {'fid': 'fid', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Title': 'Title', 'Foto': 'Foto', });
lyr_Jalan_2.set('fieldAliases', {'id': 'id', 'Nama Jalan': 'Nama Jalan', });
lyr_PetaLampung_0.set('fieldImages', {'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'VARNAME_2': '', 'NL_NAME_2': '', 'TYPE_2': '', 'ENGTYPE_2': '', 'CC_2': '', 'HASC_2': '', });
lyr_TitikKoordinat_1.set('fieldImages', {'fid': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Title': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Jalan_2.set('fieldImages', {'id': 'TextEdit', 'Nama Jalan': 'TextEdit', });
lyr_PetaLampung_0.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_TitikKoordinat_1.set('fieldLabels', {'fid': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Title': 'no label', 'Foto': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'id': 'inline label - always visible', 'Nama Jalan': 'inline label - always visible', });
lyr_Jalan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});