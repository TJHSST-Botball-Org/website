'''
Written by Eric Guo, TJ' 2026, on July 13, 2025

With modifications by:
- Madhav Tirumale, TJ' 2028 on September 7th, 2025

Please see README.md in this same folder for information

Tested with Python 3.12.3
'''

# Template beginning for TypeScript

template_beginning = '''// filepath: /Users/madhav/botball-blastoff/src/components/Gallery.tsx
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const galleryItems = [
'''

gallery_item_template = '''    {{
      type: "photo",
      image: "/src/assets/gallery/{folder}/{filename}",
      category: "{folder}"
    }},
'''

template_middle = '''
  ];

  const categories = [
'''

category_template = '    "{category}",\n'

template_end = '''
  ];

  const [selectedCategory, setSelectedCategory] = useState("2025 GCER");
  const [enlargedImageIndex, setEnlargedImageIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => item.category === selectedCategory
  );

  const handleImageClick = (index: number) => {
    setEnlargedImageIndex(index);
  };

  const handleCloseEnlarged = () => {
    setEnlargedImageIndex(null);
  };

  const handleNextImage = () => {
    if (enlargedImageIndex !== null && enlargedImageIndex < filteredItems.length - 1) {
      setEnlargedImageIndex(enlargedImageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (enlargedImageIndex !== null && enlargedImageIndex > 0) {
      setEnlargedImageIndex(enlargedImageIndex - 1);
    }
  };

  useEffect(() => {
    if (enlargedImageIndex !== null) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [enlargedImageIndex]);

  return (
    <section id="gallery" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Photo Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our gallery of images from various years and events.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "btn-outline-glow"
              } transition-all duration-300`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="card-tech group cursor-pointer animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleImageClick(index)}
            >
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </Card>
          ))}
        </div>

        {enlargedImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-[80vw] h-[80vh] flex items-center justify-center">
              <img
                src={filteredItems[enlargedImageIndex].image}
                alt="Enlarged"
                className="max-w-full max-h-full object-contain"
              />
              <button
                className="absolute right-[-2rem] top-[1rem] text-white text-2xl"
                onClick={handleCloseEnlarged}
              >
                ✕
              </button>
              <button
                className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 text-white text-3xl"
                onClick={handlePreviousImage}
                disabled={enlargedImageIndex === 0}
              >
                <ChevronLeft />
              </button>
              <button
                className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 text-white text-3xl"
                onClick={handleNextImage}
                disabled={enlargedImageIndex === filteredItems.length - 1}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
'''


folders_and_images: dict[str, list[str]] = {}

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

# valid_extensions = {".jpg", ".jpeg", ".png", ".gif"}  # Valid image extensions

for filename in os.listdir(dir_path):
    path_of_file = os.path.join(dir_path, filename)
    if not os.path.isfile(path_of_file):
        # Not file, so should be a folder
        
        folders_and_images[filename] = []

        # Look inside of the folder, add images inside
        for image in sorted(os.listdir(path_of_file)):
            if os.path.isfile(os.path.join(path_of_file, image)):
                if os.path.splitext(image)[1].lower():
                    folders_and_images[filename].append(image)

# Get the folder names, and sort them
sorted_folder_names = sorted(folders_and_images.keys(), reverse=True)

print(f'I see the following images in `{dir_path}`:')
print()
for folder in sorted_folder_names:
    image_list = folders_and_images[folder]

    print(f'{folder} ({len(image_list)} images)')

    for image in image_list:
        print(f'    /assets/gallery/{folder}/{image}')

confirm(f'Is this correct?')

# Ensure the target directory exists
output_dir = os.path.join(dir_path, "../src/components")
os.makedirs(output_dir, exist_ok=True)  # Create the directory if it doesn't exist

output_file_path = os.path.join(output_dir, "Gallery.tsx")

# Generate the TypeScript file
output = template_beginning

# Add gallery items dynamically
for folder, images in folders_and_images.items():
    for image in images:
        output += gallery_item_template.format(
            folder=folder,
            filename=image,
        )

output += template_middle

# Add categories dynamically
unique_categories = sorted(set(sorted_folder_names))
for category in unique_categories:
    output += category_template.format(category=category)

output = output.rstrip(",\n") + "\n"  # Remove trailing comma in categories array

# Append template_end directly (runtime logic in template ensures valid default)
output += template_end

# Write the file
with open(output_file_path, 'w') as output_file:
    output_file.write(output)

print(f'Written to {output_file_path}.')