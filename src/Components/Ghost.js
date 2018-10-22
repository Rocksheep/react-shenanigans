import React, {Component} from 'react';

class Ghost extends Component {
    render() {
        return <div className="ghost-box">
            <div className="ghost">
                <div className="mouth"></div>
            </div>
            <div className="ghost-bottom">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    }
}

export default Ghost;