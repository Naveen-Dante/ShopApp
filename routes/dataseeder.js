var express = require('express');
var router = express.Router();
var mongojs= require('mongojs');
var db = mongojs('mongodb://admin:admin@ds117859.mlab.com:17859/heroku_d1f53dlz', ['categoriess']);

router.get('/',function(req,res,next){
    
    console.log("Inside the seeder");
   
    var data = [{"title":"Hidesign Roadster  Womens Sling Bag","category":"accessories","dept":"bags",subdept:"slings","price":379.00,"size":"s","qty":20,"url": "http://www.baglo.in/wp-content/uploads/2016/06/41o1jFAwKWL._AC_UL246_SR190246_.jpg","description":"Main body in main leather,2.16 inches height X 9.05 inches length X 11.4 inches width,Flap with lock,Main compartment,Hidesign standard zip pocket,1 year domestic warranty on manufacturing defects"},

 {"title":"Fossil Womens Sling Bag","category":"accessories","dept":"bags",subdept:"slings","price":391.00,"size":"m","qty":20,"url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGWP3PEc139Fovbet0N-VqVPRgY2fnFxEn3j7ZhoZgNn09qwRa","description":"The sporty staple in every tomgirl's closet, our Maya crossbody is crafted with a webbed shoulder strap in glazed pebbled leather that gets better—and better—over time."},

 {"title":"Aquatan Womens Flap & Roll Medium Satchel Brown and Grey ","category":"accessories","dept":"bags","subdept":"slings","price":579.00,"size":"s","qty":20 ,"url":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5nDJI8xg1A9erJ-tUUjbGCIhXNzxUMaGWNJKVZL4Q0Zex7MCr","description":"Leather material brown and grey colored satchel,8 inches height X 13 inches length X 4.5 inches width,Snap closure with crossbody strap,The casual flap over accentuates the casual feel of this cross body 2 pockets,Satin cloth protective dust bag included,Leather- wipe clean only, do not use solvents, do not apply pressure or rub, do not expose to extreme heat"},

 {"title":"Holii Samarkand  Womens Sling Bag ","category":"accessories","dept":"bags","price":359.00,subdept:"slings","size":"m","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/91VFcpFrk%2BL._UX395_.jpg","description":"Leather material multi colored sling bag,7 inches height x 9 inches length x 2 inches width,Twist Lock closure with Removable Strap"},

 {"title":"Aquatan Womens Chain My Heart Chained Small Leather Sling Bag Black ","category":"accessories",subdept:"slings","dept":"bags","price":371.00,"size":"s" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/517oA0iYTAL._AC_UL260_SR200,260_.jpg","description":"Leather material blush black colored hobo,12 inches height X 12 inches length X 8 inches width,Zip closure with crossbody strap,This small hobo design has a spacious interior that will easily fit the essentials on busier days 2 pockets,Satin cloth protective dust bag included,Leather- wipe clean only, do not use solvents, do not apply pressure or rub, do not expose to extreme heat"},

 {"title":"Viari Manhattan Jazz Bag ","category":"accessories","dept":"bags",subdept:"slings","price":179.00,"size":"m","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/41x1uw0NIfL.jpg","description":"Genuine banjo leather with polyester jacquard lining,Dimension - 8 x 8 x 1 inches (H x L x W),Zip closure with adjustable strap 2 pockets,Manufacturers Own Store in a cool dry place in the dust bag wipe clean"},
 
 {"title":"Hidesign Womens Handbag","category":"accessories","dept":"bags",subdept:"handbags","price":379.00,"size":"s" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/41JkLsgD8sL._AC_UL260_SR200,260_.jpg","description":"Leather material blue colored shoulder bag,24.5 centimeters height x 28 centimeters length x 10 centimeters width,1 year manufacturer warranty.Do not expose to extreme heat"},

 {"title":"Fossil End of Season Sale Womens Handbag","category":"accessories","dept":"bags",subdept:"handbags","price":391.00,"size":"m","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/41xJNTDJHNL._AC_UL260_SR200,260_.jpg","description":"The grab-and-go hobo in glazed pebbled leather is crafted with designated pockets for your (curious) belongings and devices."},

 {"title":"Hidesign Mini Bag Tracey Womens Handbag","category":"accessories","dept":"bags",subdept:"handbags","price":579.00,"size":"s" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/51zwKet8ApL._AC_UL260_SR200,260_.jpg","description":"Leather material black colored handbag ,18 centimeters height x 14 centimeters length x 10 centimeters width, Snap closure with single strap,1 compartment and 2 pockets,1 year Manufacturer warranty,Do not expose to extreme heat"},

 {"title":"Fossil Sydney Womens Handbag ","category":"accessories","dept":"bags",subdept:"handbags","price":359.00,"size":"m" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/51DOHzaaQjL._AC_UL260_SR200,260_.jpg","description":"Leather material brown colored handbag,10 inches height x 16.5 inches length x 6 inches width,Zip closure with double handle,6 pockets,Do not expose to extreme heat"},

 {"title":"Cross Womens Genuine Leather Origami Small Collapsible Hand Bag","category":"accessories","dept":"bags",subdept:"handbags","price":371.00,"size":"s" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/51ufnlRopBL._AC_UL260_SR200,260_.jpg","description":"Double Handled Bag and Includes Zip Clouser,This award winning sleek and crisp bag consists of one zip in compartment along with compressible mechanisms, It can fit in your handy stuff and can fit itself in a 1/4 of its space,With Free Cross Agenda Pen,Disclaimer- Product colour may slightly vary due to photographic lighting sources or your monitor settings,GENUINE and AUTHENTIC CROSS Branded product with 6 months Manufacturer warranty"},

 {"title":"Aquatan Womens Steel My Heart Medium Leather Handbag Bright Red AT-M-18","category":"accessories",subdept:"handbags","dept":"bags","price":179.00,"size":"m" ,"qty":20.00 ,"url":"http://ecx.images-amazon.com/images/I/41GzE15DqJL._AC_UL260_SR200,260_.jpg","description":"Leather material bright red colored handbag,9 inches height X 9.5 inches length X 4.5 inches width,Zip closure with adjustable strap,A classic hand held bag with elegant dumbbell shaped hardware,2 pockets,Satin cloth protective dust bag included,Leather- wipe clean only, do not use solvents, do not apply pressure or rub, do not expose to extreme heat"},
 
 {"title":"Lino Perros Womens Clutch","category":"accessories","dept":"bags",subdept:"clutches","price":379.00,"size":"s" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/513HT8Z-6FL._SL137_PE20_OU31_.jpg","description":"Faux leather material golden clutch,24 centimeters height x 2 centimeters length x 11 centimeters width,Zip closure,2 compartments and 2 pockets,3 months on manufacturing defects, not damaged by improper usage,Wipe with a clean dry cloth when needed, do not expose to extreme heat"},

 {"title":"Baggit Womens Clutch ","category":"accessories","dept":"bags",subdept:"clutches","price":391.00,"size":"m" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/41-XZmZpsdL._SL150_.jpg","description":"Synthetic material blue colored clutch,13.97 inches height x 25.4 inches length x 5.08 inches width,Non Water Resistant,Do not expose to extreme heat"},

 {"title":"Awesome Fashions Womens Clutch wallet","category":"accessories","dept":"bags",subdept:"clutches","price":579.00,"size":"s","qty":20 ,"url":"http://ecx.images-amazon.com/images/I/51YK1M8E3nL._AC_UL260_SR200,260_.jpg","description":"Outer Material- PU, Inner Material- Synthetic,Closure Type-ZIP,Color- BEIGE,Dimension- 18 cm x 10cm x 1 cm,1 Month Product Warranty"},

 {"title":"Jmd Womens Girl Clutch ","category":"accessories","dept":"bags",subdept:"clutches","price":359.00,"size":"m","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/51DDfvULrHL._AC_UL260_SR200,260_.jpg" ,"description":"Material: Artificial Leather,5 Compartments, Excellent Quality,Size - 18 cms x13 cms x 3 cms,Closure -Zip, Ocassion - Casual"},

 {"title":"Do Bhai Womens Clutch Gold ","category":"accessories","dept":"bags",subdept:"clutches","price":371.00,"size":"s","qty":20 ,"url": "http://img6a.flixcart.com/image/clutch/z/w/f/party-clutch-golden-do-bhai-clutch-party-clutch-golden-400x400-imae7ynhm78kjzgr.jpeg","description":"Outer Material- Suede, Inner Material- PU, Color- Gold, 12 cms X 25 cms X 2 cms,Closure Type- Snap,No of Pockets- 2,Care Instruction- Do not expose to extreme heat"},

 {"title":"Rapidcostore Womens Wallet Pink ","category":"accessories","dept":"bags",subdept:"clutches","price":179.00,"size":"m" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/41a-58aK-qL._AC_UL260_SR200,260_.jpg" ,"description":"Outer Material- PU, Inner Material- Synthetic,Closure Type- zip,Color- biege,Dimension- 19cm x 12cm x 3 cm,1 Month Product Warranty"},
 
 {"title":"Demira Jewels Defining Desires Yellow Gold and Diamond Ring","category":"accessories","dept":"rings","price":379.00,"size":"s","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/51m9DRl3ArL._AC_UL260_SR200,260_.jpg","description":"This ring has been adorned with real diamonds,Diamond carat 0.10 with very good stone cut,Diamond has been verified by DGLA and certified by BIS hallmarked,Handmade ring from our classic collection are an eternal favorite, made by craftsmen with over 100 years of cumulative experience,All diamonds are warrantied to be conflict free"},

 {"title":"Asmi Modern  Yellow Gold and Diamond Ring","category":"accessories","dept":"rings","price":391.00,"size":"m","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/31m+ODvaQFL._AC_UL260_SR200,260_.jpg" ,"description":"This ring is made from 18k gold,The ring have been adorned with real diamonds,Diamond carat 0.07, color JK, good stone cut, with SI clarity,Diamond has been verified by SGL and is set in 18 karat gold certified by BIS hallmark,All diamonds are warranted to be conflict free"},

 {"title":"KuberBox k Yellow and Black Diamond Ring","category":"accessories","dept":"rings","price":579.00,"size":"s","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/41Osgx-M7OL._AC_UL260_SR200,260_.jpg" ,"description":"This ring is made from 14k gold,Product length is 5.2 millimeters and width is 20.2 millimeters,This ring havebeen adorned with real diamonds,Diamond carat 0, color I, ideal stone cut with S 1 clarity,All diamonds are warrantied to be conflict free"},

 {"title":"Belle Diamante k Gold and Diamond Ring","category":"accessories","dept":"rings","price":359.00,"size":"m","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/31Sk1mQJ0mL._AC_UL260_SR200,260_.jpg" ,"description":"The ring is made from 18k gold,The ring is adorned with real diamonds,Diamond carat 0.15, Color IJ, very good stone cut, with SI clarity,Diamond has been verified by GLI,No buy back,All diamonds are warrantied to be conflict free"},

 {"title":"Velvetcase White Gold and Diamond Ring","category":"accessories","dept":"rings","price":371.00,"size":"s" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/31GUynYCVYL._AC_UL260_SR200,260_.jpg" ,"description":"This ring is made from 10k (417) gold,Product length is 3.42 mm and width is 3.42 mm,This ring have been adorned with real diamonds,Diamond carat 0.1, color H, Good stone cut with SI1 clarity,Diamond has been verified by GII and is set in 10k gold certified by BIS 100% exchange value or 90% cash refund,All diamonds are warrantied to conflict free"},
 
 {"title":"Nakshatra  Yellow Gold and Diamond Pendant","category":"accessories","dept":"necklace","price":379.00,"size":"s" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/418pUbDotoL._AC_UL260_SR200,260_.jpg","description":"This pendant is made from 18k gold,Product width is 6.2 mm and height is 15.6 mm,This pendant has been adorned with real diamonds,Diamond carat 0.18, color is DF, good stone cut with VVS clarity,Diamond has been verified by IGL and is set in 18k gold certified by BIS hallmark"},

 {"title":"Asmi Modern k Yellow Gold and Diamond Pendant","category":"accessories","dept":"necklace","price":391.00,"size":"m","qty":20 ,"url":"http://ecx.images-amazon.com/images/I/41uS2RPhloL._AC_UL260_SR200,260_.jpg","description":"This Pendant is made from 18k gold,The product width is 7.9 mm and height is 13.53 mm,This pendant has been adorned with real diamonds,Diamond carat 0.02, colour GH, good stone cut, with VS clarity,Diamond has been verified by SGL and is set in 18k gold certified by BIS hallmark,All diamonds are warranted to be conflict free,The pendant is without chain"},

 {"title":"Sangini Yellow Gold and Diamond Pendant","category":"accessories","dept":"necklace","price":579.00,"size":"s","qty":20 ,"url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQu3U9swmmuZoDRAAN4Sqev7S_N8f_h5VO_3oWp5G1eL2jBcmnK","description":"This pendant is made from 18k gold,Product length is 5 mm and,height is 16.6 mm,This pendant has been adorned with real diamonds,Diamond carat 0.12, color DF, good stone cut with VVS clarity,Diamond has been certified by IGL and is set in 18k gold verified by BIS hallmark"},

 {"title":"Asmi k  Yellow Gold and Diamond Pendant","category":"accessories","dept":"necklace","price":359.00,"size":"m","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/410-JDTmC1L._AC_UL260_SR200,260_.jpg","description":"These stud earings are made from 18k gold,Product width is 11.4 mm and height is 4.6 mm,These stud earrings have been adorned with real diamonds,Diamond carat 0.1, color GH, good stone cut with SI clariity,Diamond has been verified by IGL and is set in 18k gold certified by BIS hallmark"},

 {"title":"Belle Diamante k Yellow Gold and Diamond Pendant","category":"accessories","dept":"necklace","price":371.00,"size":"s","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/31MyPqMiEnL._AC_UL260_SR200,260_.jpg","description":"The Pendant is made from 18k gold,Product height is 17mm and width is 12mm,The pendant is adorned with real diamonds,Diamond carat 0.05, Color IJ, very good stone cut, with SI clarity,Diamond has been verified by GLI,No Buy Back,Conflict Free- True"},

 {"title":"KuberBox Yellow Gold and Diamond Pendant","category":"accessories","dept":"necklace","price":179.00,"size":"m","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/31EV7FxnPcL._AC_UL260_SR200,260_.jpg","description":"This pendant is made from 18k gold,Product width is 16.84 mm and height is 33.4 mm,This pendant has been adorned with real diamonds,Diamond carat 0.4, color HI, ideal stone cut with SI clarity,Diamond has been certified by SGL and is set in 18k gold,verified by BIS hallmark,KuberBox offers lifetime exchange only, no cash buy back is provided,All diamonds are warrantied to be conflict free"},
 
 {"title":"Titan Regalia Chronograph Analog Silver Dial mens Watch","category":"accessories","dept":"watches","subdept":"mens","price":379.00,"size":"s","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/51nfIxYu8bL._AC_UL260_SR200,260_.jpg","description":"Dial Color- Silver, Case Shape- Round, Dial Glass Material- Mineral,Band Color- Multi-Color,Band Material- Stainless Steel,Watch Movement Type- Quartz, Watch Display Type- Chronograph,Case Material- Stainless Steel,Water Resistance Depth- 30 meters,Warranty type-Manufacturer, 2 Years Manufacturer Warranty"},

 {"title":"Titan Octane Grey Dial Chronographue mens Watch ","category":"accessories","dept":"watches","subdept":"mens","price":391.00,"size":"m","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/51fSa-F85+L._AC_UL260_SR200,260_.jpg","description":"Dial Color- Grey, Case Shape- Round,Band Color- Multicolor, Band,Material- Metal,Watch Movement Type- Quartz, Watch Display Type- Chronograph,Case diameter- 42 millimeters,Water Resistance Depth- 30 meters,2 Years International Warranty"},

 {"title":"Titan Octane Analog Silver Dial mens Watch","category":"accessories","dept":"watches","subdept":"mens","price":579.00,"size":"s" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/41Usp3G6IQL._AC_UL260_SR200,260_.jpg","description":"Dial Color- Silver, Case Shape- Round, Dial Glass Material- Mineral,Band Color- Brown, Band Material-Leather,Watch Movement Type- Quartz, Watch Display Type- Analog,Case Material- Stainless Steel,Water Resistance Depth- 50 meters, Buckle Clasp,Warranty type-Manufacturer, 2 Years Manufacturer Warranty"},

 {"title":"Titan Karishma Analog White Dial mens Watch ","category":"accessories","dept":"watches","subdept":"mens","price":359.00,"size":"m","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/41LGYBsxo+L._AC_UL260_SR200,260_.jpg","description":"Dial Color- Black, Case Shape- Rectangular, Dial Glass material- Mineral,Band Color- Silver, Band Material- Stainless Steel,Watch Movement Type- Quartz, Watch Display Type- Analog,Case Material- Brass,Water Resistance Depth- 30 meters,Warranty type-Manufacturer, 2 Years Manufacturer Warranty"},

 {"title":"Titan Neo Analog Black Dial mens Watch","category":"accessories","dept":"watches","subdept":"mens","price":371.00,"size":"s" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/514zMlIkxWL._AC_UL260_SR200,260_.jpg","description":"Dial Color- Black, Case Shape- Round, Dial Glass Material- Mineral,Band Color- Black, Band Material- Leather,Watch Movement Type- Quartz, Watch Display Type- Analog,Case Material- Metal,Water Resistance Depth- 50 meters, Buckle Clasp,2 years warranty"},

 {"title":"Titan Purple Glam Gold Analog Watch  For men","category":"accessories","dept":"watches","subdept":"mens","price":179.00,"size":"m" ,"qty":20 ,"url":"http://ecx.images-amazon.com/images/I/81YaTxEySnL._UL1500_.jpg","description":"Titan 9743KM01 Purple Glam Gold Analog Watch - For men,men's Watch,Analog"},
 
 {"title":"Fastrack Beach Upgrades Analog White Dial Womens Watch ","category":"accessories","dept":"watches","subdept":"womens","price":379.00,"size":"s","qty":20 ,"url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLoovNtiryGcIffqAzEXdIAKP5ARQ-se6OVwfyC-puTh4EN32i9w","description":"Dial Color- White, Case Shape- Round,Band Color- Red, Band Material- Leather,Watch Movement Type- Quartz, Watch Display Type- Analog,1 year Manufacturing warranty and 6 Months Battery warranty,Water Resistance- 3 Meters"},

 {"title":"Fastrack Hip Hop Analog White Dial Womens Watch ","category":"accessories","dept":"watches","subdept":"womens","price":391.00,"size":"m" ,"qty":20 ,"url":"https://n2.sdlcdn.com/imgs/a/t/b/Fastrack-Hip-Hop-NA6024SM01-Women-1304784-1-e85f3.jpg","description":"Dial Color- Black; Case Shape- Oval, Dial Glass Material- Brass,Band Color- Silver, Band Material- Stainless Steel,Watch Movement Type- Quartz, Watch Display Type- Analog,Case Material-Brass, Case Diameter- 28 x 36 millimeters,Water Resistance Depth- 30 meters, Deployment Clasp 1 Year Manufacturing Warranty and 6 Months Battery Warranty"},

 {"title":"Fastrack Beach Analog Black Dial Womens Watch ","category":"accessories","dept":"watches","subdept":"womens","price":579.00,"size":"s","qty":20 ,"url": "http://images.discountbazaarcard.com/data/watches/fastrack/product/13037/fastrack-6117sm02-analog-watch-for-women-min%20(1)-600x602.jpg","description":"Dial Color- purple, Case Shape- Round,Band Color- silver, Band Material- steel,Case Material- Stainless Steel,Watch Movement Type- Quartz, Watch Display Type- Analog,1 Year Manufacturing Warranty and 6 Months Battery Warranty,Water Resistence Depth- 30 meters"},

 {"title":"Fastrack Upgrade-Core Analog White Dial Womens Watch","category":"accessories","dept":"watches","subdept":"womens","price":359.00,"size":"m","qty":20,"url": "http://ecx.images-amazon.com/images/I/41bWYt2ThpL._AC_UL260_SR200,260_.jpg","description":"Dial Color- White, Case Shape- Round, Dial Glass Material- Mineral Band Color- Purple, Band Material- Silicone,Watch Movement Type- Quartz, Watch Display Type- Analog,Case Material- Plastic, Case Diameter- 39x 34x 10 millimeters,Water Resistance Depth- 30 meters, Buckle Clasp,1 Year Manufacturing Warranty and 6 Months Battery Warranty"},

 {"title":"Fastrack Monochrome Analog Black Dial Womens Watch","category":"accessories","dept":"watches","subdept":"womens","price":371.00,"size":"s","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/41HDkeMpSrL._AC_UL260_SR200,260_.jpg","description":"Dial Color- Black, Case Shape- Round, Dial Glass Material- Brass ,Band Color- Black, Band Material- Leather,Watch Movement Type- Quartz, Watch Display Type- Analog,Case Material- Brass, Case Diameter- 41 x 34 x 12 millimeters,Water Resistance Depth- 30 meters, Buckle Clasp,1 Year Manufacturing Warranty and 6 Months Battery Warranty"},

 {"title":"Fastrack New OTS Analog Multi-Color Dial Womens Watch","category":"accessories","dept":"watches","subdept":"womens","price":179.00,"size":"m","qty":20 ,"url": "http://ecx.images-amazon.com/images/I/41-m95WGm5L._AC_UL260_SR200,260_.jpg","description":"Dial Color- Multi-Color, Case Shape-Asymmetrical, Dial Glass,Material- Brass,Band Color- Beige, Band Material- Leather,Watch Movement Type- Quartz, Watch Display Type- Analog,Case Material- Brass, Case Diameter- 43x 37 millimeters,Water Resistance Depth- 30 meters, Buckle Clasp,1 Year Manufacturing Warranty and 6 Months Battery Warranty"},
 
 {"title":"Unisopent Designs Printed mens V Neck TShirt","category":"clothing","dept":"menswear","subdept":"formal","price":379.00,"size":"s","qty":20 ,"url":"http://ecx.images-amazon.com/images/I/51UqQ0oRv3L._AC_UL260_SR200,260_.jpg","description":"Blue colored checks shirt with half sleeves-formal wear"},

 {"title":"Campus Sutra Men Printed Full Sleeves SheldonTshirts","category":"clothing","dept":"menswear","subdept":"formal","price":391.00,"size":"m","qty":20,"url": "http://ecx.images-amazon.com/images/I/41L-25WkIHL._AC_UL260_SR200,260_.jpg","description":"Purple color plain cotton shirt with full sleeves"},

 {"title":"Alan Jones mens Cotton PrintedTshirt","category":"clothing","dept":"menswear","subdept":"formal","price":579.00,"size":"s","qty":20 ,"url":"http://ecx.images-amazon.com/images/I/51ymwuDI4IL._AC_UL260_SR200,260_.jpg","description":"red and black checks on white linen shirt with half sleeves"},

 {"title":"UMM mens JerseyTshirt","category":"clothing","dept":"menswear","subdept":"formal","price":359.00,"size":"m","qty":20 ,"url":"http://ecx.images-amazon.com/images/I/41kivIGh8SL._AC_UL260_SR200,260_.jpg","description":"Plain red cotton shirt with half sleeves"},

 {"title":"People mensTshirt","category":"clothing","dept":"menswear","subdept":"formal","price":371.00,"size":"s","qty":20,"url": "http://ecx.images-amazon.com/images/I/51uMTjZ56gL._AC_UL260_SR200,260_.jpg","description":"white stripes on a purple red cotton shirt with half sleeves"},

 {"title":"Umm Unmute mensTshirt","category":"clothing","dept":"menswear","subdept":"formal","price":179.00,"size":"m" ,"qty":20,"url":"http://ecx.images-amazon.com/images/I/51vuvHIVlgL._AC_UL260_SR200,260_.jpg","description":"Dark blue stripes on a sky blue shirt with half sleeves"},
 
 {"title":"Smack Down Vs Raw","category":"games","dept":"ps","price":2560.00,"qty":20,"url":"/images/products/wwe.jpeg","description":"WWE SmackDown! vs. Raw is a professional wrestling video game released on the PlayStation 2 console by THQ and developed by Yuke's. It is part of the WWE SmackDown vs. Raw (later renamed to simply WWE) series and is based on the professional wrestling promotion World Wrestling Entertainment (WWE). This game is the sequel to 2003's WWE SmackDown! Here Comes the Pain"},

 {"title":"Need For Speed","category":"games","dept":"ps","price":1320.00,"qty":20,"url":"/images/products/nfs.jpg","description":"Need for Speed, also known by its initials NFS, is a racing video game franchise published by Electronic Arts and developed by several studios including EA Black Box, Criterion Games and Ghost Games."},

 {"title":"Spider-Man","category":"games","dept":"ps","price":1420.00,"qty":20,"url":"/images/products/spiderman.jpg","description":"Spider-Man is an upcoming open world action-adventure video game based on the Marvel Comics superhero Spider-Man. It is being developed by Insomniac Games and is to be published by Sony Interactive Entertainment for the PlayStation 4 console.It will be the first licensed game developed by Insomniac.The game will tell a new story about Spider-Man and is not tied to a film or comic book.The game will cover both the Peter Parker and Spider-Man aspects of the character and will feature a more experienced Spider-Man."},
				
 {"title":"FIFA 17 Standard Edition","category":"games","dept":"xbox","price":2560.00,"qty":20,"url":"/images/products/fifa.png","description":"FIFA 17 is an association football video game in the FIFA series, released on 27 September 2016 in North America and 29 September 2016 for the rest of the world.The new features in FIFA 17 include new attacking techniques, physical player overhaul, active intelligence system and set piece rewrite."},

 {"title":"Batman Arkham City","category":"games","dept":"xbox","price":2320.00,"qty":20,"url":"/images/products/batman.png","description":"Batman: Arkham City is a 2011 action-adventure video game developed by Rocksteady Studios and released by Warner Bros. Interactive Entertainment for the PlayStation 3 and Xbox 360 video game consoles, and Microsoft Windows. Based on the DC Comics superhero Batman, it is the sequel to the 2009 video game Batman: Arkham Asylum and the second installment in the Batman: Arkham series."},

 {"title":"The Amazing Spider Man","category":"games","dept":"xbox","price":1920.00,"qty":20,"url":"/images/products/amazing.png","description":"The Amazing Spider-Man is an open world,action-adventure video game, based on the Marvel Comics character Spider-Man, and the 2012 film. It was developed by Beenox and published by Activision."},
				
 {"title":"Grand Theft Auto","category":"games","dept":"pcgames","price":2120.00,"qty":20,"url":"/images/products/gta.jpg","description":"Grand Theft Auto is an action-adventure video game series created by David Jones and Mike Dailly"},

 {"title":"Assassin Creed Syndicate","category":"games","dept":"pcgames","price":1320.00,"qty":20,"url":"/images/products/assassin.jpg","description":"Assassin's Creed Syndicate is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft. It was released on October 23, 2015, for the PlayStation 4 and Xbox One, and on November 19, 2015, for Microsoft Windows."},

 {"title":"Call of Duty","category":"games","dept":"pcgames","price":920.00,"qty":20,"url":"/images/products/cod.jpg","description":"The hallmark intensity of Call of Duty returns with an epic single-player campaign that takes players deep behind enemy lines as an elite Black Ops soldier engaging in covert warfare, classified operations, and explosive conflicts across the globe."},
 
 {"title":"The Immortals of Meluha","category":"books","dept":"documentaries","author":"Paulo Coelho","price":120.00,"qty":20,"url":"/images/products/meluha.jpg","description":"The Hindi translation of the popular Indian bestseller 'Immortals of Meluha’, 'Meluha Ke Mritunjay’ is set in 1900 BC, during the time of Indus Valley Civilization and revolves around the lives of the men who inhabited the land of Meluha back then—the 'Suryavanshi’.The first part of the Shiva Trilogy, this book is about the legend of Lord Shiva and the Hindu concept of Karma."},

 {"title":"Sherlock Holmes: The Complete Novels and Stories","category":"books","dept":"documentaries","author":"Arthur canon dayle","price":220.00,"qty":20,"url":"/images/products/sherlock.jpg","description":"Sherlock Holmes is one of the world's most-loved fictional detectives. Sherlock Holmes: The Complete Novels and Stories Volume I is part of a set of two volumes and includes the first novel from the author called A Study In Scarlet. In A Study In Scarlet, you are introduced to the wonderful character of Sherlock Holmes and his first encounter with Dr. John Watson. Read this suspense-ridden murder story featuring the mysterious word rache scribbled in blood, to discover the brilliance of the detective. "},

 {"title":"A Fly in the Curry","category":"books","dept":"documentaries","author":"KP Jayasankar","price":150.00,"qty":20,"url":"/images/products/fly.jpg","description":"This book looks at how independent Indian documentary film reworks the relationship between film-makers, their narratives, their subjects and their audience, challenging the dominant idea of documentary as a discourse of the real. Based on close textual analysis, conversations with film-makers , this work explores the place of documentary within the Indian public sphere."},

 {"title":"The Alchemist","category":"books","dept":"documentaries","author":"Paulo Coelho","price":120.00,"qty":20,"url":"/images/products/alchemist.jpg","description":"Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids."},

 {"title":"Manyavar Mens Resham Jacquard ","category":"clothing","dept":"menswear","subdept":"ethnic","price":379.00,"size":"s" ,"qty":20,"url":"https://images-eu.ssl-images-amazon.com/images/G/31/img16/men-apparel/201602/Ethnicstore/8._V297336407_.jpg","description":"An Elegant Blue Indo Western Attire.The intricacy in the heavy work of hand embroidery and the finesse of the jacquard fabric, structures this glorious indo-western. Coming from the classic beiges, this fawn coloured piece is compatible for mehendi, sangeet and engagement and Comes along with a dhoti and a broach."},

 {"title":"Royal Mens Designer silk","category":"clothing","dept":"menswear","subdept":"ethnic","price":391.00,"size":"m" ,"qty":20,"url":"https://images-eu.ssl-images-amazon.com/images/G/31/img16/men-apparel/201602/Ethnicstore/4._V297336384_.jpg","description":"Washcare-Homewash,Dip&Dry,Dryclean for extra life of product,Product length may vary according to the size and pattern of product ,Products may vary from that of image as per availability of stock and your monitor and photegenic settings 100% Genuine products guaranteed by Royal Kurta"},

 {"title":"Abhiyutan solid kurtha pyjama","category":"clothing","dept":"menswear","subdept":"ethnic","price":579.00,"size":"s","qty":20,"url":"https://img.tradeindia.com/fp/0/121/947.jpg","description":"Art Silk Kurta for mens with embroidered work"},

 {"title":"Indian Terrain Solid Regular Fit Cotton","category":"clothing","dept":"menswear","subdept":"ethnic","price":359.00,"size":"m" ,"qty":20,"url":"http://static3.jassets.com/p/Fabindia-Brown-Solid-Nehru-Jacket-7157-0323272-1-catalog_m.jpg","description":"A navy blue colored silk kurtha with a jute coat"},

 {"title":"Sojanya ethnic wear","category":"clothing","dept":"menswear","subdept":"ethnic","price":371.00,"size":"s" ,"qty":20,"url":"http://weddingseve.com/wp-content/uploads/2016/03/5.-indian-ethnic-wear-for-groom.jpg","description":"A dark blue colored royal look cotton sherwani with a red colored dhothi with heavily embroidered work"},

 {"title":"Free Hand Solid Kurtha","category":"clothing","dept":"menswear","subdept":"ethnic","price":179.00,"size":"m","qty":20,"url":"http://static4.jassets.com/p/See-Designs-Navy-Blue-Solid-Kurta-9320-3534581-1-catalog_s.jpg","description":"A simple plain navy blue colored kurtha with an elegant look"},

 {"title":"Yeoja Creation Womens Ethnic Gown","category":"clothing","dept":"womenswear","subdept":"partywear","price":1800.00,"size":"s","qty":20,"url":"http://ecx.images-amazon.com/images/I/415YgBdtR-L._AC_UL260_SR200,260_.jpg","description":"Material raw cotton silk,short log style,inner and bottom row silk,balloon style,color dark blue with white stars,easy wash care"},

 {"title":"Z Fashion Womens Dress","category":"clothing","dept":"womenswear","subdept":"partywear","price":3450.00,"size":"m","qty":20,"url": "http://ecx.images-amazon.com/images/I/516LJDDtFEL._AC_UL260_SR200,260_.jpg","description":"Stylish dark blue silk top with netted sleeves,Material-Japanese Satin Silk,Dry clean & Hand wash in cold water"},

 {"title":"Clickedia Womens Silk Mermaid Gown","category":"clothing","dept":"womenswear","subdept":"partywear","price":570.00,"size":"s","qty":20,"url": "http://ecx.images-amazon.com/images/I/41TM5xKWP9L._AC_UL260_SR200,260_.jpg","description":"Rich nylon navy blue top with a white shoulder design"},

 {"title":"Skyblue Fashion Blue Banglori Silk Embroidered Dress Material Gown","category":"clothing","dept":"womenswear","subdept":"partywear","price":1230.00,"size":"m" ,"qty":20,"url":"http://ecx.images-amazon.com/images/I/41G9QqZcIGL._AC_UL246_SR190,246_FMwebp_QL70_.jpg","description":"one piece-party wear frock,nylon silk cloth with 2 mtr inner fabric,Plain long sleeves, Only powered by Skyblue Fashion Attractive Silk Handcrafted with finest cloth of Surat"},

 {"title":"Aika Georgette Fabric Dress For Women","category":"clothing","dept":"womenswear","subdept":"partywear","price":1371.00,"size":"s" ,"qty":20,"url":"http://ecx.images-amazon.com/images/I/41Akb2Pm2LL._AC_UL246_SR190,246_FMwebp_QL70_.jpg","description":"Georgette plain blue long frock having white dots with a belt"},

 {"title":"Royal Export Womens Black Mirror Bangalori Party Wear Gown","category":"clothing","dept":"womenswear","subdept":"partywear","price":1790.00,"size":"m","qty":20,"url":"http://ecx.images-amazon.com/images/I/31lWIIaU4dL._AC_UL246_SR190,246_FMwebp_QL70_.jpg","description":"Stylish light orange silk top with butterfly pattern hands,Material-Japanese Satin Silk"},

 {"title":"Mayra Womens Net Top","category":"clothing","dept":"womenswear","subdept":"indowestern","price":379.00,"size":"s","qty":20,"url": "http://ecx.images-amazon.com/images/I/41fiIJyfqdL._AC_UL260_SR200,260_.jpg","description":"Material- jeans , Color- Blue,Fit Type- Regular Fit,Wash care instructions- Dry clean"},

 {"title":"Mandarin Collared Button Down Top","category":"clothing","dept":"womenswear","subdept":"indowestern","price":391.00,"size":"m" ,"qty":20,"url":"http://ecx.images-amazon.com/images/I/416PHa%2BejCL._AC_UL260_SR200,260_.jpg","description":"100% Cotton,Breathable fabric,Perfect for Indian weather,Comfortable fit"},

 {"title":"Jealous  Womens PrintedTshirt","category":"clothing","dept":"womenswear","subdept":"indowestern","price":579.00,"size":"s" ,"qty":20,"url":"http://ecx.images-amazon.com/images/I/51JWAH0vSTL._AC_UL260_SR200,260_.jpg","description":"100% Cotton Machine, hand wash separetely, do not bleach,do not wring, dry in shade, medium iron, use mild, detergent only,Character print,Short sleeve,Round neck,Graphic tee"},

 {"title":"Park Avenue Womens Tunic Top","category":"clothing","dept":"womenswear","subdept":"indowestern","price":359.00,"size":"m","qty":20,"url": "http://ecx.images-amazon.com/images/I/41gQ97dc0lL._AC_UL260_SR200,260_.jpg","description":"100% Cotton Machine wash, warm gentle cycle ,Tunic Long sleeve"},

 {"title":"Mayra Womens Polyster Top","category":"clothing","dept":"womenswear","subdept":"indowestern","price":371.00,"size":"s" ,"qty":20,"url":"http://ecx.images-amazon.com/images/I/41ZT125vN8L._AC_UL260_SR200,260_.jpg","description":"Material- Polycrepe , Color- Brown,Fit Type-Regular Fit,Occasion-Party wear,Wash care instructions- Dry clean"},

 {"title":"Slumber Jill Sailor Sleepshirt with tie at waist","category":"clothing","dept":"womenswear","subdept":"indowestern","price":179.00,"size":"m","qty":20,"url":"http://ecx.images-amazon.com/images/I/41vJJOFXX6L._AC_UL260_SR200,260_.jpg","description":"Material-Cotton Care,Instruction- Machine Wash at 30 Degree, Do not bleach , Mild Iron , Do not dry clean ,Do not Tumble Dry , Flat dry in shade , Wash dark colours separately,Item Length- Above Knee"},

 {"title":"Mayra Womens Crepe Top","category":"clothing","dept":"womenswear","subdept":"semitraditional","price":379.00,"size":"s","qty":20,"url":"http://ecx.images-amazon.com/images/I/31L9rDTqtZL._AC_UL260_SR200,260_.jpg","description":"Material- Crepe , Color- Cyan,Fit Type- Regular Fit,Occasion- Party wear,Wash care instructions- Dry clean" },

 {"title":"Indi Bargain Rayon Rajasthani Mandala Hand Block Printed Baba","category":"clothing","dept":"womenswear","subdept":"semitraditional","qty":20,"price":391.00,"size":"m","url":"http://ecx.images-amazon.com/images/I/41Uj0RK1fUL._AC_UL260_SR200,260_.jpg","description":"Rayon Mandala Hand Block Printed Baba Tops,Length- 25 inches,Chest- 38 inches,Flutter Full Sleeves,Size - Medium"},

 {"title":"Global Desi Womens Body Blouse Top","category":"clothing","dept":"womenswear","subdept":"semitraditional","price":579.00,"size":"s","qty":20,"url":"http://ecx.images-amazon.com/images/I/41s4myPLysL._AC_UL246_SR190,246_.jpg","description":"100% Rayon Hand wash with mild detergent,Body Blouse,Sleeveless,Round Neck"},

 {"title":"global desi Womens Top","category":"clothing","dept":"womenswear","subdept":"semitraditional","price":359.00,"size":"m","qty":20,"url":"http://ecx.images-amazon.com/images/I/419T%2BYcHSHL._AC_UL246_SR190,246_.jpg","description":"100% Polyester,Dry clean only,Body blouse,Long sleeve,Round neck,Regular fit,Mesa printed top"},

 {"title":"V neck style shirt with sleeve","category":"clothing","dept":"womenswear","subdept":"semitraditional","price":371.00,"size":"s","qty":20,"url":"http://ecx.images-amazon.com/images/I/41Ql-Sg3vvL._AC_UL246_SR190,246_.jpg","description":"Poly Crepe,Musical print shirt,Glittering button,Hand wash & Machine Wash,Daily Wear ,Casual wear & Party wear"},

 {"title":"Hypernation Black and White Color StrippedTshirts For Women","category":"clothing","dept":"womenswear","subdept":"semitraditional","price":179.00,"size":"m","qty":20,"url":"http://ecx.images-amazon.com/images/I/41BrjIK7hsL._AC_US160_FMwebp_QL70_.jpg","description":"Brand Name: Hypernation,Style- High Neck T- Shirts For Women,Color-Black & White,Fabric- 100% Cotton,Made In India"},

 {"title":"Clickedia Girls Net Lehenga Choli ","category":"clothing","dept":"kidswear","subdept":"skirts","price":379.00,"size":"s","qty":20,"url": "http://ecx.images-amazon.com/images/I/41UfiOOH6-L._AC_UL246_SR190,246_.jpg","description":"Net semi-stitched embroidered lehenga- alterable for kids age 8-12 yrs,Top Choli/ Blouse Fabric- Shimmer Gold,Net Duppatta"},

 {"title":"new arrival designer navy blue softnet partywear kids gown","category":"clothing","dept":"kidswear","subdept":"skirts","price":391.00,"size":"m" ,"qty":20,"url":"https://cdn.a1designerwear.com/content/images/thumbs/0244604_magnificent-dark-blue-black-party-wear-gown.jpeg","description":"it is designer new softnet gown with pure santoon inner Same day dispatch available,Fast Shipping available,suitable for all occasion it is best gift product"},

 {"title":"Miss Maria Girls Blended Wool Sweatshirt","category":"clothing","dept":"kidswear","subdept":"skirts","price":579.00,"size":"s","qty":20,"url": "http://ecx.images-amazon.com/images/I/51Ha%2BkGrGML._AC_UL246_SR190,246_.jpg","description":"Material: Blended Wool,Closure: Zip, Fit Type: Regular Fit,Type of,Sleeves: Long Sleeve,Bust size 36 inches and length 25 inches,Hoodie"},

 {"title":"Red pleated skirt ","category":"clothing","dept":"kidswear","subdept":"skirts","price":359.00,"size":"m","qty":20 ,"url":"http://trendymods.com/wp-content/uploads/2015/12/9.-red-pleated-skirt-collection-for-girls.jpg","description":"Type: Pleated Skirt,Color: Maroon,Material:Polyester,Pattern: Solid I"},

 {"title":"new designer red green cemric cotton baby girls lehenga choli","category":"clothing","dept":"kidswear","subdept":"skirts","price":371.00,"size":"s","qty":20,"url": "http://ecx.images-amazon.com/images/I/41GoW8brYbL._AC_UL246_SR190,246_.jpg","description":"Lehenga Fabric-Cemric Cotton,Choli Fabric-Cemric Cotton,Lehenga Choli with Designer Patch and Hand Work Casual, Festive, Ceremony,wedding etc.Dupatta - Not Available, It is ready made Lehenga choli"},

 {"title":"Miss Maria Girls Blended Wool Sweatshirt","category":"clothing","dept":"kidswear","subdept":"skirts","price":179.00,"size":"m" ,"qty":20,"url":"http://ecx.images-amazon.com/images/I/517NI41tImL._AC_UL246_SR190,246_.jpg","description":"Blended Wool,Closure: Zip; Fit Type: Regular Fit,Type of Sleeves: Long Sleeve,Bust size 36 inches and length 25 inches,Hoodie"},

 {"title":"Biba Girls Dress Suit","category":"clothing","dept":"kidswear","subdept":"bodysuits","price":379.00,"size":"s","qty":20,"url": "http://assets.myntassets.com/h_240,q_95,w_180/v1/assets/images/971018/2015/10/1/11443691848009-BIBA-Girls-Red--Purple-Printed-Salwar-Suit-with-Dupatta-441443691847711-1_mini.jpg","description":"100% Cotton Regular fit Casual wear Hand wash gently, wash separately in cold water, med to low iron, do not bleach"},

 {"title":" League Girls Skirt Suit","category":"clothing","dept":"kidswear","subdept":"bodysuits","price":391.00,"size":"m","qty":20 ,"url":"http://ecx.images-amazon.com/images/I/51nb+Y4HB9L._AC_UL246_SR190,246_.jpg","description":"100% Polyester,Normal wash"},

 {"title":"Decot Paradise Girls Heavy Print Lehenga Choli Suit","category":"clothing","dept":"kidswear","subdept":"bodysuits","price":579.00,"size":"s","qty":20,"url":"http://ecx.images-amazon.com/images/I/51EAUEwnevL._AC_UL246_SR190,246_.jpg","description":"Material- Cotton,Color- red,Neck Type- Square Neck,Sleeve Type- Sleeveless Wash Separately in cold or regular water, dry in shade, separate from other color material, Prefer Dry clean for maintenance of product"},

 {"title":"Baby Girl Top and Shorts Set","category":"clothing","dept":"kidswear","subdept":"bodysuits","price":359.00,"size":"m","qty":20 ,"url":"http://ecx.images-amazon.com/images/I/41mP0rakLdL._AC_UL246_SR190,246_.jpg","description":"Top and Shorts Set,Designer Kids Dress"},

 {"title":"Bio Kid Designer Top","category":"clothing","dept":"kidswear","subdept":"bodysuits","price":371.00,"size":"s","qty":20,"url": "http://ecx.images-amazon.com/images/I/41U5+cQgohL._AC_UL246_SR190,246_.jpg","description":"100 % pure cotton,Wash Care- Machine wash in cold water,Guaranteed non-toxic material,Skin friendly wear"},

 {"title":"Nauti Nati Girls Dress Suit","category":"clothing","dept":"kidswear","subdept":"bodysuits","price":179.00,"size":"m","qty":20,"url":"http://ecx.images-amazon.com/images/I/51lbKQOnspL._AC_UL246_SR190,246_.jpg","description":"100% Cotton,Cropped,Regular fit,Machine wash"},

 {"title":"one plus 3","category":"electronics",dept:"mobiles",subdept:"oneplus", "description": "5.50-inch touchscreen display with a resolution of 1080 pixels, powered by 1.6GHz quad-core Qualcomm ,6GB of RAM, 64GB of internal storage, 16-megapixel primary camera","price":27999.00,"qty":20,"url":"/images/products/one1.png"},

 {"title":"one plus 2","category":"electronics",dept:"mobiles",subdept:"oneplus", "description": "5.00-inch touchscreen display with a resolution of 1080 pixels, powered by 2.8GHz octa-core Qualcomm ,8GB of RAM, 32GB of internal storage, 8-megapixel primary camera","price":22000.00,"qty":20,"url":"/images/products/one2.png"},

 {"title":"one plus 3t","category":"electronics",dept:"mobiles",subdept:"oneplus", "description":"8.00-inch touchscreen display with a resolution of 1080 pixels, powered by 1.54GHz quad-core Qualcomm ,12GB of RAM, 64GB of internal storage, 16-megapixel primary camera","price":32000.00,"qty":20,"url":"/images/products/one3.png"},

 {"title":"one plus x","category":"electronics",dept:"mobiles", subdept:"oneplus", "description":"4.50-inch touchscreen display with a resolution of 1080 pixels, powered by 1.2GHz dual-core Qualcomm ,16GB of RAM, 32GB of internal storage, 16-megapixel primary camera","price":26999.00,"qty":20 ,"url":"/images/products/one4.jpg"},

 {"title":"LenovovibeP1","category":"electronics",dept:"mobiles",subdept:"lenovo","description":"5.00-inch touchscreen display with a resolution of 1080 pixels, powered by 2.15GHz quad-core Qualcomm, 3GB of RAM, 32GB of internal storage, 13-megapixel primary camera","price":17999.00,"qty":20,"url":"/images/products/len1.png"},

 {"title":"LenovoZ2plus","category":"electronics",dept:"mobiles",subdept:"lenovo","description":"8.00-inch touchscreen display with a resolution of 1080 pixels, powered by 2.8GHz octa-core Qualcomm, 4GB of RAM, 16GB of internal storage, 16-megapixel primary camera","price":19999.00,"qty":20,"url":"/images/products/len2.jpg"},
				    
 {"title":"LenovoK900","category":"electronics",dept:"mobiles",subdept:"lenovo","category":"electronics","description":"5.50-inch touchscreen display with a resolution of 1080 pixels, powered by 2.8GHz dual-core Qualcomm, 8GB of RAM, 64GB of internal storage, 8-megapixel primary camera","price":12999.00,"qty":20,"url":"/images/products/len3.png"},

 {"title":"LenovoS880","category":"electronics",dept:"mobiles",subdept:"lenovo","description":"6.00-inch touchscreen display with a resolution of 1080 pixels, powered by 1.6GHz quad-core Qualcomm, 12GB of RAM, 32GB of internal storage, 13-megapixel primary camera","price":30999.00,"qty":20,"url":"/images/products/len4.png"},

 {"title":"Xiaomi Redmi 3S Prime","category":"electronics",dept:"mobiles",subdept:"redmi","description":"5.00-inch touchscreen display with a resolution of 1080 pixels, powered by 2.15GHz quad-core Qualcomm, 2GB of RAM, 32GB of internal storage, 13-megapixel primary camera","price":8990.00,"qty":20,"url":"/images/products/mi1.jpg"},

 {"title":"Xiaomi Note3","category":"electronics",dept:"mobiles",subdept:"redmi","description":"5.50-inch touchscreen display with a resolution of 1080 pixels, powered by 1.6GHz quad-core Qualcomm, 3GB of RAM, 64GB of internal storage, 16-megapixel primary camera","price":19990.00,"qty":20,"url":"/images/products/mi2.png"},

 {"title":"Xiaomi Mi max","category":"electronics",dept:"mobiles",subdept:"redmi","description":"7.00-inch touchscreen display with a resolution of 1080 pixels, powered by 1.9GHz quad-core Qualcomm, 4GB of RAM, 32GB of internal storage, 8-megapixel primary camera","price":10990.00,"qty":20,"url":"/images/products/mi3.png"},

 {"title":"Xiaomi Mi4","category":"electronics",dept:"mobiles",subdept:"redmi","description":"5.00-inch touchscreen display with a resolution of 1080 pixels, powered by 2.4GHz quad-core Qualcomm, 3GB of RAM, 32GB of internal storage, 13-megapixel primary camera","price":12990.00,"qty":20,"url":"/images/products/mi4.png"},

 {"title":"Dell vostro 3542","category":"electronics",dept:"pc",subdept:"dell","description":"1.7GHz Intel Core i3-4005U 4th Gen Processor,4GB DDR3L RAM,15.6-inch LED Backlit Display,500GB SATA Hard Drive,Intel HD Graphics 4400,Linux","price":25164.00,"qty":20,"url":"/images/products/dell1.png"},

 {"title":"Dell inspiron 5559","category":"electronics",dept:"pc",subdept:"dell","description":"1.8GHz Intel Core i3 5th Gen Processor,8GB RAM,14-inch LED Backlit Display,1TB SATA Hard Drive,ubuntu Linux","price":30999.00,"qty":20,"url":"/images/products/dell2.png"},

 {"title":"Dell inspiron core i5","category":"electronics",dept:"pc",subdept:"dell","description":"2.15GHz Intel Core i5 6th Gen Processor,8GB RAM,15-inch LED Backlit Display,500GB Hard Drive,Intel HD Graphics 2GB,Windows 10","price":27899.00,"qty":20,"url":"/images/products/dell3.png"},

 {"title":"HP ProBook 440 G2 (L9V62PP)","category":"electronics",dept:"pc",subdept:"hp","description":"Intel Core i5-5200U processor,4GB RAM,500GB HDD,DOS OS","price":52784.00,"qty":20,"url":"/images/products/hp1.png"},

 {"title":"HP pavilion G6","category":"electronics",dept:"pc",subdept:"hp","description":"Intel Core i5-5200U processor,8GB RAM,500GB HDD,Windows 10","price":49999.00,"qty":20,"url":"/images/products/hp2.png"},

 {"title":"HP 15-AC027TX (M9V03PA)","category":"electronics",dept:"pc",subdept:"hp","description":"Intel Core i5-5200U processor,4GB RAM,1TB HDD,Windows 8.1","price":39899.00,"qty":20,"url":"/images/products/hp3.png"},

 {"title":"Acer Aspire E5 Notebook","category":"electronics",dept:"pc",subdept:"acer","description":"Intel Core i5 4210,4GB RAM, 14.5 inch Screen,Linux Integrated HD Graphics","price":26900.00,"qty":20,"url":"/images/products/acer1.png"},

 {"title":"Acer Predator core","category":"electronics",dept:"pc",subdept:"acer","description":"Intel Core i7,16GB RAM,17.3 inch screen,windows 10,Integrated HD Graphics","price":46900.00,"qty":20,"url":"/images/products/acer2.png"},

 {"title":"Acer One 10 Atom","category":"electronics",dept:"pc",subdept:"acer","description":"Intel Core i5,2GB RAM,500GB HDD,10.00 inch screen,Integrated HD Graphics","price":22900.00,"qty":20,"url":"/images/products/acer3.png"},

 {"title":"Google Nexus 10","category":"electronics",dept:"tablets",subdept:"google","description":"A15 Dual-Core Processor,Android 4.2 (Jelly Bean),14 inch Touchscreen,2GB RAM, 16GB Flash Storage, WiFi, Bluetooth, Dual Camera, Micro HDMI","price":64326.00,"qty":20,"url":"/images/products/nex10.png"},

 {"title":"Google Nexus 5","category":"electronics",dept:"tablets",subdept:"google","description":"Dual-Core Processor,Android v4.4,15.6 inch Touchscreen,2GB RAM, 16GB Flash Storage, WiFi, Bluetooth, Dual Camera","price":50300.00,"qty":20,"url":"/images/products/nex5.png"},

 {"title":"Google pixel C","category":"electronics",dept:"tablets",subdept:"google","description":"Dual-Core Processor,Android 4.2,10.2 inch Touchscreen,3GB RAM, 16GB Flash Storage, WiFi, Bluetooth, Dual Camera, Micro HDMI","price":62999.00,"qty":20,"url":"/images/products/pixelc.png"},

 {"title":"Apple iPad Air 2 Tablet","category":"electronics",dept:"tablets",subdept:"apple","description":"Capacity : WiFi,32GB storage,Display 9.7-inch, 64bit architecture,Bluetooth 4.2 technology","price":30020.00,"qty":20,"url":"/images/products/air2.png"},

 {"title":"Apple iPad Mini 4 Tablet","category":"electronics",dept:"tablets",subdept:"apple","description":"Capacity : WiFi,16GB storage,Display 7.9-inch,Bluetooth 4.4 technology","price":30020.00,"qty":20,"url":"/images/products/mini4.jpg"},

 {"title":"Apple iPad Pro Tablet","category":"electronics",dept:"tablets",subdept:"apple","description":"Capacity : WiFi,32GB storage,Display 10.2-inch, 64bit architecture,Bluetooth 4.2 technology","price":30020.00,"qty":20,"url":"/images/products/ipadpro.png"},

 {"title":"Micromax Canvas Tab P701","category":"electronics",dept:"tablets",subdept:"micromax","description":"7.00-inch touchscreen,1GHz quad-core,1GB of RAM,5-megapixel primary camera ,3500mAh battery,Wi-Fi, Bluetooth, USB OTG, FM, 3G and 4G","price":6666.00,"qty":20,"url":"/images/products/canvastab.jpg"},

 {"title":"Micromax Funbook P255","category":"electronics",dept:"tablets",subdept:"micromax","description":"7.00-inch touchscreen,1GHz quad-core,512MB of RAM,2-megapixel primary camera ,2600mAh battery,Wi-Fi,USB OTG, FM","price":3399.00,"qty":20,"url":"/images/products/funbook.png"},

 {"title":"Micromax Canvas Breeze Tab P660","category":"electronics",dept:"tablets",subdept:"micromax","description":"7.85-inch touchscreen,1GHz quad-core,1GB of RAM,5-megapixel primary camera ,4000mAh battery,Wi-Fi, Bluetooth, USB OTG, FM, 3G and 4G","price":8700.00,"qty":20,"url":"/images/products/breeze.jpg"},

 {"title":"The Secret Garden","category":"books","dept":"kindleebooks","author":"FRANCES HODGSON BURNETT","price":156.00,"qty":20,"url":"/images/products/secret.jpg","description":"The Secret Garden (1909) is one of Frances Hodgson Burnett’s most popular novels. The book tells the story of Mary Lennox, a spoiled, contrary, solitary child raised in India but sent to live in her uncle’s manor in Yorkshire after her parents' death. She is left to herself by her uncle, Mr. Craven, who travels often to escape the memory of his deceased wife. The only person who has time for Mary is her chambermaid, Martha. It is Martha who tells Mary about Mrs. Craven's walled garden, which has been closed and locked since her death. Mary becomes intrigued by the prospect of the forgotten garden, and her quest to find out the garden's secrets leads her to discover other secrets hidden in the manor. These discoveries combined with the unlikely friendships she makes along the way help Mary come out of her shell and find new fascination with the world around her."},

 {"title":"Gulliver's travels","category":"books","dept":"kindleebooks","author":"JONATHAN SWIFT","price":160.00,"qty":20,"url":"/images/products/travels.jpg","description":"Gulliver's Travels is an adventure story (in reality, a misadventure story) involving several voyages of Lemuel Gulliver, a ship's surgeon, who, because of a series of mishaps en route to recognized ports, ends up, instead, on several unknown islands living with people and animals of unusual sizes, behaviors, and philosophies, but who, after each adventure, is somehow able to return to his home in England where he recovers from these unusual experiences and then sets out again on a new voyage."},

 {"title":"A Brief History of Time","category":"books","dept":"kindleebooks","author":"STEPHEN HAWKING","price":250.00,"qty":20,"url":"/images/products/time.jpg","description":"A Brief History of Time is a popular-science book that helps a layman understand the basic questions of our existence and physics. It is a scientific attempt at explaining the origin of the universe. The author has collated theories created by varying cultures over the years, taking you on a historic and scientific journey."},

 {"title":"pride and prejudice","category":"books","dept":"fiction","author":"JANE AUSTEN","price":90.00,"qty":20,"url":"/images/products/pride.jpg","description":"It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife. So begins Pride and Prejudice, Jane Austen witty comedy of manners—one of the most popular novels of all time—that features splendidly civilized sparring between the proud Mr Darcy and the prejudiced Elizabeth Bennet as they play out their spirited courtship in a series of eighteenth-century drawing-room intrigues"},

 {"title":"Adventures of Huckleberry Finn","category":"books","dept":"fiction","author":"MARK TWAIN","price":115.00,"url":"/images/products/adventure.jpg","description":"Readers meet Huckleberry Finn after he's been taken in by Widow Douglas and her sister, Miss Watson, who intend to teach him religion and proper manners. Huck soon sets off on an adventure to help the widow's slave, Jim, escape up the Mississippi to the free states. By allowing Huck to tell his own story, Mark Twain addresses America's painful contradiction of racism and segregation in a free and equal society"},

 {"title":"Everyone Has A Story","category":"books","dept":"fiction","author":"Savi Sharma","price":120.00,"url":"/images/products/story.jpg","description":"Everyone Has A Story is a story focussing youngsters. Which shows how today we are just passing our life rather than Living. Everyone wants to do something in his life for himself without considering anyone else"}];
    
 for(var i = 0; i< data.length; i++){
     db.categories.insert(data[i],function(err,docs){
         console.log("Inserted data at ",i); 
     });
 }
    
    res.redirect('/');
});

module.exports = router;