//Destructing so you pull only the router functionalitty ourt of express
import { Router } from "express";
import housesRoutes from './houses.js'
import charactersRoutes from './characters.js'

//Call the router
const router = Router();


router.get ('/', (req,res)=> res.send('this is the api root'))

router.use("/houses", housesRoutes);
router.use("/characters", charactersRoutes);


export default router