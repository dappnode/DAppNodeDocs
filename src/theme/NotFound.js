import React from 'react';
import Layout from '@theme/Layout';



function NotFound() {
    let currentLocation =  window.location.href;
    return <Layout title="Page Not Found">
         
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2 ">
                <h1>
                  Oh oh... You probably weren't looking for this.
                </h1>
                <p>            
                We've changed the documentation to serve you better and we might have broken this link: {currentLocation} 
                </p>
                <p> 
                If you got here following one of our links, please report the broken link
                <a href="https://github.com/dappnode/DAppNodeDocs/issues/new/choose" className="link"> here</a>.
                </p>
                <a href="/" className="link">Back to homepage</a>
              </div>
            </div>
          </div>
       
      </Layout>;
  }
  
  export default NotFound;