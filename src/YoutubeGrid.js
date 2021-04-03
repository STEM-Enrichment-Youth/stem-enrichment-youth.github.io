import React from 'react';

import youtubeIcon from "./youtubeIcon.png";

import "YoutubeGrid.css";

export default function YoutubeGrid() {
    return (
        <div className="videos-container">
            <div>
                <ul className="videos-list">
                    {/* Ensure that the iframe don't have any sizes specified! */}
                    <li className="video">
                        <iframe src="https://www.youtube.com/embed/B-RJqKaOC-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen;"></iframe>
                    </li>
                    <li className="video">
                        <iframe src="https://www.youtube.com/embed/YKghpqDPLhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen;"></iframe>
                    </li>
                    <li className="video">
                        <iframe src="https://www.youtube.com/embed/18Zl0X_Am0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen;"></iframe>
                    </li>
                    <li className="video">
                        <iframe src="https://www.youtube.com/embed/uXI6IM8D4pI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen;"></iframe>
                    </li>
                </ul>
            </div>
            <div className="icon-container">
                <a href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w" target="_blank">
                    <img className="youtube-icon" src={youtubeIcon} alt="Youtube Icon" />
                </a>
            </div>
        </div >
    )
}
