import getParamByUrl from '../src/url/getParamByUrl';
import getRawParamByUrl from '../src/url/getRawParamByUrl';
import jsonToQuery from '../src/url/jsonToQuery';
import chai from 'chai';

const expect = chai.expect;

describe('url扩展库测试', function () {
    it('getParamByUrl', function () {
        expect(getParamByUrl('name', 'http://www.joox.com/?name=武强')).to.be.equal('%E6%AD%A6%E5%BC%BA');
    });


    it('getRawParamByUrl', function () {
        expect(getRawParamByUrl('name', 'http://www.joox.com/?name=武强')).to.be.equal('武强');
    });

    it('jsonToQuery', function () {
        expect(jsonToQuery({
            firstName: 'wu',
            lastName: 'qiang',
        })).to.be.equal('firstName=wu&lastName=qiang');
    });
});
