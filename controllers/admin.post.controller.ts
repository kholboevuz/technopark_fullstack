import bcrypt from 'bcryptjs'
import { NextFunction, Request, Response } from 'express'
import { User } from '../models/users.models'
declare module 'express-session' {
    interface SessionData {
        data: any; 
    }
}


export const authKeyFile = async (req:Request, res: Response, next: NextFunction) => {
    try {
        
     if(!req.body.token || !req.body.password){
        return res.redirect('/admin/login?error=1')
     }else{

        interface RequestBody {
            token: string,
            password: string
        }

        const {token, password} = req.body as RequestBody

        const user = await User.findOne({ password: token });

        if (!user) {
            return res.redirect('/admin/login?error=1');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            req.session.data = user;
            return res.redirect('/admin/home');
        } else {
            return res.redirect('/admin/login?error=1');
        }

     }
             
    } catch (error) {
        // Handle errors
        console.error('Error in authKeyFile:', error);
        return next(error);
    }
};

export 
const adminAddUsercontroller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const generateToken = (): string => {
        return Math.random().toString(36).substr(2); 
    };

    const token: string = generateToken();
    
    interface RequestBody {
        fullname: string;
        position: string;
        phonenumber: number;
        password: string;
        status: number;
    }
    
    const { fullname, position, phonenumber, password, status } = req.body  as unknown as RequestBody;

    try {
        const addUser = await User.create({
            fullname,
            position,
            phonenumber,
            password,
            status,
            tokens: token
        });

        console.log(addUser);
        
        res.redirect('./admin/admins');
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};








   // const file = req.file;
        // const password = req.body.password;

        // // Check if file and password are provided
        // if (!file || !password) {
        //     return res.redirect('/admin/login?error=1');
        // }

        // // Parse JSON data from file buffer
        // const jsonData = JSON.parse(file.buffer.toString());

        // // Check if tokens exist in JSON data
        // if (!jsonData.tokens) {
        //     return res.redirect('/admin/login?error=1');
        // }

        // // Find user by password (assuming password is unique)
        // const user = await User.findOne({ password: jsonData.tokens });

        // // Check if user exists
        // if (!user) {
        //     return res.redirect('/admin/login?error=1');
        // }

        // // Compare passwords
        // const passwordMatch = await bcrypt.compare(password, user.password);

        // // If passwords match, redirect to home page
        // if (passwordMatch) {
        //     req.session.data = user;
        //     return res.redirect('/admin/home');
        // } else {
        //     // If passwords don't match, redirect to login page with error
        //     return res.redirect('/admin/login?error=1');
        // }