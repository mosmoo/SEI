//Destructing so you pull only the router functionalitty ourt of express
import { Router } from "express";
import charactersRoutes from './characters.js'

//Call the router
const router = Router();


router.get ('/', (req,res)=> res.send('this is the api root'))
router.use("/Akatsuki", charactersRoutes);


export default router