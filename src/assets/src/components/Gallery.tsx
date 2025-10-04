// filepath: /Users/madhav/website/src/components/Gallery.tsx
// filepath: /Users/madhav/botball-blastoff/src/components/Gallery.tsx
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons

const Gallery = () => {
  const galleryItems = [
    {
      type: "photo",
      image: "/assets/gallery/2013/0.jpg",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/1.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/10.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/11.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/12.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/13.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/14.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/15.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/16.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/17.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/18.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/2.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/20.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/21.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/3.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/4.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/5.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/6.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/7.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/8.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2013/9.JPG",
      category: "2013"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/0.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/1.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/10.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/11.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/12.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/13.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/15.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/16.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/17.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/18.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/19.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/2.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/3.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/4.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/5.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/6.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/7.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/8.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2014/9.JPG",
      category: "2014"
    },
    {
      type: "photo",
      image: "/assets/gallery/2022/0.jpg",
      category: "2022"
    },
    {
      type: "photo",
      image: "/assets/gallery/2022/1.jpg",
      category: "2022"
    },
    {
      type: "photo",
      image: "/assets/gallery/2022/2.jpg",
      category: "2022"
    },
    {
      type: "photo",
      image: "/assets/gallery/2022/3.jpg",
      category: "2022"
    },
    {
      type: "photo",
      image: "/assets/gallery/2022/4.jpg",
      category: "2022"
    },
    {
      type: "photo",
      image: "/assets/gallery/2022/5.jpg",
      category: "2022"
    },
    {
      type: "photo",
      image: "/assets/gallery/2022/6.jpg",
      category: "2022"
    },
    {
      type: "photo",
      image: "/assets/gallery/2022/7.jpg",
      category: "2022"
    },
    {
      type: "photo",
      image: "/assets/gallery/2022/8.png",
      category: "2022"
    },
    {
      type: "photo",
      image: "/assets/gallery/2022/9.jpg",
      category: "2022"
    },
    {
      type: "photo",
      image: "/assets/gallery/2023/0.jpg",
      category: "2023"
    },
    {
      type: "photo",
      image: "/assets/gallery/2023/1.jpg",
      category: "2023"
    },
    {
      type: "photo",
      image: "/assets/gallery/2023/2.jpg",
      category: "2023"
    },
    {
      type: "photo",
      image: "/assets/gallery/2023/3.jpg",
      category: "2023"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/0.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/1.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/10.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/11.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/12.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/13.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/14.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/15.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/2.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/3.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/4.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/5.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/6.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/7.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/8.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2015/9.JPG",
      category: "2015"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/0.jpg",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/1.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/10.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/11.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/12.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/13.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/14.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/15.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/16.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/17.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/18.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/19.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/2.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/3.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/4.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/5.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/6.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/7.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/8.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2012/9.JPG",
      category: "2012"
    },
    {
      type: "photo",
      image: "/assets/gallery/2024 Regionals/0.jpg",
      category: "2024 Regionals"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/0.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/1.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/10.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/11.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/12.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/2.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/3.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/4.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/5.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/6.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/7.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/8.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2008/9.jpg",
      category: "2008"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/0.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/1.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/10.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/11.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/12.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/13.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/14.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/15.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/16.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/2.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/3.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/4.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/5.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/6.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/7.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/8.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2009/9.jpg",
      category: "2009"
    },
    {
      type: "photo",
      image: "/assets/gallery/2017/1.jpg",
      category: "2017"
    },
    {
      type: "photo",
      image: "/assets/gallery/2017/10.jpg",
      category: "2017"
    },
    {
      type: "photo",
      image: "/assets/gallery/2017/11.jpg",
      category: "2017"
    },
    {
      type: "photo",
      image: "/assets/gallery/2017/2.jpg",
      category: "2017"
    },
    {
      type: "photo",
      image: "/assets/gallery/2017/3.jpg",
      category: "2017"
    },
    {
      type: "photo",
      image: "/assets/gallery/2017/4.jpg",
      category: "2017"
    },
    {
      type: "photo",
      image: "/assets/gallery/2017/5.jpg",
      category: "2017"
    },
    {
      type: "photo",
      image: "/assets/gallery/2017/6.jpg",
      category: "2017"
    },
    {
      type: "photo",
      image: "/assets/gallery/2017/7.jpg",
      category: "2017"
    },
    {
      type: "photo",
      image: "/assets/gallery/2017/8.jpg",
      category: "2017"
    },
    {
      type: "photo",
      image: "/assets/gallery/2017/9.jpg",
      category: "2017"
    },
    {
      type: "photo",
      image: "/assets/gallery/2019/0.jpg",
      category: "2019"
    },
    {
      type: "photo",
      image: "/assets/gallery/2021/0.jpg",
      category: "2021"
    },
    {
      type: "photo",
      image: "/assets/gallery/2021/1.jpg",
      category: "2021"
    },
    {
      type: "photo",
      image: "/assets/gallery/2021/2.jpg",
      category: "2021"
    },
    {
      type: "photo",
      image: "/assets/gallery/2021/3.jpg",
      category: "2021"
    },
    {
      type: "photo",
      image: "/assets/gallery/2021/4.jpg",
      category: "2021"
    },
    {
      type: "photo",
      image: "/assets/gallery/2021/5.jpg",
      category: "2021"
    },
    {
      type: "photo",
      image: "/assets/gallery/2021/6.jpg",
      category: "2021"
    },
    {
      type: "photo",
      image: "/assets/gallery/2021/7.jpg",
      category: "2021"
    },
    {
      type: "photo",
      image: "/assets/gallery/2021/8.jpg",
      category: "2021"
    },
    {
      type: "photo",
      image: "/assets/gallery/2018/1.jpg",
      category: "2018"
    },
    {
      type: "photo",
      image: "/assets/gallery/2018/2.jpg",
      category: "2018"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/0.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/1.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/10.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/11.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/12.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/13.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/14.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/15.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/16.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/17.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/18.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/19.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/2.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/20.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/21.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/22.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/23.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/24.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/3.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/4.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/5.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/6.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/7.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/8.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2011/9.JPG",
      category: "2011"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/1.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/10.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/11.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/12.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/13.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/14.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/15.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/16.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/18.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/19.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/2.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/20.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/21.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/3.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/4.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/5.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/6.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/7.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/8.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2016/9.JPG",
      category: "2016"
    },
    {
      type: "photo",
      image: "/assets/gallery/2025 GCER/1.jpg",
      category: "2025 GCER"
    },
    {
      type: "photo",
      image: "/assets/gallery/2025 GCER/10.jpg",
      category: "2025 GCER"
    },
    {
      type: "photo",
      image: "/assets/gallery/2025 GCER/11.jpg",
      category: "2025 GCER"
    },
    {
      type: "photo",
      image: "/assets/gallery/2025 GCER/2.jpg",
      category: "2025 GCER"
    },
    {
      type: "photo",
      image: "/assets/gallery/2025 GCER/3.jpg",
      category: "2025 GCER"
    },
    {
      type: "photo",
      image: "/assets/gallery/2025 GCER/4.jpg",
      category: "2025 GCER"
    },
    {
      type: "photo",
      image: "/assets/gallery/2025 GCER/5.jpg",
      category: "2025 GCER"
    },
    {
      type: "photo",
      image: "/assets/gallery/2025 GCER/6.jpg",
      category: "2025 GCER"
    },
    {
      type: "photo",
      image: "/assets/gallery/2025 GCER/7.jpg",
      category: "2025 GCER"
    },
    {
      type: "photo",
      image: "/assets/gallery/2025 GCER/8.jpg",
      category: "2025 GCER"
    },
    {
      type: "photo",
      image: "/assets/gallery/2025 GCER/9.jpg",
      category: "2025 GCER"
    },
    {
      type: "photo",
      image: "/assets/gallery/2024 GCER/0.jpg",
      category: "2024 GCER"
    },

  ];

  const categories = [
    "2008",
    "2009",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2021",
    "2022",
    "2023",
    "2024 GCER",
    "2024 Regionals",
    "2025 GCER"

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

        <div className="text-center bg-card rounded-2xl p-12 border">
                    <h3 className="text-3xl font-bold mb-6 text-primary">
                      Submit Botball Pictures
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                      If you were a TJHSST Botball team member in the past and have pictures that you would like to contribute, please email us at botball.tj@gmail.com.
                    </p>
                  </div>

        {enlargedImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div
              className="absolute inset-0"
              onClick={handleCloseEnlarged} // Close modal when clicking this div
            ></div>
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
