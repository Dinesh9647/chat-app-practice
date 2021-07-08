const users = [];

// Add a new user
const addUser = ({id, username, room}) => {
    // Clean data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate the data
    if(!username || !room) {
        return {
            error: 'Username and room are required'
        };
    } 

    // Check if username already exists
    const existingUser = users.find((user) => (user.room === room && user.username === username));
    if(existingUser) {
        return {
            error: 'Username is already taken!'
        };
    }

    // Store user
    const user = {id, username, room};
    users.push(user);
    return {user};
}

// Remove an existing user
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if(index !== -1) {
        return users.splice(index, 1)[0];
    } 
}

// Find an existing user
const findUser = (id) => {
    return users.find((user) => (user.id === id));
}

// Get all users in a room
const findUsersInRoom = (room) => {
    return users.filter((user) => (user.room === room.trim().toLowerCase()));
}

module.exports = {
    addUser,
    removeUser,
    findUser,
    findUsersInRoom
}