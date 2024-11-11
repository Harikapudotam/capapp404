sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ust.harika.headerapp',
            componentId: 'Request_HeaderList',
            contextPath: '/Request_Header'
        },
        CustomPageDefinitions
    );
});