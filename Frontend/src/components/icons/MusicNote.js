import React from 'react';

const MusicNote = ({size}) => {

    const fill = '#7f7f7f';

    return(
        <svg role="img" height={size} width={size} aria-hidden="true" data-testid="playlist" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL">
            <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z" fill={fill}></path>
        </svg>
    )
}

export default MusicNote