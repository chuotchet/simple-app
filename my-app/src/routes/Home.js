import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                Welcome to coin page
                <ul>
                    <li><a href="/chart">Bitcoin chart</a></li>
                    <li><a href="/table">Coins table</a></li>
                </ul>
            </div>
        );
    }
}

export default Home;
