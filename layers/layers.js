ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3765").setExtent([236619.862592, 4790745.313732, 578305.704992, 5081695.985594]);
var wms_layers = [];

var format_Kopno_0 = new ol.format.GeoJSON();
var features_Kopno_0 = format_Kopno_0.readFeatures(json_Kopno_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3765'});
var jsonSource_Kopno_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kopno_0.addFeatures(features_Kopno_0);
var lyr_Kopno_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kopno_0, 
                style: style_Kopno_0,
                popuplayertitle: 'Kopno',
                interactive: false,
                title: '<img src="styles/legend/Kopno_0.png" /> Kopno'
            });
var format_More_RH_1 = new ol.format.GeoJSON();
var features_More_RH_1 = format_More_RH_1.readFeatures(json_More_RH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3765'});
var jsonSource_More_RH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_More_RH_1.addFeatures(features_More_RH_1);
var lyr_More_RH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_More_RH_1, 
                style: style_More_RH_1,
                popuplayertitle: 'More_RH',
                interactive: false,
                title: '<img src="styles/legend/More_RH_1.png" /> More_RH'
            });
var format_Mrezapunktova_2 = new ol.format.GeoJSON();
var features_Mrezapunktova_2 = format_Mrezapunktova_2.readFeatures(json_Mrezapunktova_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3765'});
var jsonSource_Mrezapunktova_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mrezapunktova_2.addFeatures(features_Mrezapunktova_2);
var lyr_Mrezapunktova_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mrezapunktova_2, 
                style: style_Mrezapunktova_2,
                popuplayertitle: 'Mreza punktova',
                interactive: true,
    title: 'Mreza punktova<br />\
    <img src="styles/legend/Mrezapunktova_2_0.png" /> AJ<br />\
    <img src="styles/legend/Mrezapunktova_2_1.png" /> DB<br />\
    <img src="styles/legend/Mrezapunktova_2_2.png" /> DB/FG<br />\
    <img src="styles/legend/Mrezapunktova_2_3.png" /> FG<br />\
    <img src="styles/legend/Mrezapunktova_2_4.png" /> NV/HB<br />\
    <img src="styles/legend/Mrezapunktova_2_5.png" /> IM<br />\
    <img src="styles/legend/Mrezapunktova_2_6.png" /> Doktorandi / studenti<br />\
    <img src="styles/legend/Mrezapunktova_2_7.png" /> LŠ<br />\
    <img src="styles/legend/Mrezapunktova_2_8.png" /> MB<br />\
    <img src="styles/legend/Mrezapunktova_2_9.png" /> MTĆ<br />\
    <img src="styles/legend/Mrezapunktova_2_10.png" /> NŠ<br />' });
var format_Status_3 = new ol.format.GeoJSON();
var features_Status_3 = format_Status_3.readFeatures(json_Status_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3765'});
var jsonSource_Status_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Status_3.addFeatures(features_Status_3);
var lyr_Status_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Status_3, 
                style: style_Status_3,
                popuplayertitle: 'Status',
                interactive: false,
    title: 'Status<br />\
    <img src="styles/legend/Status_3_0.png" /> dokumentirano<br />' });
var format_GeoLeksgranica_4 = new ol.format.GeoJSON();
var features_GeoLeksgranica_4 = format_GeoLeksgranica_4.readFeatures(json_GeoLeksgranica_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3765'});
var jsonSource_GeoLeksgranica_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoLeksgranica_4.addFeatures(features_GeoLeksgranica_4);
var lyr_GeoLeksgranica_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeoLeksgranica_4, 
                style: style_GeoLeksgranica_4,
                popuplayertitle: 'GeoLeks granica',
                interactive: false,
                title: '<img src="styles/legend/GeoLeksgranica_4.png" /> GeoLeks granica'
            });
var group_DEM = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'DEM'});

lyr_Kopno_0.setVisible(true);lyr_More_RH_1.setVisible(true);lyr_Mrezapunktova_2.setVisible(true);lyr_Status_3.setVisible(true);lyr_GeoLeksgranica_4.setVisible(true);
var layersList = [lyr_Kopno_0,lyr_More_RH_1,lyr_Mrezapunktova_2,lyr_Status_3,lyr_GeoLeksgranica_4];
lyr_Kopno_0.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'COLLECT': 'COLLECT', });
lyr_More_RH_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Mrezapunktova_2.set('fieldAliases', {'PUNKT': 'PUNKT', 'SIFRA': 'SIFRA', 'ISTRAZIVAC': 'ISTRAZIVAC', 'MREZA': 'MREZA', 'STATUS': 'STATUS', 'O/G': 'O/G', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_callouts_originx': 'auxiliary_storage_callouts_originx', 'auxiliary_storage_callouts_originy': 'auxiliary_storage_callouts_originy', 'auxiliary_storage_callouts_destinationx': 'auxiliary_storage_callouts_destinationx', 'auxiliary_storage_callouts_destinationy': 'auxiliary_storage_callouts_destinationy', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_Status_3.set('fieldAliases', {'PUNKT': 'PUNKT', 'SIFRA': 'SIFRA', 'ISTRAZIVAC': 'ISTRAZIVAC', 'MREZA': 'MREZA', 'STATUS': 'STATUS', 'O/G': 'O/G', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_callouts_originx': 'auxiliary_storage_callouts_originx', 'auxiliary_storage_callouts_originy': 'auxiliary_storage_callouts_originy', 'auxiliary_storage_callouts_destinationx': 'auxiliary_storage_callouts_destinationx', 'auxiliary_storage_callouts_destinationy': 'auxiliary_storage_callouts_destinationy', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_GeoLeksgranica_4.set('fieldAliases', {'id': 'id', });
lyr_Kopno_0.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'COLLECT': 'Range', });
lyr_More_RH_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Mrezapunktova_2.set('fieldImages', {'PUNKT': 'TextEdit', 'SIFRA': 'TextEdit', 'ISTRAZIVAC': 'TextEdit', 'MREZA': 'TextEdit', 'STATUS': 'TextEdit', 'O/G': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_callouts_originx': 'TextEdit', 'auxiliary_storage_callouts_originy': 'TextEdit', 'auxiliary_storage_callouts_destinationx': 'TextEdit', 'auxiliary_storage_callouts_destinationy': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_Status_3.set('fieldImages', {'PUNKT': '', 'SIFRA': 'TextEdit', 'ISTRAZIVAC': '', 'MREZA': 'TextEdit', 'STATUS': '', 'O/G': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_callouts_originx': 'TextEdit', 'auxiliary_storage_callouts_originy': 'TextEdit', 'auxiliary_storage_callouts_destinationx': 'TextEdit', 'auxiliary_storage_callouts_destinationy': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_GeoLeksgranica_4.set('fieldImages', {'id': '', });
lyr_Kopno_0.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'COLLECT': 'no label', });
lyr_More_RH_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Mrezapunktova_2.set('fieldLabels', {'PUNKT': 'inline label - always visible', 'SIFRA': 'hidden field', 'ISTRAZIVAC': 'inline label - always visible', 'MREZA': 'hidden field', 'STATUS': 'inline label - always visible', 'O/G': 'inline label - always visible', 'auxiliary_storage_callouts_originx': 'hidden field', 'auxiliary_storage_callouts_originy': 'hidden field', 'auxiliary_storage_callouts_destinationx': 'hidden field', 'auxiliary_storage_callouts_destinationy': 'hidden field', });
lyr_Status_3.set('fieldLabels', {'PUNKT': 'no label', 'SIFRA': 'no label', 'ISTRAZIVAC': 'no label', 'MREZA': 'no label', 'STATUS': 'no label', 'O/G': 'no label', 'auxiliary_storage_callouts_originx': 'no label', 'auxiliary_storage_callouts_originy': 'no label', 'auxiliary_storage_callouts_destinationx': 'no label', 'auxiliary_storage_callouts_destinationy': 'no label', });
lyr_GeoLeksgranica_4.set('fieldLabels', {'id': 'no label', });
lyr_GeoLeksgranica_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});