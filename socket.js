
let users = []; //users refers to both agents & customers

//for chat b/w agents & customers

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
};

//for updating Non alloted customers queries to all agent's side

const getAgents = () => {
    return users.filter((user) => { return user.userId.includes("A"); });
};

module.exports = function(io) {
    io.on("connection", function(socket) {
        //when connect
        console.log("a user connected.");

        //take userId and socketId from user
        socket.on("addUser", (userId) => {
            addUser(userId, socket.id);
            io.emit("getUsers", users);
        });

        //send and get message
        socket.on("sendMessage", ({ senderId, receiverId, text }) => {
            const user = getUser(receiverId);
            io.to(user.socketId).emit("getMessage", {
                senderId,
                text,
            });
        });

        //when disconnect
        socket.on("disconnect", () => {
            console.log("a user disconnected!");
            removeUser(socket.id);
            io.emit("getUsers", users);
        });

        //for New created query by customer
        socket.on("newQuery", ({ senderId, text }) => {
            const agents = getAgents();
            agents.forEach((user) => {
                io.to(user.socketId).emit("getNewQuery", {
                    senderId,
                    text,
                });
            });
        });
    });
};