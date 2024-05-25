import { NextFunction, Request, Response } from 'express'
import { Choices } from '../models/choices.models'
import { Cooparition } from '../models/coomparation.models'
import { Directions } from '../models/directions.models'
import { Employs } from '../models/employes.modeles'
import { Events } from '../models/events.models'
import { International } from '../models/international.models'
import { Management } from '../models/management.models'
import { MediaPhoto } from '../models/mediaphoto.models'
import { MediaVideo } from '../models/mediavideo_models'
import { News } from '../models/news.models'
import { Slider } from '../models/slider.models'
import { User } from '../models/users.models'


export const DeleteController = async (req: Request, res: Response, next: NextFunction) => {
	interface RequestQuery {
    method: string;
    _id: string;
    url: string;
}

	try {
		
    const { method, _id , url} = req.query as unknown as RequestQuery;		

    let deleteData;

    switch (method) {
        case 'Slider':
            deleteData = await Slider.deleteOne({ _id });
            break;
        case 'News':
            deleteData = await News.deleteOne({ _id });
            break;
				case 'Choices':
            deleteData = await Choices.deleteOne({ _id });
            break;
				case 'Management':
						deleteData = await Management.deleteOne({ _id });
						break;
				case 'Employes':
						deleteData = await Employs.deleteOne({ _id });
						break;
				case 'International':
						deleteData = await International.deleteOne({ _id });
						break;
				case 'Cooparation':
						deleteData = await Cooparition.deleteOne({ _id });
						break;
				case 'Admin':
						deleteData = await User.deleteOne({ _id });
						break;
				case 'Directions':
						deleteData = await Directions.deleteOne({ _id });
						break;
				case 'MediaVideo':
						deleteData = await MediaVideo.deleteOne({ _id });
						break;
				case 'MediaPhoto':
						deleteData = await MediaPhoto.deleteOne({ _id });
						break;
			  case 'Events':
						deleteData = await Events.deleteOne({ _id });
						break;
        default:
            return res.status(400).json({ message: 'Invalid method' });
    }

    if (deleteData.deletedCount === 0) {
        return res.status(404).json({ message: 'Resource not found' });
    }

    return res.redirect(`/admin/${url}?success=true`);
	} catch (error) {
		next(error)
	}
};
