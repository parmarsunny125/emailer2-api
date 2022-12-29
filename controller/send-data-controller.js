import nodemailer from 'nodemailer';

export const sendData = async(req, res) => {
  console.log("send");
  const data = req.body.data;
   JSON.stringify(data)
 

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'parmarsunny125@gmail.com',
      pass: 'xwfwqukqtcftzkwn'
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'parmarsunny125@gmail.com',
    to: 'timepasste9@gmail.com',
    subject: 'Selected Data',
    html: `<h1>Table of Data</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Hobbies</th>
      </tr>
      ${data.map(d => `
            <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
            <td>${d[3]}</td>
            <td>${d[4]}</td>
          </tr>
        `).join('')}
      </table>`
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: 'Error sending email' });
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send({ message: 'Email sent successfully' });
    }
  });
};
