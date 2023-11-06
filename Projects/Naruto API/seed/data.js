import db from '../db/connection.js'
import Character from '../models/Character.js'
import characters from './character.json' assert {type:"json"}
import chalk from 'chalk'

const insertData = async ()=> {
    
    //reset database
    await db.dropDatabase()

    //Insert Data
    await Character.create(characters)

    console.log(chalk.magenta('New Akatsuki member added!'))

    //Close DB Connection
    await db.close();
}

insertData()