import React, { useState, useEffect } from 'react';

import Button from 'components/aria/Button';

import './LiveRegionRoles.css';

const CHAT_MEMBERS = [
  'Andrew',
  'Pete',
  'Hanna',
  'Kate',
  'Nick'
];

const LiveRegionRoles = () => {
  const [logEntries, setLogEntries] = useState(['']);
  const [chatMembers, setChatMembers] = useState([]);
  const [isLogStarted, setIsLogStarted] = useState(false);

  useEffect(() => {
    let interval;

    if (isLogStarted) {
      interval = setInterval(() => {
        setChatMembers(prevChatMembers => {
          const randomMemberIndex = Math.floor(Math.random() * 5);
          const randomMemberName = CHAT_MEMBERS[randomMemberIndex];
          const isMemberInTheRoom = prevChatMembers.includes(randomMemberName);

          setLogEntries(prevEntries => ([
            ...prevEntries,
            `${randomMemberName} has ${isMemberInTheRoom ? 'left' : 'joined'} the room.`
          ].slice(-20)));

          return isMemberInTheRoom
            ? prevChatMembers.filter(name => name !== randomMemberName)
            : [...prevChatMembers, randomMemberName];
        });
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    }
  }, [isLogStarted]);

  return (
    <>
      <h2 id='live-region-roles-title'>Live Region Roles</h2>
      <section aria-labelledby='live-region-roles-title'>
        <h3>Chat Room</h3>
        <div className='chat-room'>
          <ul
            aria-label='Room Log'
            className='chat-room-log'
          >
            {logEntries.map((entry, idx) => {
              const isLastElement = idx === logEntries.length - 1;

              return (
                <li
                  key={isLastElement ? 'latest' : idx}
                  aria-live={isLastElement ? 'polite' : null}
                >
                  {entry}
                </li>
              );
            })}
          </ul>
          <ul
            aria-label='Room Members'
            className='chat-room-members'
          >
            {chatMembers.map((entry, idx) => (
              <li key={idx}>
                {entry}
              </li>
            ))}
          </ul>
        </div>
        <Button
          onClick={() => setIsLogStarted(!isLogStarted)}
        >
          {isLogStarted ? 'Stop' : 'Start'} Logging
        </Button>
      </section>
    </>
  );
}

export default LiveRegionRoles;
