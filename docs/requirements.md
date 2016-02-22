User management and roles
---
* The platform / portal has a super user, who has the privilege to administer any users' privileges and roles
* Portal contains several organizations
* Each organization has an administrator, who can manage other users' roles and privileges
* An organization has several departments
* Each department has 1 or more administrators, who manage the services of that department and the user 
rights for the users belonging to that department
* Each service has a product owner (PO), who manages the service. PO cannot issue admin rights to other 
users except for the service in question. PO decides which parts of service description and sections are public.
PO defines data sources (Github repositories, JIRA access etc.)
* One individual user can be on several levels, for example both a department administrator and organization administrator

Views
---

### Default view (anonymous user)
* Title: Service development monitoring
* Search field, in which you can search for services
  * Search result displayed as the newest public services in development phase (PO decides whether services are public or not).
  Link to the service view.
* Catalog of organizations, included in the portal. Each organization must have a name and a logo, from which there is a link 
to the organization view. For each organization, the following information must also be provided (along with a link to the 
organization view for each of these):
  * nr of ideas
  * nr of services in planning (regardless of whether they are public or not)
  * nr of services in development
  * nr of services in production
  * nr of services to be removed/deprecated
  * nr of removed/deprecated services
  
  ### Organization view (registered user, who is a member of the organization in question)
* name of the organization at the top of the view
* Name of the organization administrator and a link to a profile, which containts contact information
* User must be able to filter view according to the status/phase of service. Must not be implemented as drop-down menu. Could for instance be tags side by side and selecting which states/filters are active (should be possible to select more than one) and hence which projects are listed. Show only services defined public by PO.
* User must be able to filter view to contain selected departments and their services. Show only services defined public by PO.
* PO's will decide which services are public and which are shown only inside an organization. Visibility cannot be limited by department, only by organization.
* 
### Department view (registered user, who is a member of the organization in question)
* user must be able to filter view according to service status / phase

### Service view (registered user, who is a member of the organization in question)
* Note: At some point, part of the data can be requested through Digipalvelutehdas API
* Buttons for sharing through social media
* Service name
* Service status (phase)
* Name of PO, from which there is a link to a profile, which contains contact information
* List of data sources, e.g. Github repositories with link(s)
* Level of visibility of projects: public, limited to organization members, private
* Name of the organization responsible for service (with link to organization view)
* Name of the department responsible for service (with link to department view)
* Description/vision/purpose of project (max 500 characters)
* Service logo (if no logo is available, use a default logo)
  
