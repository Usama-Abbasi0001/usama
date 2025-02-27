import React from 'react';
import Stories from '../../components/ToNews/Stories';
import pic1 from '../../components/images/usflag.svg';
import flag2 from '../../components/images/flag2.svg';
import flag3 from '../../components/images/flag3.svg';
import flag4 from '../../components/images/flag4.svg';
import flag5 from '../../components/images/flag5.svg';
import flag6 from '../../components/images/flag6.svg';
import flag7 from '../../components/images/flag7.svg';
import flag8 from '../../components/images/flag8.svg';
import flag9 from '../../components/images/flag3.svg';
import flag10 from '../../components/images/flag9.svg';
import redcoin from '../../components/images/redcoin.jpg';
import group2 from '../../components/images/stoire2.jpg';
import group3 from '../../components/images/stoire3.jpg';
import group4 from '../../components/images/stoire4.jpg';
import group6 from '../../components/images/stoire6.jpg';
import group7 from '../../components/images/stoire7.jpg';
import group8 from '../../components/images/stoire8.jpg';
import group9 from '../../components/images/stoire9.jpg';
import group10 from '../../components/images/stoire3.jpg';
import '../../components/NavBar/NavBar.css';
function TopNewsComp() {
  return (
    <>
   <div id='TopNews' className="w-full max-w-[1290px] px-4 md:px-6 lg:px-5 mt-[4rem] md:mt-[8rem]">

  <p className="text-center font-bold text-[30px] md:text-[40px] lg:text-[50px]">Top News</p>
  <p className="font-bold text-[16px] md:text-[20px] text-start ps-3">Top Stories</p>

  <div className="h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200 custom-scrollbar p-3 space-y-4">
    {[
      { img1: pic1, img2: redcoin },
      { img1: flag2, img2: group2 },
      { img1: flag3, img2: group3 },
      { img1: flag4, img2: group4 },
      { img1: flag5, img2: group6 },
      { img1: flag6, img2: group7 },
      { img1: flag7, img2: group8 },
      { img1: flag8, img2: group8 },
      { img1: flag9, img2: group9 },
      { img1: flag10, img2: group10 },
    ].map((item, index) => (
      <Stories
        key={index}
        image1={item.img1}
        title="Yesterday"
        description="USD/JPY: Yen Breaks All Major SMAs to the Downside as Rally Picks Up Speed. Now What?"
        image2={item.img2}
      />
    ))}
  </div>
</div>

    </>
  )
}

export default TopNewsComp
