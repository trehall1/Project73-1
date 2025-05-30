export default async function handler(req, res) {
    if (req.method === "POST") {
      const { email } = req.body;
  
      if (!email || !email.includes("@")) {
        return res.status(400).json({ error: "Invalid email address" });
      }
  
      // Add logic to save the email to a database or send it to an email service
      console.log("New email for mailing list:", email);
  
      return res.status(200).json({ message: "Email added to mailing list" });
    }
  
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }