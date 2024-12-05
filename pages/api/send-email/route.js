import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Handle GET requests (for testing)
  if (req.method === 'GET') {
    return res.status(200).json({ message: 'Hello, World!' });
  }

  // Handle POST requests (for sending emails)
  if (req.method === 'POST') {
    const { userCode, email } = req.body;

    // Validate input
    if (!userCode || !email) {
      return res.status(400).json({ message: 'User code and email are required.' });
    }

    // Set up the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'aamirsaleem1282@gmail.com',
        pass: 'ojts ripo drwv frmx', 
      },
    });

    const mailOptions = {
      from: 'aamirsaleem1282@gmail.com',
      to: email,
      subject: 'Test Email',
      text: `Your user code: ${userCode}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully!', info });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email.' });
    }
  }

  // If the method is neither GET nor POST, return 405 (Method Not Allowed)
  return res.status(405).json({ message: 'Method Not Allowed' });
}
