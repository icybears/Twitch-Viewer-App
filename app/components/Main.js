import React from 'react';
import {Link} from 'react-router-dom';

function Main() {
    return (
        <div id="main-container">
            <h2>Get started with Twitch Viewer 1.0</h2>
            <main>
                <ul>
                    <li>
                        <Link to="/search">Search</Link> for your favorite twitch streamers and add them
                            to your watchlist.
                    </li>
                    <li>
                        Manage your <Link to="/watchlist">watchlist</Link> and keep up with all your favorite streamers !
                    </li>
                    <li>
                        Never miss out !
                    </li>
                    <li><a href="https://github.com/icybears/Twitch-Viewer-App">Github Repository</a></li>
                </ul>
            </main>
        </div>
    )
}

export default Main
