import { Router } from "express";
import { allUser, userById } from "../controllers/cities/users/read.js";
import { register } from "../controllers/cities/users/registrer.js";
import  update  from "../controllers/cities/users/update.js";
import { deleteOne } from "../controllers/cities/users/delete.js";
import passport from "../middleware/passport.js";
import accountExists from "../middleware/accountExist.js";
import validator from "../middleware/validator.js"; 
import createHash from "../middleware/createHash.js";
import userSignUpSchema from "../schema/create.js";
import userUpdateSchema from "../schema/update.js";

const routerUsers = Router();

routerUsers.get("/all",passport.authenticate("jwt",{session:false}),allUser)
routerUsers.get('/:id',passport.authenticate("jwt",{session:false}),userById)
routerUsers.post("/register",validator(userSignUpSchema),accountExists,createHash, register)
routerUsers.put("/id",validator(userUpdateSchema),passport.authenticate("jwt",{session:false}),createHash, update);
routerUsers.delete("/deleteOne/:id",passport.authenticate("jwt",{session:false}), deleteOne);

export default routerUsers;