# Branch International Assignment - CS Messaging App

## How to run 

Both server & frontend App are hosted on:

- server: [https://cs-messaging-app-server.herokuapp.com](https://cs-messaging-app-server.herokuapp.com)
- client: [https://admirable-caramel-5b6f46.netlify.app](https://admirable-caramel-5b6f46.netlify.app)

### Running Locally

#### Clone repo 
    ```
    git clone https://github.com/Rachit-Goel/cs-messaging-app.git
    ```

#### To run Server
In the directory, "cs-messaging-app-master":

- Install all packages for the server, run command 
    ```
    npm install
    ```

- Then, to run server, run command
    ```
    npm start
    ```


#### To run Frontend - WebApp
- In another terminal, come inside the directory, "cs-messaging-app-master/client":
    ```
    cd client
    ```

- Install all packages for the client, run command 
    ```
    npm install
    ```

- In file- "cs-messaging-app-master/client/src/index.js" : 
    To use local server url - uncomment the line 11 and comment the line 9.

- Then, to run WebApp, run command
    ```
    npm start
    ```

## Additional implemented features
- Scheme to help agents divide work amongst themselves & to prevent multiple agents working on the same message at once.
- To surface messages that are more urgent and in need of immediate attention.
- Search functionality to allow agents to search over messages and customers.
- To surface additional information about customers.
- Using socket.io, so that new incoming messages can show up in real time.

