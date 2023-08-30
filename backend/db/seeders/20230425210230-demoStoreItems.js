'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        await queryInterface.bulkInsert('StoreItems', [
            {
                name: 'Pflueger President Spinning Reel',
                manufacturer: 'Pflueger',
                price: 59.95,
                description: "Smooth performance plus toughness - a great value! The Pflueger® President® Spinning Reel's lightweight graphite body houses a rugged, corrosion-resistant stainless steel main shaft and components. The system runs effortlessly on 9 stainless steel ball bearings (Model PRESSP20 has 6), plus 1 instant anti-reverse bearing, and the machined and ported, double-anodized aluminum spool is braid-ready. Smooth multi-disc drag; solid aluminum bail wire; graphite body and rotor; slow oscillation gearing; soft touch handle knob; on/off anti-reverse; easy left/right conversion.",
                details: 'Retrieve-Left/Right,Gear Ratio-5.2:1,Description-20 Size,Model Number-PRESSP20X,Ball Bearings-6+1,Max Drag-7 Lbs.,Reel Weight(oz)-6.2,Line Capacity-4/100,Braid Capacity-6/125,Recovery-20.7" Per Turn',
                imageUrl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1263,q_auto,w_1300/c_limit,h_1263,w_1300/v1/ProductImages/100/master1_100042491_main?pgw=1&pgwact=1'
            },
            {
                name: 'Abu Garcia Revo X Baitcast Reel',
                manufacturer: 'Abu Garcia',
                price: 69.97,
                description: "An exceptional value, the Abu Garcia® Revo® X Baitcast Reel makes it possible for any angler to step up to one of the highest-rated reel series in bass fishing. Initially designed for professional use, Revo low-profile baitcasters are widely revered for their smart, forward-thinking design, durability, and performance on the water. Fish one, and be amazed at this reel's ability to cast light baits for distance, its lightweight precision, and especially its power during the fight. Features all the basics that make the Abu Garcia Revo one of the most sought-after reel series in fishing, including its corrosion-resistant X2-Cräftic™ alloy frame; super-efficient Duragear™ brass gearing with advanced D2 Gear Design™; advanced DuraClutch engagement system for exceptional smoothness and durability; smooth 7+1 system with stainless steel ball bearings plus roller bearing; MagTrax™ brake system for consistent pressure throughout the cast; strong, reliable Carbon Matrix™ drag with up to 18 lbs. of drag pressure; compact bent handle and drag star; and a lube port for easy maintenance.",
                details: 'Retrieve-Right,Gear Ratio-6.6:1,Model Number-REVO4X,Ball Bearings-7+1,Max Drag-18 Lbs.,Reel Weight (oz)-7.9,Line Capacity-12/145,Braid Capacity-30/140,Recovery-27" Per Turn',
                imageUrl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1263,q_auto,w_1300/c_limit,h_1263,w_1300/v1/ProductImages/100/master1_100026989_main?pgw=1&pgwact=1'
            },
            {
                name: "Lew's Speed Spool LFS Baitcast Reel",
                manufacturer: "Lew's",
                price: 74.95,
                description: "If you think it's tough to find a high-performance baitcaster that fits a C-note budget these days, think again. The Lew's® Speed Spool® LFS Baitcast Reel is equipped to fit any tournament bass angler's criteria, at a price any weekend angler can justify. Weighing just 7.1 oz., this low-profile reel brings all the benefits of Lew's 'Lighter, Faster, Stronger' platform. The 1-piece aluminum frame design keeps internal components aligned for smooth operation and improved performance. A removable graphite palming sideplate allows easy access to the 34mm machine forged, anodized aluminum drilled spool; the zirconia line guide promotes smooth distance casting. Precision-cut solid brass Speed Gears and P2 bearing-supported pinion gear technology provide superior gear mesh and system stability, for super smooth, quiet retrieves and excellent durability. The 9+1 bearing system includes 9 double-shielded stainless steel bearings plus Zero-Reverse 1-way clutch bearing; the externally adjustable MCS magnetic brake enables you to quickly adapt to changing conditions. Rugged Rulon drag with up to 15 lbs. of drag power; 95mm bowed aluminum handle with custom Soft Touch paddles; audible-click bowed drag star; external lube port. 8.3:1, 7.5:1, and 6.8:1 retrieve models feature a standard drilled spool; 5.6:1 model has a high-capacity dimpled spool.",
                details: 'Retrieve-Right,Gear Ratio-5.6:1,Model Number-SS1SA,Ball Bearings-9+1,Max Drag-15 Lbs.,Reel Weight (oz)-7.1,Line Capacity-12/140,Braid Capacity-50/140,Recovery-23" Per Turn',
                imageUrl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1263,q_auto,w_1300/c_limit,h_1263,w_1300/v1/ProductImages/100/master1_100153725_main?pgw=1&pgwact=1'
            },
            {
                name: "Lew's KVD Baitcast Reel",
                manufacturer: "Lew's",
                price: 114.95,
                description: "Made to The Master's specifications, Lew's KVD Baitcast Reel leverages Kevin VanDam's expertise to give you a solid, sweet-casting reel that emphasizes problem-free performance in tournament situations. The advanced feature set includes: 1-piece aluminum frame with removable graphite sideplates; upsized 34mm machined aluminum spool; high-strength solid brass Speed Gears®; P2™ Super Pinion™ bearing supported pinion gear; Multi-Setting Brake (MSB) dual cast control system with both external-dial magnetic brake and internal 4-shoe centrifugal brake for incredibly precise fine tuning; premium 9+1 bearing system with double-shielded stainless steel ball bearings and Zero Reverse®; carbon fiber drag; bowed lightweight 95mm aluminum reel handle with EVA paddles; Speed Keeper® hook keeper; external lube port.",
                details: 'Retrieve-Right,Gear Ratio-6.2:1,Model Number-KVD1H,Ball Bearings-9+1,Max Drag-20 Lbs.,Reel Weight (oz)-7.6,Line Capacity-12/120,Braid Capacity-50/120,Recovery-25" Per Turn',
                imageUrl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1263,q_auto,w_1300/c_limit,h_1263,w_1300/v1/ProductImages/100/master1_100822856_main?pgw=1&pgwact=1'
            },
            {
                name: "Bass Pro Shops CatMaxx 3000C Baitcast Reel",
                manufacturer: "Bass Pro Shops",
                price: 69.99,
                description: "Hardcore cat wranglers have spoken! Our popular Bass Pro Shops® CatMaxx™ 3000C Baitcast Reel now sports beefed-up knobs and a larger-radius handle, not to mention a smokin' new look. More than ever, this great-looking, beast-tested round reel is built like a tank to overpower gigantic catfish, even in swift current. The rigid, 1-pc. aluminum frame is the foundation—it houses a high-capacity, forged aluminum spool that is double-anodized for long-term durability. The lightweight aluminum sideplates house the high-strength brass gearing and a 4 bearing system with Powerlock™ instant anti reverse. The Bass Pro Shops magnetic braking system is quickly adjustable via an external dial, to ensure long casts without overruns. The drag system is a calibrated stack of 3 carbon fiber and 3 TPFE discs for ultra-smooth, powerful function. Equipped with a bait clicker switch, so you'll know right away when something is moving off with your bait.",
                details: 'Retrieve-Right,Gear Ratio-5.2:1,Model Number-CMX3000C,Ball Bearings-3+1,Max Drag-11 Lbs.,Reel Weight (oz)-12,Line Capacity-14/240,Braid Capacity-30/400,Recovery-25" Per Turn',
                imageUrl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1263,q_auto,w_1300/c_limit,h_1263,w_1300/v1/ProductImages/100/master1_100822891_main?pgw=1&pgwact=1'
            },
            {
                name: "Shimano SLX DC Baitcast Reel",
                manufacturer: "Shimano",
                price: 199.99,
                description: "Specially equipped with Digital Control braking, the Shimano® SLX DC Baitcast Reel brings Shimano's most advanced casting system ever into the realm of affordability. The brand's legendary quality is unmistakable in the low-profile SLX DC, starting with its palm-friendly, all-metal Hagane® body; extremely tight and rigid, this design prevents body flex, ensuring smooth, balanced winding with exceptional cranking power. Altogether, it's the perfect framework for the unmatched precision of Shimano's extraordinary DC braking technology, a computerized cast control system that monitors the reel's spool speed 1,000 times per second and automatically applies the correct brake pressure to prevent backlash and maximize casting distance. On the retrieve, you'll find the 4+1 bearing system to be lean and efficient, while the sturdy drag system provides up to 11-12 lbs. of maximum drag – more than enough to turn any bass headed for cover. Extended handle for extra cranking power.",
                details: 'Retrieve-Right,Gear Ratio-6.3:1,Model Number-SLXDC150,Ball Bearings-4+1,Max Drag-12 Lbs.,Reel Weight (oz)-7.6,Line Capacity-10/120,Braid Capacity-30/135,Recovery-26" Per Turn',
                imageUrl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1263,q_auto,w_1300/c_limit,h_1263,w_1300/v1/ProductImages/100/master1_100272880_main?pgw=1&pgwact=1'
            },
            {
                name: "Daiwa Regal LT Spinning Reel",
                manufacturer: "Daiwa",
                price: 59.99,
                description: "Good news for the value-conscious angler! The popular Daiwa® Regal LT Spinning Reel is a lighter, more technical version of its former self, yet remains the workhorse choice for anglers of all skill levels. As a member of Daiwa's LT (Light but Tough) lineup, the redesigned Regal is built on a true carbon frame that provides maximum rigidity keeping the weight down. Its smooth, balanced Air Rotor with Air Bail system further reduces weight by another 15%. You'll find the 9+1 bearing system delivers a smooth ride on every outing, and the ATD drag is equally smooth under pressure. Machined aluminum handle adds to the lightweight power package. More than ever, the Daiwa Regal LT represents a great performance bargain for the well-informed angler!",
                details: 'Retrieve-Left/Right,Gear Ratio-5.2:1,Description-1000 Size,Model Number-RGLT1000D,Ball Bearings-9+1,Max Drag-11 Lbs.,Reel Weight (oz)-6.7,Line Capacity-6/160,Braid Capacity-6/320,Recovery-25.5" Per Turn',
                imageUrl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_971,q_auto,w_1000/c_limit,h_971,w_1000/v1/ProductImages/100/master1_100233065_main?pgw=1'
            },
            {
                name: "Shimano Stradic FL Spinning Reel",
                manufacturer: "Shimano",
                price: 199.99,
                description: "Beefed up and jazzed up, the Shimano® Stradic® FL Spinning Reel sets a whole new performance standard for its price point, with extreme technology representing the latest goodies from Shimano – including SilentDrive, a total redesign of all moving parts to eliminate noise and vibration. As always, you get a whisper-smooth, strong, incredibly durable reel that can match up to any quarry in freshwater, as well as inshore saltwater. Its ultra-hard Hagane® cold forged drive gear is now twice as strong as before, for unstoppable power; it combines with Shimano's advanced MicroModule Gear II and X-Ship pinion gear-support system to ensure perfect gear mesh at all times, for unflinchingly smooth control and exceptional durability despite heavy loads. The sleek Hagane body prevents flex during the fight; X-Protect waterproofing helps maintain system smoothness and longevity; and the high-end Long Stroke Spool makes every cast as long and accurate as possible. 6 S A-RB shielded stainless steel ball bearings (plus 1 Super Stopper II Anti Reverse roller bearing) are backed by the high-efficiency Propulsion Line Management System. Additional performance features include vibration-eliminating Dyna-Balance®, line twist-reducing Power Roller II, SR-Concept, and friction-reducing Aero Wrap® II. 3000–5000 sizes feature rugged Cross Carbon drag for enhanced saltwater performance; 5000 size comes fitted with a power handle.",
                details: 'Retrieve-Left/Right,Gear Ratio-6.0:1,Description-1000 Size,Model Number-ST1000HGFL,Ball Bearings-6+1,Max Drag-7 Lbs.,Reel Weight (oz)-6.5,Line Capacity-4/160,Braid Capacity-10/95',
                imageUrl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1263,q_auto,w_1300/c_limit,h_1263,w_1300/v1/ProductImages/100/master3_100277523_main?pgw=1&pgwact=1'
            },
            {
                name: "Lew's KVD Spinning Reel",
                manufacturer: "Lew's",
                price: 74.95,
                description: "Time to retire your amateur status and start fishing like a legend. Lew's® partnered with angling legend Kevin VanDam to build the KVD Spinning Reel like only he knows how. The Lew's KVD comes loaded with innovative technologies other reels can't touch. Premium 10-bearing system uses 9 ball bearings and a Zero Reverse® one-way clutch bearing for silky smooth performance from cast through retrieve. No worries about longevity. High-strength, lightweight C40 Carbon skeletal speed rotor with thick aluminum bail wire is ready to go all out, all the time. Aluminum body and sideplate adds a rugged outer shell of protection. S-curve oscillation system ensures easy start-up retrieval and even line lay on the braid-ready double anodized knurled machined aluminum spool. The smooth, powerful, and consistent DuraMax™ drag system absorbs the fight right out of the energetic fish fights. Speed Lube® delivers exceptional smoothness and uninterrupted performance in all weather conditions. Aluminum handle with an EVA handle knob for a comfortable grip. Quality solid-brass pinion gear and durable stainless steel main shaft. Adjusts for right- or left-hand retrieve.",
                details: 'Retrieve-Left/Right,Gear Ratio-6.2:1,Description-200 Size,Model Number-KVD200,Ball Bearings-9+1,Max Drag-14 Lbs.,Reel Weight (oz)-8.5,Line Capacity-8/120,Braid Capacity-30/120,Recovery-31" Per Turn',
                imageUrl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1263,q_auto,w_1300/c_limit,h_1263,w_1300/v1/ProductImages/100/master1_100828771_main?pgw=1&pgwact=1'
            },
            {
                name: "Offshore Angler Sea Lion Spinning Reel",
                manufacturer: "Offshore Angler",
                price: 59.99,
                description: "Saltwater fishing doesn't have to be expensive. Take this Offshore Angler™ Sea Lion™ Spinning Reel, for instance. Built saltwater tough, it's priced to please. Its 5-bearing system assures smooth performance and even includes our Powerlock™ instant anti-reverse. This dependable workhorse boasts corrosion resistant carbon composite frame and rotor, a strong double anodized aluminum spool, and a stainless steel main shaft. Once the hook is set, this baby uses a smooth and powerful 10 disk drag stack to slow tough saltwater sluggers. Other features include an anodized aluminum handle, a solid stainless steel bail wire, and an oversized, hard-chrome-plated line roller. The Sea Lion is a lot of reel for the money, and we're not lyin'.",
                details: 'Retrieve-Left/Right,Gear Ratio-4.9:1,Description-5000 Size,Model Number-SLS50,Ball Bearings-4+1,Max Drag-35 Lbs.,Reel Weight(oz)-14.5,Line Capacity-14/220,Braid Capacity-50/210,Recovery-34.5" Per Turn',
                imageUrl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1259,q_auto,w_1300/c_limit,h_1259,w_1300/v1/ProductImages/151/master1_1404300811438_main?pgw=1&pgwact=1'
            },
            {
                name: "Shimano Sedona FI Spinning Reel",
                manufacturer: "Shimano",
                price: 79.99,
                description: "The days of wishing for affordable performance are over. The Shimano® Sedona® FI Spinning Reel still offers a low price point, but a number of significant performance upgrades have made this reel a truly impressive value. With the addition of signature high-end Shimano features, the popular Sedona is now a lighter, stronger, faster, and more durable spinning reel than ever before. This solid reel now incorporates cold-forged Hagane® gears, a lighter G-Free body frame, and a super-light and smooth Magnumlite™ rotor on all models. In addition, all models except the 1000 size now have higher gear ratios and increased drag power. The Sedona still features its smooth, trouble-free 3+1 ball bearing system, but the great news is that it's now equipped to excel in a much wider range of applications, from light freshwater to heavy offshore duty. You'll marvel at its feel and handling – and especially the price!",
                details: 'Retrieve-Left/Right,Gear Ratio-5.0:1,Description-1000 Size,Model Number-SE1000FI,Ball Bearings-3+1,Max Drag-7 Lbs.,Reel Weight(oz)-7.6,Line Capacity-6/110,Braid Capacity-15/85,Recovery-26" Per Turn',
                imageUrl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1259,q_auto,w_1300/c_limit,h_1259,w_1300/v1/ProductImages/100/master1_100039963_main?pgw=1&pgwact=1'
            },
            {
                name: "PENN Battle III Spinning Reel",
                manufacturer: "PENN",
                price: 119.95,
                description: "Hard to imagine, but even with little to no price change, the PENN® Battle® III Spinning Reel is stronger, smoother, and more durable than previous versions. Feel free to subject it to all the braided-line abuse your saltwater exploits can muster! You'll find the Battle III up to the challenge, with its Full Metal Body and sideplate, braid-ready Superline Spool with line capacity rings, and power-driven CNC Gear™ Technology. The 5+1 sealed stainless steel ball bearing system keeps performance reliable, and PENN's legendary HT-100™ Carbon Fiber Drag Washers apply smooth, relentless pressure at all settings. When you're ready for battle, this is your reel!",
                details: 'Retrieve-Left/Right,Gear Ratio-6.2:1,Description-T Handle,Model Number-BTLIII3000,Ball Bearings-5+1,Max Drag-15 Lbs.,Reel Weight(oz)-9.7,Line Capacity-10/165,Braid Capacity-20/180,Recovery-35" Per Turn',
                imageUrl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1259,q_auto,w_1300/c_limit,h_1259,w_1300/v1/ProductImages/151/master2_100822845_main?pgw=1&pgwact=1'
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageUrl: ''
            },
        ], {});
    },

    async down (queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('StoreItems', null, {});
    }
};
