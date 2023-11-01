const shopList = [
  { shopNo: 100, category: "chicken" },
  { shopNo: 101, category: "pizza" },
  { shopNo: 102, category: "noodle" },
];

const shopAdCampaignList = await Promise.all(shopList.map((shop)=> AdCampaignAPI.operating(shop.shopNo)));
  
const shopAds = shopAdCampaignList.filter(NonNullable);
