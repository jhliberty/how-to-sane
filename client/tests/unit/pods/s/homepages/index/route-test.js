import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule('route:s/homepages/index', 'SHomepagesIndexRoute', {
    // needs: ['controller:foo']
}, function () {
    it('exists', function () {
        var route = this.subject();
        expect(route).to.be.ok;
    });
});
