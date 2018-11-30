

function styler_geo(feature) {
    switch(String(feature.properties['Party']).charAt()) {
        case 'D':
        return {
            opacity: .5,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: .5  , 
            fill: true,
            fillOpacity: .5,
        //fillPattern: stripes,
        fillColor: 'rgba(64,64,238,1.0)',
    }
    break;

    case 'R':
    return {
        opacity: .5,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: .5  , 
        fill: true,
        fillOpacity: .5,
        fillColor: 'rgba(238,64,64,1.0)',
    }
    break;
    default:
    return {
        opacity: .5,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: .5  , 
        fill: true,
        fillOpacity: .5,
        fillColor: 'rgba(238,238,64,1.0)',
    }
    break;
}
}


function styler_hex(feature) {
    switch(String(feature.properties['Party']).charAt()) {
        case 'D':
        return {
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.5  , 
            fill: true,
            fillOpacity: 1,
        //fillPattern: stripes,
        fillColor: 'rgba(64,64,238,1.0)',
    }
    break;

    case 'R':
    return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.5  , 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(238,64,64,1.0)',
    }
    break;
    default:
    return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.5  , 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(238,238,64,1.0)',
    }
    break;
}
}
