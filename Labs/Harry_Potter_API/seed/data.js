import db from '../db/connection.js'
import House from '../models/House.js'
import Character from '../models/Character.js'
import houses from './houses.json' assert {type:'json'}
import characters from './characters.json' assert {type:"json"}
import chalk from 'chalk'

//asynch/away is the new way of consuming promises rather than.then

const insertData = async ()=> {
    
    //reset database
    await db.dropDatabase()

    //Insert Data
    await Character.create(characters)
    await House.create(houses)

    console.log(chalk.magenta('Characters and Houses are created!'))

    //Close DB Connection
    await db.close();
}
insertData()