import formatDate from '../src/date/formatDate';
import chai from 'chai';

const expect = chai.expect;

describe('date扩展库测试', function() {
    it('formatDate：默认格式yyyy/MM/dd', function() {
        expect(formatDate(new Date(1985, 10, 7))).to.be.equal('1985/11/07');
    });

    it('formatDate：年月日时分秒yyyy/MM/dd HH:mm:ss', function() {
        expect(formatDate(new Date(1985, 10, 7, 11, 8, 6), 'yyyy/MM/dd HH:mm:ss')).to.be.equal('1985/11/07 11:08:06');
    });

    it('formatDate：格式yy/MM/dd', function() {
        expect(formatDate(new Date(1985, 10, 7), 'yy/MM/dd')).to.be.equal('85/11/07');
    });
});
