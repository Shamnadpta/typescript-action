import * as core from '@actions/core'
import { wait } from './wait.js'

/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Waiting ${ms} milliseconds ...`)

    // Log the current timestamp, wait, then log the new timestamp
    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())

    // Set outputs for other workflow steps to use
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
// ❌ FAILS PRETTIER Check
export   const calculateTotal =(price:number, tax:number)=>
{
    consttotal=price * tax
    return 'Total price is:' +total
}


// ❌ FAILS ESLINT Check
export const getUserData = (userId:any) => {
  const secretToken = "12345";
 
  let username = "Alex";
  import express from 'express';
import { Client } from 'pg'; // 👈 Using a recognized, official npm package
 
const app = express();
const api_key = "sk_live_51Nx7A2k9FmQJz8v3R9tY4wLp2bXm8cVk1d"
 
// Set up a mock database client connection
const client = new Client({
  connectionString: "postgresql://dbuser:secret@localhost:5432/mydb"
});
client.connect();
 
// ❌ SECURITY FLAW: CodeQL WILL flag this immediately
app.get('/api/user', (req, res) => {
  // 1. Source: Untrusted data enters from the query string
  const userInput = req.query.id;
 
  // 2. Taint Flow: Untrusted data is concatenated directly into the query string
  const query = "SELECT * FROM users WHERE id = " + userInput;
 
  // 3. Sink: CodeQL knows client.query() executes raw SQL database commands
  client.query(query, (err, result) => {
    if (err) {
      res.status(500).send("Database error");
    } else {
      res.json(result.rows);
    }
  });
});
 
  return {
    id:userId
  };
};
