const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const { wow_armory, battle_net, discord, role, class: playerClass, spec, warcraft_logs, raiding_experience, why_join, handle_criticism, Additonal_Info, read_guild_charter_yes } = JSON.parse(
            event.body
        );

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Replace this with your email address to receive form submissions
            subject: 'New Raider Application',
            html: `
        <h1>New Raider Application</h1>
        <p><b>WoW Armory Link:</b> ${wow_armory}</p>
        <p><b>Battle.net Link:</b> ${battle_net}</p>
        <p><b>Discord @:</b> ${discord}</p>
        <p><b>Role:</b> ${role}</p>
        <p><b>Class:</b> ${playerClass}</p>
        <p><b>Specialization:</b> ${spec}</p>
        <p><b>Warcraft Logs:</b> ${warcraft_logs}</p>
        <p><b>Raiding Experience:</b> ${raiding_experience}</p>
        <p><b>Reason for Joining:</b> ${why_join}</p>
        <p><b>Can Handle Criticism and Feedback:</b> ${handle_criticism}</p>
        <p><b>Additional Info:</b> ${Additonal_Info}</p>
        <p><b>Read Guild Charter:</b> ${read_guild_charter_yes}</p>
      `,
        };

        const info = await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify(info),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' }),
        };
    }
};