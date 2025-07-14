'''
Written by Eric Guo, TJ' 2026, on July 13, 2025

With modifications by:
- Add contributor name and graduation year here

Please see README.md in this same folder for information

Tested with Python 3.12.3
'''

# Template beginning

template_beginning = '''<!DOCTYPE html>
<html>
  <head>
    <title>TJHSST Botball</title>

    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="gallery.css" />
    <link rel="icon" type="image/x-icon" href="img/favicon.png" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
      rel="stylesheet"
    />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
    <div id="topbar">
      <img id="topbar-logo" src="img/botball.svg" />
      <div id="topbar-text-wrapper">
        <h1>TJHSST Botball</h1>

        <div id="topbar-link-wrapper">
          <a href="/">Home</a>
          <a href="team.html">Team</a>
          <a href="gallery.html">Gallery</a>
          <a href="https://github.com/TJHSST-Botball-Org">Github</a>
          <a href="apply.html">Apply</a>
        </div>
      </div>
    </div>'''

template_end = '''  </body>
</html>
'''

image_tag = '        <img src="{filename}" />\n'

section_block = '''    <h1>{section_name}</h1>
    <div class="photo-wrapper">
{image_tags}
    </div>'''

import os 

def confirm(message: str):
    '''Asks the user for confirmation to continue, and quits if No'''
    got_answer = False
    while not got_answer:
        print()
        print(message)
        answer = input('Please enter Y for yes to continue, and N to quit the program. ')

        if answer.upper().strip() == 'Y':
            return
        elif answer.upper().strip() == 'N':
            quit()
        else:
            print('Please enter exactly either Y or N.')

dir_path = os.path.dirname(os.path.realpath(__file__))

confirm(f'Working with images in `{dir_path}`. Is this correct?')

# Get the folders, which will be used as section names
# In addition, get the files in the folders

# Key: folder name
# Value: file name
folders_and_images: dict[str, list[str]] = {}

for filename in os.listdir(dir_path):
    path_of_file = os.path.join(dir_path, filename)
    if not os.path.isfile(path_of_file):
        # Not file, so should be a folder
        
        folders_and_images[filename] = []

        # Look inside of the folder, add images inside
        for image in os.listdir(path_of_file):
            if os.path.isfile(os.path.join(path_of_file, image)):
                folders_and_images[filename].append(image)

        folders_and_images[filename] = sorted(folders_and_images[filename])

# Get the folder names, and sort them
sorted_folder_names = sorted(folders_and_images.keys(), reverse=True)

print(f'I see the following images in `{dir_path}`:')
print()
for folder in sorted_folder_names:
    image_list = folders_and_images[folder]

    print(f'{folder} ({len(image_list)} images)')

    for image in image_list:
        print(f'    img/gallery/{folder}/{image}')

confirm(f'Is this correct?')

# Generate the HTML file

output = template_beginning
for folder in sorted_folder_names:
    image_list = folders_and_images[folder]

    image_tags = ''

    for image in image_list:
        image_tags += image_tag.format(filename=f'img/gallery/{folder}/{image}')

    block = section_block.format(section_name=folder, image_tags=image_tags)

    output += block+'\n'

output += template_end

output_file = open(f'{dir_path}/gallery.html', 'w')

output_file.write(output)

output_file.close()

print(f'Written to {dir_path}/gallery.html.')