User management and roles
---
* [ ] The platform / portal has a super user, who has the privilege to administer any users' privileges and roles
* [ ] Portal contains several organizations
* [ ] Each organization has an administrator, who can manage other users' roles and privileges
* [ ] An organization has several departments
* [ ] Each department has 1 or more administrators, who manage the services of that department and the user 
rights for the users belonging to that department
* [ ] Each service has a product owner (PO), who manages the service. PO cannot issue admin rights to other 
users except for the service in question. PO decides which parts of service description and sections are public.
PO defines data sources (Github repositories, JIRA access etc.)
* [ ] One individual user can be on several levels, for example both a department administrator and organization administrator

Views
---

### Default view (anonymous user)
* [ ] Title: Service development monitoring
* [ ] Search field, in which you can search for services
  * [ ] Search result displayed as the newest public services in development phase (PO decides whether services are public or not).
  Link to the service view.
* [ ] Catalog of organizations, included in the portal. Each organization must have a name and a logo, from which there is a link 
to the organization view. For each organization, the following information must also be provided (along with a link to the 
organization view for each of these):
  * [ ] nr of ideas
  * [ ] nr of services in planning (regardless of whether they are public or not)
  * [ ] nr of services in development
  * [ ] nr of services in production
  * [ ] nr of services to be removed/deprecated
  * [ ] nr of removed/deprecated services
  
  ### Organization view (registered user, who is a member of the organization in question)
* [ ] name of the organization at the top of the view
* [ ] Name of the organization administrator and a link to a profile, which containts contact information
* [ ] User must be able to filter view according to the status/phase of service. Must not be implemented as drop-down menu. Could for instance be tags side by side and selecting which states/filters are active (should be possible to select more than one) and hence which projects are listed. Show only services defined public by PO.
* [ ] User must be able to filter view to contain selected departments and their services. Show only services defined public by PO.
* [ ] PO's will decide which services are public and which are shown only inside an organization. Visibility cannot be limited by department, only by organization.

### Department view (registered user, who is a member of the organization in question)
* [ ] user must be able to filter view according to service status / phase

### Service detail view (registered user, who is a member of the organization in question)
* [ ] Note: At some point, part of the data can be requested through Digipalvelutehdas API
* [ ] Buttons for sharing through social media
* [ ] Service name
* [ ] Service status (phase)
* [ ] Name of PO, from which there is a link to a profile, which contains contact information
* [ ] List of data sources, e.g. Github repositories with link(s)
* [ ] Level of visibility of projects: public, limited to organization members, private
* [ ] Name of the organization responsible for service (with link to organization view)
* [ ] Name of the department responsible for service (with link to department view)
* [ ] Description/vision/purpose of project (max 500 characters)
* [ ] Service logo (if no logo is available, use a default logo)
* [ ] From each data source its own section, where there are visualised representations of the status:
  * [ ] For example, from Github there should be graphs and visualisation of the data available. One example is number of
  committers (sum of committers from different repos) and the change in time
* [ ] registered users can comment the service view (also if they are outside organization)
* [ ] Change history as a list (time and title of change, same logic as in Github commit change history)

### Service summary view (registered user)
* [ ] Status / phase: idea, planning, development, maintenance, to be deprecated/removed, removed/deprecated
* [ ] Description
* [ ] PO and contact information (email, organization, department, phone number), link to profile
* [ ] Data sources and the rights to them (Github, JIRA etc.)
* [ ] Name of organization responsible for service
* [ ] Name of department responsible for service

### Service summary view (PO)
Anything in the registered user view with the following additions:
* [ ] Option to change the status / phase
* [ ] Icon that allows edit text in place. (Must not open a separate editing form)

# API (to be continued)
The portal must contain an open API. There must be a machine-readable Swagger 2.0 description of the API and the documentation must be generated from this. API management takes place in APIKA service. API must be CORS enabled.

## Preliminary list of API endpoints
* [ ] List organizations. Content:
  * [ ] Organization name
  * [ ] Organization id in this portal
  * [ ] API endpoint URL for getting departments as JSON
  * [ ] Logo url
  * [ ] Name of organization adminisrator and API endpoint for getting profile as JSON
* [ ]  List departments of a particular organization
  * [ ] Organization name
  * [ ] Organization logo url
  * [ ] Name of organization administrator and API endpoint for getting profile as JSON
  * [ ] List of departments, which must contain the following
    * [ ] Name of department
    * [ ] Name of department administrator and API endpoint for getting profile as JSON
    * [ ] Name of department and  and API endpoint for getting department information as JSON
* [ ] List all organizations
* [ ] List users: profiles are public for name, organization and department, links to profiles
* [ ] List services: must be possible to filter by state/phase, organization and department (like search). Only display the following information for the services defined as public by PO:
  * [ ] Name of service
  * [ ] Creation date of service
  * [ ] The date and time of last edit for service (ISO standard format for date and time)
  * [ ] URL of the service in the dashboard
  * [ ] Organization responsible for service
  * [ ] Name of PO of service and Api endpoint for getting the user profile
  * [ ] Organization logo url
  * [ ] Department responsible for service
  * [ ] Status/phase of service
  * [ ] Description of service
  * [ ] Data sources related to service development, e.g. link to repository, name of repository

### Each development project for a service
* [ ] One part of each service is that somewhere the is a definition / description of the essence of each project that has been created using Lean Canvas. Hence, there is no traditional project plan, which is followed, but the starting point for planning is Lean Canvas. This could be implemented in the service data that is filled by PO: each Lean Canvas field a header and a text field for content. It is not required that the content could be displayed as an actual canvas at this point.
