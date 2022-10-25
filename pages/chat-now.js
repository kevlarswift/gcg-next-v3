import Head from "next/head";
import { drupal } from "/lib/drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";
import Banner from "/components/blocks/banner";
import Paragraph from "/components/paragraphs/Paragraph";

export default function ChatNowPage({ node, menus, global }) {
  
  return (
    <>
      <Head>
        <title>{node.title} | United States Coast Guard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `
              alert("chat");window.lpTag=window.lpTag||{};if(typeof window.lpTag._tagCount==='undefined'){window.lpTag={site:'6832552'||'',section:lpTag.section||'',autoStart:lpTag.autoStart===false?false:true,ovr:lpTag.ovr||{},_v:'1.6.0',_tagCount:1,protocol:'https:',events:{bind:function(app,ev,fn){lpTag.defer(function(){lpTag.events.bind(app,ev,fn);},0);},trigger:function(app,ev,json){lpTag.defer(function(){lpTag.events.trigger(app,ev,json);},1);}},defer:function(fn,fnType){if(fnType==0){this._defB=this._defB||[];this._defB.push(fn);}else if(fnType==1){this._defT=this._defT||[];this._defT.push(fn);}else{this._defL=this._defL||[];this._defL.push(fn);}},load:function(src,chr,id){var t=this;setTimeout(function(){t._load(src,chr,id);},0);},_load:function(src,chr,id){var url=src;if(!src){url=this.protocol+'//'+((this.ovr&&this.ovr.domain)?this.ovr.domain:'lptag.liveperson.net')+'/tag/tag.js?site='+this.site;}var s=document.createElement('script');s.setAttribute('charset',chr?chr:'UTF-8');if(id){s.setAttribute('id',id);}s.setAttribute('src',url);document.getElementsByTagName('head').item(0).appendChild(s);},init:function(){this._timing=this._timing||{};this._timing.start=(new Date()).getTime();var that=this;if(window.attachEvent){window.attachEvent('onload',function(){that._domReady('domReady');});}else{window.addEventListener('DOMContentLoaded',function(){that._domReady('contReady');},false);window.addEventListener('load',function(){that._domReady('domReady');},false);}if(typeof(window._lptStop)=='undefined'){this.load();}},start:function(){this.autoStart=true;},_domReady:function(n){if(!this.isDom){this.isDom=true;this.events.trigger('LPT','DOM_READY',{t:n});}this._timing[n]=(new Date()).getTime();},vars:lpTag.vars||[],dbs:lpTag.dbs||[],ctn:lpTag.ctn||[],sdes:lpTag.sdes||[],ev:lpTag.ev||[]};lpTag.init();}else{window.lpTag._tagCount+=1;}
            `,
          }}
        />
      </Head>
      <Layout menus={menus} global={global}>
        <Banner title={node.title} subtitle={node.field_subtitle} bgImage={node.field_banner?.image_style_uri?.banner} />
        <button><div id="LP_DIV_1614023441824">&nbsp;</div></button>
        <Container className="container-inner">
          {node.field_paragraphs &&
            node.field_paragraphs.map((paragraph) => {
              return <Paragraph content={paragraph} key={paragraph.id} />;
            })
          }
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  // Fetch page content
  const node = await drupal.getResource("node--special", "81dbd7a7-10b4-436b-8142-425751349872", {
    params: {
      include: "field_paragraphs, field_banner",
    },
  });

  return {
    props: {
      node,
      menus: {
        main: await drupal.getMenu("main"),
        footer1: await drupal.getMenu("footer"),
        footer2: await drupal.getMenu("footer-menu-2")
      },
      global: await drupal.getResource("node--global", "132de760-f931-4656-a5a9-9a13455d232f"),
    },
    revalidate: 60,
  };
}