import React from 'react';

export default function Profile({ user: { picture, nickname } }) {
    return (
        <>
            <div className='w-10 h-10'>
                <img src={picture} alt={nickname} className='rounded-full border border-gray-100' />
            </div>
        </>
    );
}