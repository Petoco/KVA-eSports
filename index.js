const { Client , MessageEmbed, Intents, MessageButton, MessageActionRow, ButtonInteraction } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

const foto = "https://media.discordapp.net/attachments/734844209839996960/1011009131714445332/unknown.png?width=702&height=702";
const color = "#ff0065";

client.on("ready", () => {

    console.log("Bot ON, loged by " + client.user.username);

    client.user.setActivity({
        name: "KVA Esports",
        type: "PLAYING"
    })

});

client.on("messageCreate", async ( message ) => {

    const prefix = "!";
    const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if(!message.content.startsWith("!")) return;

    if(command === "say"){
        if(message.member.roles.cache.some(r => r.id === "1010664771139420331")){
            const embed = new MessageEmbed()
            .setDescription(args.join(' '))
            .setColor(color)
            .setFooter({ text: "Sistema de Comunicados | KVA eSports"})
            message.channel.send({ embeds: [embed]})
        }
    }
    if(command === "rangos"){
        message.delete();
        if(message.member.roles.cache.some(r => r.id === "1010664771139420331")){
            const rangos = new MessageEmbed()
                .setTitle("Rangos Valorant")
                .setDescription(`> Buenas! *Quieres buscar equipo de tu nivel?*
                > 
                > Tan solo dale click aqui abajo para asignarte un rol para tu rango
                > de valorant. :arrow_down:
                > 
                > 🟠 - Radiante
                > 🔴 - Immortal
                > 🟢 - Ascendete
                > 🟣 - Diamante
                > 🔵 - Platino
                > 🟡 - Oro
                > ⚪ - Plata
                > 🟤 - Bronce
                > ⚫ - Hierro`)
                .setColor(color)
                .setThumbnail(foto)
                .setFooter({ text: "Sistema de Roles | KVA eSports"})
                message.channel.send({ embeds: [rangos]}).then((pog) => {
                    pog.react("🟠"),
                    pog.react("🔴"),
                    pog.react("🟢"),
                    pog.react("🟣"),
                    pog.react("🔵"),
                    pog.react("🟡"),
                    pog.react("⚪"),
                    pog.react("🟤"),
                    pog.react("⚫")
                })
                client.on("messageReactionAdd", async (reaction, user) => {

                    if(reaction.client.user === user) return;
                    
                    if(reaction.emoji.name === "🟠"){

                        const rol = reaction.message.guild.roles.cache.get("1010678535721074738")

                        await reaction.message.guild.members.cache.get(user.id).roles.add(rol);

                    }
                    if(reaction.emoji.name === "🔴"){

                        const rol = reaction.message.guild.roles.cache.get("1010678367487537203")

                        await reaction.message.guild.members.cache.get(user.id).roles.add(rol);
                        
                    }
                    if(reaction.emoji.name === "🟢"){

                        const rol = reaction.message.guild.roles.cache.get("1010678195525275688")

                        await reaction.message.guild.members.cache.get(user.id).roles.add(rol);

                    }
                    if(reaction.emoji.name === "🟣"){

                        const rol = reaction.message.guild.roles.cache.get("1010677979883503626")

                        await reaction.message.guild.members.cache.get(user.id).roles.add(rol);
                        
                    }
                    if(reaction.emoji.name === "🔵"){

                        const rol = reaction.message.guild.roles.cache.get("1010677833250635958")

                        await reaction.message.guild.members.cache.get(user.id).roles.add(rol);
                        
                    }
                    if(reaction.emoji.name === "🟡"){

                        const rol = reaction.message.guild.roles.cache.get("1010677674261352518")

                        await reaction.message.guild.members.cache.get(user.id).roles.add(rol);
                        
                    }
                    if(reaction.emoji.name === "⚪"){

                        const rol = reaction.message.guild.roles.cache.get("1010677403703591013")

                        await reaction.message.guild.members.cache.get(user.id).roles.add(rol);
                        
                    }
                    if(reaction.emoji.name === "🟤"){

                        const rol = reaction.message.guild.roles.cache.get("1010677212124565545")

                        await reaction.message.guild.members.cache.get(user.id).roles.add(rol);
                        
                    }
                    if(reaction.emoji.name === "⚫"){

                        const rol = reaction.message.guild.roles.cache.get("1010676631947444346")

                        await reaction.message.guild.members.cache.get(user.id).roles.add(rol);
                        
                    }
                });
                client.on("messageReactionRemove", async (reaction, user) => {

                    if(reaction.client.user === user) return;
                    
                    if(reaction.emoji.name === "🟠"){

                        const rol = reaction.message.guild.roles.cache.get("1010678535721074738")

                        await reaction.message.guild.members.cache.get(user.id).roles.remove(rol);

                    }
                    if(reaction.emoji.name === "🔴"){

                        const rol = reaction.message.guild.roles.cache.get("1010678367487537203")

                        await reaction.message.guild.members.cache.get(user.id).roles.remove(rol);
                        
                    }
                    if(reaction.emoji.name === "🟢"){

                        const rol = reaction.message.guild.roles.cache.get("1010678195525275688")

                        await reaction.message.guild.members.cache.get(user.id).roles.remove(rol);

                    }
                    if(reaction.emoji.name === "🟣"){

                        const rol = reaction.message.guild.roles.cache.get("1010677979883503626")

                        await reaction.message.guild.members.cache.get(user.id).roles.remove(rol);
                        
                    }
                    if(reaction.emoji.name === "🔵"){

                        const rol = reaction.message.guild.roles.cache.get("1010677833250635958")

                        await reaction.message.guild.members.cache.get(user.id).roles.remove(rol);
                        
                    }
                    if(reaction.emoji.name === "🟡"){

                        const rol = reaction.message.guild.roles.cache.get("1010677674261352518")

                        await reaction.message.guild.members.cache.get(user.id).roles.remove(rol);
                        
                    }
                    if(reaction.emoji.name === "⚪"){

                        const rol = reaction.message.guild.roles.cache.get("1010677403703591013")

                        await reaction.message.guild.members.cache.get(user.id).roles.remove(rol);
                        
                    }
                    if(reaction.emoji.name === "🟤"){

                        const rol = reaction.message.guild.roles.cache.get("1010677212124565545")

                        await reaction.message.guild.members.cache.get(user.id).roles.remove(rol);
                        
                    }
                    if(reaction.emoji.name === "⚫"){

                        const rol = reaction.message.guild.roles.cache.get("1010676631947444346")

                        await reaction.message.guild.members.cache.get(user.id).roles.remove(rol);
                        
                    }
                });
        }
    }
    if(command === "regiones"){
        if(message.member.roles.cache.some(r => r.id === "1010664771139420331")){
            const embed = new MessageEmbed()
            .setTitle("Regiones")
            .setDescription(`> Quieres encontrar gente de tu región? 
            > 
            > Dale click aquí abajo para seleccionarla ! 👇 
            > 
            > 🇪🇺 Europa
            > 🇲🇽 Latam
            > 🇺🇸 NA
            > 🇦🇺 Oceanía
            > 🇨🇳 Asía

            ||@everyone||`)
            .setColor(color)
            .setThumbnail(foto)
            .setFooter({ text: "Sistema de Roles | KVA eSports"})
            message.channel.send({ embeds: [embed]}).then((pog) => {
                pog.react("🇪🇺"),
                pog.react("🇲🇽"),
                pog.react("🇺🇸"),
                pog.react("🇦🇺"),
                pog.react("🇨🇳")
            })
            client.on("messageReactionAdd", async (reaction, user) => {
                if(reaction.client.user === user) return;

                if(reaction.emoji.name === "🇪🇺"){

                    const rol = reaction.message.guild.roles.cache.get("1013483153018585101");

                    await reaction.message.guild.members.cache.get(user.id).roles.add(rol)
                }
                if(reaction.emoji.name === "🇲🇽"){

                    const rol = reaction.message.guild.roles.cache.get("1013488563674939473");

                    await reaction.message.guild.members.cache.get(user.id).roles.add(rol)
                }
                if(reaction.emoji.name === "🇺🇸"){

                    const rol = reaction.message.guild.roles.cache.get("1013483748530077816");

                    await reaction.message.guild.members.cache.get(user.id).roles.add(rol)
                }
                if(reaction.emoji.name === "🇦🇺"){

                    const rol = reaction.message.guild.roles.cache.get("1013484143142768692");

                    await reaction.message.guild.members.cache.get(user.id).roles.add(rol)
                }
                if(reaction.emoji.name === "🇨🇳"){

                    const rol = reaction.message.guild.roles.cache.get("1013484480176078898");

                    await reaction.message.guild.members.cache.get(user.id).roles.add(rol)
                }
            })
            client.on("messageReactionRemove", async (reaction, user) => {
                if(reaction.client.user === user) return;

                if(reaction.emoji.name === "🇪🇺"){

                    const rol = reaction.message.guild.roles.cache.get("1013483153018585101");

                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rol)
                }
                if(reaction.emoji.name === "🇲🇽"){

                    const rol = reaction.message.guild.roles.cache.get("1013488563674939473");

                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rol)
                }
                if(reaction.emoji.name === "🇺🇸"){

                    const rol = reaction.message.guild.roles.cache.get("1013483748530077816");

                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rol)
                }
                if(reaction.emoji.name === "🇦🇺"){

                    const rol = reaction.message.guild.roles.cache.get("1013484143142768692");

                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rol)
                }
                if(reaction.emoji.name === "🇨🇳"){

                    const rol = reaction.message.guild.roles.cache.get("1013484480176078898");

                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rol)
                }
            })
        }
    }
});

client.login("");