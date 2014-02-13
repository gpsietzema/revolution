MODx.page.ImportHTML = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        formpanel: 'modx-panel-import-html'
        ,buttons: [{
            process: 'system/import/html', text: _('import_site'), method: 'remote', cls:'primary-button'
        },{
            process: 'cancel', text: _('cancel'), params: {a:'welcome'}
        }]
        ,components: [{
            xtype: 'modx-panel-import-html'
        }]
    });
    MODx.page.ImportHTML.superclass.constructor.call(this,config);
};
Ext.extend(MODx.page.ImportHTML,MODx.Component);
Ext.reg('modx-page-import-html',MODx.page.ImportHTML);
