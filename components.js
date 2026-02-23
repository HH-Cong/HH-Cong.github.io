class WebsiteComponents {
    static createHeader(personalInfo, navigation) {
        const navItems = navigation.map(item => 
            `<a href="${item.href}" class="nav-link">${item.text}</a>`
        ).join('');

        return `
            <header>
                <nav>
                    <div class="nav-brand">
                        <h1>${personalInfo.name}</h1>
                        <p class="title">${personalInfo.title}</p>
                    </div>
                    <div class="nav-links">
                        ${navItems}
                    </div>
                </nav>
            </header>
        `;
    }

    static createAboutSection(personalInfo) {
        return `
            <section id="about">
                <div class="about-container">
                    <div class="about-text">
                        <h2>About Me</h2>
                        <p>${personalInfo.bio}</p>
                        
                        <div class="contact-info">
                            <p><strong>Email:</strong> <a href="mailto:${personalInfo.email}">${personalInfo.email}</a></p>
                            <p><strong>Office:</strong> ${personalInfo.office}</p>
                            <p><strong>Phone:</strong> ${personalInfo.phone}</p>
                        </div>
                        
                        <div class="links">
                            <a href="${personalInfo.cvLink}" target="_blank" class="btn">Download CV (PDF)</a>
                        </div>
                    </div>
                    <div class="about-image">
                        <img src="${personalInfo.photo}" alt="${personalInfo.name}">
                    </div>
                </div>
            </section>
        `;
    }

    static createEducationSection(education) {
        const degreesList = education.degrees.map(degree => 
            `<li><strong>${degree.degree}</strong> - ${degree.institution} (${degree.year})</li>`
        ).join('');

        const additionalList = education.additional.map(item => 
            `<li><strong>${item.type}:</strong> ${item.name} (${item.year})</li>`
        ).join('');

        return `
            <section id="education">
                <h2>Education & Experience</h2>
                <ul>
                    ${degreesList}
                </ul>
                
                <h3>Additional Training & Experience</h3>
                <ul>
                    ${additionalList}
                </ul>
            </section>
        `;
    }

    static createResearchSection(research) {
        const publicationsList = research.publications.map((pub, index) => {
            let citation = `${pub.title}.`;
            
            // Add journal info first if available
            if (pub.journal) {
                citation += ` ${pub.journal}.`;
            }
            
            // Add journal link if available
            if (pub.journalUrl) {
                citation += ` <a href="${pub.journalUrl}" target="_blank">[Journal]</a>`;
            }
            
            // Add submitted status if applicable
            if (pub.status && !pub.journal) {
                citation += ` (${pub.status}).`;
            }
            
            // Add arXiv link at the end if available
            if (pub.arxiv) {
                citation += ` <a href="${pub.url}" target="_blank">arXiv: ${pub.arxiv}</a>`;
            }
            
            //return `<li>Hu, H. et al. ${citation}</li>`;
            return `<li>${citation}</li>`;
        }).join('');

        const highlightsList = research.highlights.map(highlight => `
            <div class="research-highlight">
                <h3>${highlight.title}</h3>
                <div class="description">
                    ${highlight.description}
                </div>
                <div class="figure">
                    <img src="${highlight.image}" alt="${highlight.title}">
                </div>
            </div>
        `).join('');

        return `
            <section id="research">
                <h2>Research Interests</h2>
                <p>${research.interests}</p>
                
                <h3>Selected Publications</h3>
                <ol class="publication-list">
                    ${publicationsList}
                </ol>
                
                <h2>Research Highlights</h2>
                <div class="highlights-container">
                    ${highlightsList}
                </div>
            </section>
        `;
    }

    static createEventsSection(events) {
        const upcomingList = events.upcoming.length > 0 ? 
            events.upcoming.map(event => {
                const url = event.url ? `<a href="${event.url}" target="_blank">${event.title}</a>` : event.title;
                return `<li><strong>${url}</strong> (${event.type}) - ${event.date}</li>`;
            }).join('') : '<li>No upcoming events</li>';

        const pastList = events.past.map(event => {
            const url = event.url ? `<a href="${event.url}" target="_blank">"${event.title}"</a>` : `"${event.title}"`;
            const note = event.note ? ` <em>(${event.note})</em>` : '';
            return `<li>${url} at <strong>${event.event}</strong> (${event.type}), ${event.date}, ${event.location}${note}</li>`;
        }).join('');

        return `
            <section id="events">
                <h2>Events & Presentations</h2>
                
                <h3>Upcoming Events</h3>
                <ul>
                    ${upcomingList}
                </ul>
                
                <h3>Past Presentations</h3>
                <ul>
                    ${pastList}
                </ul>
            </section>
        `;
    }

    static createCollaboratorsSection(collaborators) {
        const jspsList = collaborators.jsps.map(name => `<li>${name}</li>`).join('');
        const internationalList = collaborators.international.map(name => `<li>${name}</li>`).join('');

        return `
            <section id="collaborators">
                <h2>Collaborators</h2>
                
                <h3>JSPS Collaborators</h3>
                <ul>
                    ${jspsList}
                </ul>
                
                <h3>International Collaborators</h3>
                <ul>
                    ${internationalList}
                </ul>
            </section>
        `;
    }

    static createLinksSection(links) {
        const linksList = links.map(link => 
            `<li><a href="${link.url}" target="_blank">${link.title}</a></li>`
        ).join('');

        return `
            <section id="links">
                <h2>Useful Links</h2>
                <ul>
                    ${linksList}
                </ul>
            </section>
        `;
    }

    static createFooter(personalInfo) {
        return `
            <footer>
                <p>&copy; 2025 ${personalInfo.name}. All rights reserved.</p>
            </footer>
        `;
    }
}