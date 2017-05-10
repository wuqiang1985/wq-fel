import encodeHtml from '../src/string/encodeHtml';
import decodeHtml from '../src/string/decodeHtml';
import str from '../src/string';
import _ from '../src/index';
import chai from 'chai';

const expect = chai.expect;

describe('字符串扩展库测试', function() {
    it('encodeHTML', function() {
        expect(encodeHtml(`<script>"WQ"&'qq'</script>`)).to.be.equal(`&lt;script&gt;&quot;WQ&quot;&amp;&#39;qq&#39;&lt;/script&gt;`);
    });

    it('decodeHTML', function() {
        expect(decodeHtml(`&lt;script&gt;&quot;WQ&quot;&amp;&#39;qq&#39;&lt;/script&gt;`)).to.be.equal(`<script>"WQ"&'qq'</script>`);
    });

    it('decodeHTML', function() {
        expect(str.decodeHtml(`&lt;script&gt;&quot;WQ&quot;&amp;&#39;qq&#39;&lt;/script&gt;`)).to.be.equal(`<script>"WQ"&'qq'</script>`);
    });

    it('decodeHTML', function() {
        expect(_.string.decodeHtml(`&lt;script&gt;&quot;WQ&quot;&amp;&#39;qq&#39;&lt;/script&gt;`)).to.be.equal(`<script>"WQ"&'qq'</script>`);
    });
});
