import express, { Request, Response } from 'express';

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configuration();
    this.routes();
  }

  /**
   * Method to configure the server,
   * If we didn't configure the port into the environment
   * variables it takes the default port 3000
   */
  public configuration() {
    this.app.set('port', process.env.PORT || 8081);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static(__dirname));
  }

  /**
   * Method to configure the routes
   */
  public routes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.sendFile(__dirname, './index.html');
    });
  }

  /**
   * Used to start the server
   */
  public start() {
    const port = this.app.get('port');
    this.app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  }
}

const server = new Server(); // Create server instance
server.start(); // Execute the server
