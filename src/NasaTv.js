import React from 'react';
import Iframe from 'react-iframe'

class NasaTv extends React.Component {

    render() {
        return (
            <>
          <br></br><br></br><Iframe
                    url="https://www.youtube.com/embed/21X5lGlDOfg"
                    width="650px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
          />
          </>
        );
    }
}

export default NasaTv;