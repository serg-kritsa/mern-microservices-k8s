const user1 = { name: 'User 1'}
JSON.stringify(user1) // "{\"name\":\"User 1\"}"

const user2 = { name: 'User 2', toJSON(){return 1}}
JSON.stringify(user2) // "1"