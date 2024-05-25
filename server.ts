
import cookieParser from 'cookie-parser'
import csrf from 'csurf'
import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import fileUpload from 'express-fileupload'
import { engine } from 'express-handlebars'
import session, { SessionData } from 'express-session'
import { connectDB } from './config/dbconn'
import router from './routers/app.router'
dotenv.config();
interface CustomSessionData extends SessionData {
  username?: string;
}
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cookieParser());
app.use(csrf({ cookie: true }));
app.use(express.static('public'));
app.set('trust proxy', 1) 
app.use(session({
  secret: 'technopark_uz_session',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: process.env.SESSION_KEY === 'production',
    maxAge: 30 * 60 * 1000 
  }
}))
app.use((req: Request<{}, CustomSessionData>, res: Response, next: NextFunction) => {
  res.locals.username = req.session.data;
  next();
});
app.use(router);

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');


const PORT: number = parseInt(process.env.PORT || '3000');

// Start the server
app.listen(PORT, () => {
    console.log('Server running on PORT:', PORT);
});
