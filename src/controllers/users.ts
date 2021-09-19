import { Application, Request, Response } from "express";
import { UsersListInterface } from '../models/users/usersList.interface';
import cacheLocal from '../utils/cache_local';

export const loadControllerOffers = (app: Application): void => {
  app.get("/getUsers", async (req: Request, res: Response) => {
    try {
      
      return res.status(200).send(cacheLocal.get('usersLists'));

    } catch (error) {
      console.log(error)
      return res.status(500).json(error);
    }
    
  });

  app.post("/saveUsers", async(req: Request, res: Response) =>{
    try{

      const savedLists:Array<UsersListInterface> | undefined = cacheLocal.get('usersLists');
      const list:UsersListInterface = req.body;
      if(savedLists){
        savedLists.push(list);
        cacheLocal.set('usersLists', savedLists);
      }else{
        cacheLocal.set('usersLists', [list]);
      }

      return res.status(200).send(cacheLocal.get('usersLists'));;
      
    }catch(error){
      return res.status(500).json(error);
    }
    
  })

  
};
