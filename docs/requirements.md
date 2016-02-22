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
  
  ###
  
