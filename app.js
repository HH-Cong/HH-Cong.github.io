document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    
    // Build the complete webpage
    app.innerHTML = `
        ${WebsiteComponents.createHeader(personalInfo, navigation)}
        ${WebsiteComponents.createAboutSection(personalInfo)}
        ${WebsiteComponents.createEducationSection(education)}
        ${WebsiteComponents.createResearchSection(research)}
        ${WebsiteComponents.createEventsSection(events)}
        ${WebsiteComponents.createCollaboratorsSection(collaborators)}
        ${WebsiteComponents.createLinksSection(links)}
        ${WebsiteComponents.createFooter(personalInfo)}
    `;
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Utility function to add new items easily
const WebsiteManager = {
    addPublication: function(publication) {
        research.publications.unshift(publication);
        this.refreshResearchSection();
    },
    
    addEvent: function(event, isUpcoming = false) {
        if (isUpcoming) {
            events.upcoming.push(event);
        } else {
            events.past.unshift(event);
        }
        this.refreshEventsSection();
    },
    
    addCollaborator: function(name, category) {
        if (collaborators[category]) {
            collaborators[category].push(name);
            this.refreshCollaboratorsSection();
        }
    },
    
    addLink: function(link) {
        links.push(link);
        this.refreshLinksSection();
    },
    
    refreshResearchSection: function() {
        const section = document.getElementById('research');
        section.outerHTML = WebsiteComponents.createResearchSection(research);
    },
    
    refreshEventsSection: function() {
        const section = document.getElementById('events');
        section.outerHTML = WebsiteComponents.createEventsSection(events);
    },
    
    refreshCollaboratorsSection: function() {
        const section = document.getElementById('collaborators');
        section.outerHTML = WebsiteComponents.createCollaboratorsSection(collaborators);
    },
    
    refreshLinksSection: function() {
        const section = document.getElementById('links');
        section.outerHTML = WebsiteComponents.createLinksSection(links);
    }
};