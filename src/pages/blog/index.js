import React from 'react'

import Helmet from 'react-helmet';

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>

        <Helmet>
            <!-- Begin of Chaport Live Chat code -->
<script type="text/javascript">
(function(w,d,v3){
w.chaportConfig = {
  appId : '636a562520f872d7d1c6bada'
};

if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)})(window, document);
</script>
<!-- End of Chaport Live Chat code -->
         </Helmet>

         <div
          className="center margin-top-2"
          style={{
            marginTop: '5em'
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'black',
            }}
          >
           Последње објаве
          </h1>
        </div>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="column is-12">
              <div className="content">
                <BlogRoll />
              </div>
              </div>
            </div>
            
          </div>
        </section>
      </Layout>
    )
  }
}
