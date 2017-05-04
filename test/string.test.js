import {
    encodeHTML,
    decodeHTML
} from '../src/string';
import chai from 'chai';

const expect = chai.expect;

describe('字符串扩展库测试', function() {
    it('encodeHTML', function() {
        expect(encodeHTML(`<script>"WQ"&'qq'</script>`)).to.be.equal(`&lt;script&gt;&quot;WQ&quot;&amp;&#39;qq&#39;&lt;/script&gt;`);
    });

    it('decodeHTML', function() {
        expect(decodeHTML(`&lt;script&gt;&quot;WQ&quot;&amp;&#39;qq&#39;&lt;/script&gt;`)).to.be.equal(`<script>"WQ"&'qq'</script>`);
    });
});
