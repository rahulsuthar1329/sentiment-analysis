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

// Define the paths to your 'views' and 'images' directories
const viewsDir = path.join(__dirname, "../views/sample.hbs");
// const vector = path.join(__dirname, "../static/vector.png");
// const logo = path.join(__dirname, "../static/logo.png");

// Read the Handlebars template file
const templateContent = fs.readFileSync(viewsDir, "utf8");

// // Read the image file synchronously and encode it to Base64
// const vectorPath = path.resolve(vector, "vector.png");
// const vectorBase64 = fs.readFileSync(vector);

// // Read the image file synchronously and encode it to Base64
// const logoPath = path.resolve(logo, "logo.png");
// const logoBase64 = fs.readFileSync(logo);

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
