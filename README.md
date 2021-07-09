# Megan McCarty Photography

This is a portfolio website for my photography. It contains a backend built with Django's REST Framework and a frontend built with React JS.

You can visit the live website here: https://www.meganmccartyphotography.com

You can also watch a [short walkthrough video](https://drive.google.com/file/d/1iMvGSrHqg1mS3Ny1H3tAG_77wstG3zPx/view?usp=sharing) of the project

## Get your own copy
To create your own copy of this project:
1. Fork this repo
2. Click the green 'Code' button at the top right and copy the link
3. In your terminal, navigate to the directory in which to clone the repo
4. Type `git clone <copied-link>` and hit enter
5. Type `cd photography/djangoreactphotography/frontend` and hit enter
6. Run `npm install`
7. Run `npm start`

The website should open up in a new browser tab at `http://localhost:3000`

### Configure the backend (optional)
If you want to use a blank, local database:
1. Navigate to the root directory (`cd ../..`)
2. Create a virtual environment: `python3 -m venv <your-virtual-env-name-here>`
3. Activate the virtual environment: `source <your-virtual-env-name-here>/bin/activate`
4. Run `pip install -r requirements.txt`
5. Update the `settings.py` file located in `photography/djangoreactphotography/djangoreactphotography`:
```
# Line below required to work locally -- uncomment it
from dotenv import load_dotenv

...

# Line below required to work locally -- uncomment it
load_dotenv(os.path.join(BASE_DIR, '.env'))

DEBUG = True

...

# Currently set to use gmail, change it if your email is not gmail
EMAIL_HOST = '<your-email-provider's-smtp>'
```

6. Create an `.env` file at the same level as the `manage.py` file, and add in the following info:
```
export SECRET_KEY=<django-secret-key>
export EMAIL=<your-email-address-to-receive-contact-form-message>
export EMAIL_PASSWORD=<your-email-address-password>
```
You can use a [Django secret key generator](https://djecrety.ir/) for the `SECRET_KEY` variable. Note that all of the values for the variables in the `.env` file are NOT in quotes

7. After configuring the above, navigate to `cd djangoreactphotography` (level with `manage.py` file)
8. Run `python manage.py makemigrations`
9. Run `python manage.py migrate`
10. Create a superuser by running `python manage.py createsuperuser` and follow the prompts
11. Finally, run `python manage.py runserver` (should be running on port 8000)

You can then update the fetch URLs in the React components (`ContactForm.js`, `HomeGallery.js`, and `PhotoContainer.js`) to point to `http://localhost:8000` instead of the live API. You can also log into the Django admin to add entries into the database (`http://localhost:8000/admin/`) using the credentials for the newly-created superuser; once you are logged in, you can also add entries by visiting the API endpoints (`http://localhost:8000/api/photos/` and `http://localhost:8000/api/categories/`).

## Features
* Custom context menu to prevent copying/downloading of photos
* Filter images by product availability
* Filter images by subcategory
* Product buttons dynamically rendered depending on an image's availability on external websites
* Fully functional contact form

## Resources Used
* Built with React JS and Django REST Framework
* Used [Bootstrap 4](https://getbootstrap.com/) for styling the contact form
* Used [lightgallery.js](https://www.lightgalleryjs.com/) for displaying images in a lightbox
* At one point, used Andrew Novikov's [stopStealPhoto.js](https://github.com/andymarch25/stopStealPhoto) jQuery code for implementing a custom context menu (served as inspiration for my own custom context menu using React JS)
