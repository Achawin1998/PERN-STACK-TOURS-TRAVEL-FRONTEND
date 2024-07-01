const calculateAvgRating = (reviews) => {// export ไปหน้า TourCard เพื่อให้โค้ดดูสวยงาม
  
  const totalRating = reviews?.reduce((acc, item) => acc + item?.rating, 0); // คำนวน rating
  const avaRating =
    totalRating === 0
      ? "no review"
      : parseFloat((totalRating / (reviews?.length || 1)).toFixed(1));

  return {
    totalRating,
    avaRating,
  };
};

export default calculateAvgRating;
