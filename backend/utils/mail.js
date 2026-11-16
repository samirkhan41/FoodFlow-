import nodemailer from 'nodemailer'



// Create a transporter using SMTP

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const sendOtp = async (to, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject: "Your OTP for Password Reset",

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>Password Reset Request</h2>

        <p>Hello,</p>

        <p>
          We received a request to reset the password for your account.
          Please use the following One-Time Password (OTP) to continue:
        </p>

        <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; 
                    text-align: center; font-size: 28px; font-weight: bold; 
                    letter-spacing: 6px;">
          ${otp}
        </div>

        <p>
          This OTP is valid for <strong>5 minutes</strong> and can be used only once.
          For your security, please do not share this OTP with anyone.
        </p>

        <p>
          If you did not request a password reset, you can safely ignore this email.
        </p>

        <p>
          Regards,<br />
          <strong>Support Team</strong>
        </p>
      </div>`
  });
};