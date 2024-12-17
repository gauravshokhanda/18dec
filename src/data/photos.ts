export interface Photo {
  id: number;
  url: string;
  caption: string;
}
import Image1 from "./images/1.png"
import Image2 from "./images/2.png"
import Image3 from "./images/3.png"
import Image4 from "./images/4.png"
import Image5 from "./images/5.png"
import Image6 from "./images/6.png"

export const photos: Photo[] = [
  {
    id: 1,
    url: Image1,
    caption: "First Time mile the isse Ek dum se mil leo chappal mein aa gaya tha mai Laga toh achha tha mil kar kaffi achha lagne wali baat bhi thi Bhai ek dum se ek ache insan se mil kar achha laga issa helaga ho na appko bhi na hai na "
  },
  {
    id: 2,
    url:Image2,
    caption: "First Time outing to see an sunset hahah yes this is first sunset we watched together Darte darte Gye the Waha tak Jaan atki padi thi hmri tumhri toh nahi lekin meri toh thi "
  },
  {
    id: 3,
    url: Image3,
    caption: "A visit to Champa Gully haha han ji sahi mein A visit to campa gali jaha thoda thoda confirm hua ki kuch toh hai vo real hai uske baad appne wahi mandir jaha se sab shuru hua tha "
  },
  {
    id: 4,
    url: Image4,
    caption: "A random meet for mithai ka dabaaa , Han ji di ki shadi ki mithai ka dabba dena tha na Ghr toh aa skti nahi thi toh dabba bhi Viyan vatika mein he mila waha bhai wah bhadiya hai ek dum se car mein ghuma laya tha first time car  mein baithi thi tu mere sath uss din "
  },
  {
    id: 5,
    url: Image5,
    caption: "Add Here The 18 dec , Yeah this is Day which is having a very high power in my life and love life too , 18 dec  has a special power its the same day when i got you it the same day when i purchased my car. This Day means to me a lot of Good Things to me .This is our day."
  },
  {
    id: 6,
    url: Image6,
    caption: "Endless love ,Endless smile  , Endless Fight  we will love a lot to eachother this image showing kitni bhi lad le hum anna sath he hai humko sath hote hai sab sahi ho jata hai Aur sab sahi rahega app tension na lo  "
  }
];