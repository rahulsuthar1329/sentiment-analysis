import nodemailer from "nodemailer";
import { config } from "dotenv";
import handlebars from "handlebars";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});

const viewsDir = path.join(__dirname, "../views/sample.hbs");

const templateContent = fs.readFileSync(viewsDir, "utf8");

const compiledTemplate = handlebars.compile(templateContent);

export const sendOtpToMail = async (to, otp) => {
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to,
    subject: "GenieCart Verification Code",
    html: compiledTemplate({ otp }),
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    console.log("directory : ", __dirname);
    return response;
  } catch (error) {
    console.log("Error while sending otp : ", error);
  }
};
