
import CryptoJS from 'crypto-js';
import bcrypt from 'bcryptjs';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { encryptedUsername, encryptedPassword } = req.body;
//     const username = CryptoJS.AES.decrypt(encryptedUsername, 'secret_key').toString(CryptoJS.enc.Utf8);
//     const password = CryptoJS.AES.decrypt(encryptedPassword, 'secret_key').toString(CryptoJS.enc.Utf8);

//     // Here you would query your database to get the hashed password for the given username
//     const hashedPasswordFromDb = '...'; // Retrieve hashed password from your database

//     // Compare hashed password from database with the hashed password provided by the user
//     const match = await bcrypt.compare(password, hashedPasswordFromDb);

//     if (match) {
//       res.status(200).json({ message: 'Login successful' });
//     } else {
//       res.status(401).json({ message: 'Login failed' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }


export async function POST(Request) {
  const data = await Request.json()
console.log("api hit hogayio",data)
  // const data = await res.json()
 
  return Response.json({ "bshbhdjbhdj":"dbvhdbbd" })
  // return true;
}