// welcome massage -----!!
var messageContainer = document.getElementById("welcomeMassege");
var firstMassege = document.getElementById("firstMassege");
  document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        messageContainer.style.display = "none";
    }
  };
// search by imge--------!!
// popup or popup close button------!!
  function selectImg() {
    var popup = document.getElementById("popup");
    var overlay =document.getElementById("overlay");
    var bodyOverflowHidden = document.getElementsByTagName("body")[0];
    if(popup.style.display ==="none" && overlay.style.display ==="none" && bodyOverflowHidden.style.overflowY ==="scroll") {
      popup.style.display="block";
      overlay.style.display ="block";
      bodyOverflowHidden.style.overflowY ="hidden";
    } else{
      popup.style.display ="none";
      overlay.style.display= "none";
      bodyOverflowHidden.style.overflowY ="scroll";
    }
  }

// Language js ========
// english----
function english(){
  window.location.reload();
};
//bangla---
function bangali(){
  // header 
  var bangla = document.getElementById("item1").innerText ="ভেক্টর";
  var bangla = document.getElementById("item2").innerText ="ফটো";
  var bangla = document.getElementById("item3").innerText ="এআই ছবি";
  var bangla = document.getElementById("item4").innerText ="আইকন";
  var bangla = document.getElementById("item5").innerText ="ভিডিও";
  var bangla = document.getElementById("item6").innerText ="পিএসডি";
  var bangla = document.getElementById("item7").innerText ="ফন্ট";
  var bangla = document.getElementById("item8").innerText ="আরো বিকল্প";
  var bangla = document.getElementById("item9").innerText ="সামগ্রী বিক্রি করুন";
  var bangla = document.getElementById("item10").innerText ="মূল্য নির্ধারণ";
  var bangla = document.getElementById("item11").innerText ="প্রবেশ করুন";
  var bangla = document.getElementById("item12").innerText ="নিবন্ধন করুন";

  // sub menu 1 =======!!!
  var bangla = document.getElementById("item13").innerText ="ভেক্টর বিভাগ";
  var bangla = document.getElementById("item14").innerText ="ইলাস্ট্রেশন";
  var bangla = document.getElementById("item15").innerText ="টেক্সচার";
  var bangla = document.getElementById("item16").innerText ="কার্টুন";
  var bangla = document.getElementById("item17").innerText ="অঙ্কন";
  var bangla = document.getElementById("item18").innerText ="সিলুয়েট";
  var bangla = document.getElementById("item19").innerText ="পটভূমি";
  var bangla = document.getElementById("item20").innerText ="নিদর্শন";
  var bangla = document.getElementById("item21").innerText ="ক্লিপ আর্ট";
  var bangla = document.getElementById("item22").innerText ="চিহ্ন এবং চিহ্ন";
  var bangla = document.getElementById("item23").innerText ="ভেক্টর সংগ্রহ";

  // sub menu 2 =======!!!
  var bangla = document.getElementById("item24").innerText ="ফটো বিভাগ";
  var bangla = document.getElementById("item25").innerText ="ব্যবসা এবং বিপণন";
  var bangla = document.getElementById("item26").innerText ="প্রকৃতি";
  var bangla = document.getElementById("item27").innerText ="খাদ্য এবং পানীয়";
  var bangla = document.getElementById("item28").innerText ="খেলা";
  var bangla = document.getElementById("item29").innerText ="জীবনধারা এবং সুস্থতা";
  var bangla = document.getElementById("itemnm20").innerText ="নিদর্শন";
  var bangla = document.getElementById("itemnm21").innerText ="ক্লিপ আর্ট";
  var bangla = document.getElementById("itemnm22").innerText ="চিহ্ন এবং চিহ্ন";
  var bangla = document.getElementById("itemnm23").innerText ="ফটো বিভাগ";

  // sub menu 3 =======!!!
  var bangla = document.getElementById("itemm13").innerText ="ভেক্টর বিভাগ";
  var bangla = document.getElementById("itemm14").innerText ="ইলাস্ট্রেশন";
  var bangla = document.getElementById("itemm15").innerText ="টেক্সচার";
  var bangla = document.getElementById("itemm16").innerText ="কার্টুন";
  var bangla = document.getElementById("itemm17").innerText ="অঙ্কন";
  var bangla = document.getElementById("itemm18").innerText ="সিলুয়েট";
  var bangla = document.getElementById("itemm19").innerText ="পটভূমি";
  var bangla = document.getElementById("itemm20").innerText ="নিদর্শন";
  var bangla = document.getElementById("itemm21").innerText ="ক্লিপ আর্ট";
  var bangla = document.getElementById("itemm22").innerText ="চিহ্ন এবং চিহ্ন";
  var bangla = document.getElementById("itemm23").innerText ="ভেক্টর সংগ্রহ";

  // sub menu 4 =======!!!
   var bangla = document.getElementById("itemmm13").innerText ="ভেক্টর বিভাগ";
  var bangla = document.getElementById("itemmm14").innerText ="ইলাস্ট্রেশন";
  var bangla = document.getElementById("itemmm15").innerText ="টেক্সচার";
  var bangla = document.getElementById("itemmm16").innerText ="কার্টুন";
  var bangla = document.getElementById("itemmm17").innerText ="অঙ্কন";
  var bangla = document.getElementById("itemmm18").innerText ="সিলুয়েট";
  var bangla = document.getElementById("itemmm19").innerText ="পটভূমি";
  var bangla = document.getElementById("itemmm20").innerText ="নিদর্শন";
  var bangla = document.getElementById("itemmm21").innerText ="ক্লিপ আর্ট";
  var bangla = document.getElementById("itemmm22").innerText ="চিহ্ন এবং চিহ্ন";
  var bangla = document.getElementById("itemmm23").innerText ="ভেক্টর সংগ্রহ";

  // sub menu 4 =======!!!
  var bangla = document.getElementById("itemmmm13").innerText ="ভেক্টর বিভাগ";
  var bangla = document.getElementById("itemmmm14").innerText ="ইলাস্ট্রেশন";
  var bangla = document.getElementById("itemmmm15").innerText ="টেক্সচার";
  var bangla = document.getElementById("itemmmm16").innerText ="কার্টুন";
  var bangla = document.getElementById("itemmmm17").innerText ="অঙ্কন";
  var bangla = document.getElementById("itemmmm18").innerText ="সিলুয়েট";
  var bangla = document.getElementById("itemmmm19").innerText ="পটভূমি";
  var bangla = document.getElementById("itemmmm20").innerText ="নিদর্শন";
  var bangla = document.getElementById("itemmmm21").innerText ="ক্লিপ আর্ট";
  var bangla = document.getElementById("itemmmm22").innerText ="চিহ্ন এবং চিহ্ন";
  var bangla = document.getElementById("itemmmm23").innerText ="ভেক্টর সংগ্রহ";
    // sub menu 4 =======!!!
    var bangla = document.getElementById("itemmmmn13").innerText ="ভেক্টর বিভাগ";
    var bangla = document.getElementById("itemmmmn14").innerText ="ইলাস্ট্রেশন";
    var bangla = document.getElementById("itemmmmn15").innerText ="টেক্সচার";
    var bangla = document.getElementById("itemmmmn16").innerText ="কার্টুন";
    var bangla = document.getElementById("itemmmmn17").innerText ="অঙ্কন";
    var bangla = document.getElementById("itemmmmn18").innerText ="সিলুয়েট";
    var bangla = document.getElementById("itemmmmn19").innerText ="পটভূমি";
    var bangla = document.getElementById("itemmmmn20").innerText ="নিদর্শন";
    var bangla = document.getElementById("itemmmmn21").innerText ="ক্লিপ আর্ট";
    var bangla = document.getElementById("itemmmmn22").innerText ="চিহ্ন এবং চিহ্ন";
    var bangla = document.getElementById("itemmmmn23").innerText ="ভেক্টর সংগ্রহ";

    var bangla = document.getElementById("f-text").innerText="ফ্রিপিক";
    var bangla = document.getElementById("c-text").innerText="দ্রুত, দুর্দান্ত ডিজাইন তৈরি করুন";
    var bangla = document.getElementById("t-text").innerText="উচ্চ-মানের ভেক্টর, ফটো, ভিডিও, মকআপ এবং আরও অনেক কিছুর সাহায্যে ধারণাগুলিকে অসামান্য ডিজাইনে পরিণত করুন";
    var asset = document.querySelectorAll(".sub-h");
    asset.forEach(function(element){
      element.textContent ="সম্পদ";
    })
    // pupup ====!!
    var imageSearch = document.querySelectorAll("#search-img");
    imageSearch.forEach(function(search){
      search.innerText ="ছবি দ্বারা অনুসন্ধান করুন";
    });
    document.getElementById("within").innerText ="ফ্রিপিক এর লাইব্রেরির মধ্যে অনুরূপ ছবি খুঁজুন";
    document.getElementById("bg").innerText ="পটভূমি";
    document.getElementById("wedding").innerText ="বিবাহের আমন্ত্রণ";
    document.getElementById("text-efect").innerText ="পাঠ্য প্রভাব";
    document.getElementById("v").innerText ="ভেক্টর";
   var photo = document.querySelectorAll("#photo");
   photo.forEach(function(element) {
    element.textContent ="ফটো";
   });
   document.getElementById("offer").innerText ="ফ্রিপিক প্রিমিয়ামে 50% ছাড়, এখন ভিডিও সহ";
   document.getElementById("get-dis").innerText ="ছাড় পান";
   document.getElementById("explor").innerText ="অন্বেষণ";
   document.getElementById("trending").innerText ="ফ্রিপিকে ট্রেন্ডিং বিভাগ";
   document.getElementById("check-p").innerText ="ফ্রিপিকে কী জনপ্রিয় তা পরীক্ষা করুন এবং আপনার প্রকল্পকে ট্রেন্ডি এবং পেশাদার দেখান।";
   document.getElementById("unlock").innerText ="আপনার অভ্যন্তরীণ সৃষ্টিকর্তাকে আনলক করুন";
   document.getElementById("get-the").innerText ="আপনার প্রজেক্টের ব্যস্ততা বাড়াতে সাবধানে বেছে নেওয়া এই সংগ্রহগুলির সাথে আপনার প্রয়োজনীয় অনুপ্রেরণা পান।";
  var winter = document.querySelectorAll("#winter");
      winter.forEach(function(winter){
      winter.textContent ="শীতকাল";
  })
  var source = document.querySelectorAll("#source");
      source.forEach(function(element){
      element.textContent ="উৎস";
  })
  document.getElementById("the-smart").innerText ="আপনার মত সৃজনশীলদের জন্য";
  document.getElementById("like").innerText ="সবচেয়ে স্মার্ট পছন্দ";
  document.getElementById("looking").innerText ="আপনি ডিজাইন বা ফটোগ্রাফ খুঁজছেন কিনা, আপনি ফ্রিপিকে নিখুঁত সম্পদ খুঁজে পাবেন।";
  var heighText = document.querySelectorAll("#heigh");
  heighText.forEach(function(heigh){
    heigh.textContent ="উচ্চ মানের স্টক সামগ্রী";
  })
  var download = document.querySelectorAll("#download");
  download.forEach(function(download){
    download.textContent ="আপনার প্রকল্পগুলিকে পেশাদার দেখাতে সেরা মানের স্ক্রোল-স্টপিং ছবিগুলি ডাউনলোড করুন৷";
  })
  document.getElementById("xmas").innerText ="ফ্রিপিকে প্রিমিয়াম সহ ক্রিসমাস";
  document.getElementById("reimagine").innerText ="বাক্সের বাইরের সৃজনশীল সম্পদের সাথে ঐতিহ্যগুলিকে পুনরায় কল্পনা করুন৷";
  document.getElementById("show-more").innerText ="আরো দেখুন";
  document.getElementById("join").innerText ="ফ্রিপিক এর সৃষ্টিকর্তা সম্প্রদায়ে যোগ দিন";
  document.getElementById("behind").innerText ="প্রতিটি স্টক ইমেজ পিছনে, একটি সৃজনশীল মন আছে. এছাড়াও আপনি সামগ্রী তৈরি করতে এবং ফ্রিপিকে বিক্রি করতে পারেন";
  document.getElementById("sale").innerText ="সামগ্রী বিক্রি করুন";
  document.getElementById("content").innerText ="বিষয়বস্তু";
  document.getElementById("calendar").innerText ="উৎসবের ক্যালেন্ডার";
  document.getElementById("new").innerText ="নতুন সম্পদ";
  document.getElementById("most").innerText ="সবচেয়ে জনপ্রিয় বিষয়বস্তু";
  document.getElementById("trends").innerText ="অনুসন্ধান প্রবণতা";
  document.getElementById("blog").innerText ="ব্লগ";
};   
// hinde -----\
function hinde(){
  var bangla = document.getElementById("item1").innerText ="वैक्टर";
};





