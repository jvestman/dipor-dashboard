# Access control
- Roles
  - super user
  - organization admin
  - organization member
  - department admin
  - product owner
- Users

# Collections
- Users
- Roles
- Organizations
- Departments
- Services
- External data sources
  - E.g. Github, Jira

# Views
## Landing
### Access Control
- public

### Components
- public services
  - newest in development 
- search
  - input
  - results
    - organizations
    - services
- social media feed
- external sources

## Login
- ACL: public

### Components
- login form

## Dashboard
### Access Control
- Public: signed-in

### Components
- filter
- visualizations
  - allow quick comparison in multiple categories

## Organization
### Access Control
- Public: signed in
- Restricted: organization member
- Admin: organization administrator

### Components
#### Public
- public organization details
  - name
  - website
  - ...
- public services

#### Restricted
- all public components
- private organization details
  - departments
  - admins
- private services

#### Administrative
- All organization details
  - Inline editing 
- Member management
- Department management
- Service management

## Department
### Access Control
- Public: signed in
- Restricted: organization member
- Admin: department administrator

### Components
#### Public
- only public details
  - title
  - contact
  - ...

#### Organization member
- public details
- private details

#### Department admin
- public details
- private details
- inline edit

## Service
### Access Control
- Public: signed in
- Restricted: organization member
- Admin: product owner, superuser

### Components
#### Public
- only public details
  - title
  - contact
  - ...

#### Organization member
- public details
- private details

#### Product owner
- public details
- private details
- inline edit
- toggle visibility
  - public
  - organization only
  - private status
