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
                imageurl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1263,q_auto,w_1300/c_limit,h_1263,w_1300/v1/ProductImages/100/master1_100153725_main?pgw=1&pgwact=1'
            },
            {
                name: "Lew's KVD Baitcast Reel",
                manufacturer: "Lew's",
                price: 114.95,
                description: "Made to The Master's specifications, Lew's KVD Baitcast Reel leverages Kevin VanDam's expertise to give you a solid, sweet-casting reel that emphasizes problem-free performance in tournament situations. The advanced feature set includes: 1-piece aluminum frame with removable graphite sideplates; upsized 34mm machined aluminum spool; high-strength solid brass Speed Gears®; P2™ Super Pinion™ bearing supported pinion gear; Multi-Setting Brake (MSB) dual cast control system with both external-dial magnetic brake and internal 4-shoe centrifugal brake for incredibly precise fine tuning; premium 9+1 bearing system with double-shielded stainless steel ball bearings and Zero Reverse®; carbon fiber drag; bowed lightweight 95mm aluminum reel handle with EVA paddles; Speed Keeper® hook keeper; external lube port.",
                details: 'Retrieve-Right,Gear Ratio-6.2:1,Model Number-KVD1H,Ball Bearings-9+1,Max Drag-20 Lbs.,Reel Weight (oz)-7.6,Line Capacity-12/120,Braid Capacity-50/120,Recovery-25" Per Turn',
                imageurl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1263,q_auto,w_1300/c_limit,h_1263,w_1300/v1/ProductImages/100/master1_100822856_main?pgw=1&pgwact=1'
            },
            {
                name: "Bass Pro Shops CatMaxx 3000C Baitcast Reel",
                manufacturer: "Bass Pro Shops",
                price: 69.99,
                description: "Hardcore cat wranglers have spoken! Our popular Bass Pro Shops® CatMaxx™ 3000C Baitcast Reel now sports beefed-up knobs and a larger-radius handle, not to mention a smokin' new look. More than ever, this great-looking, beast-tested round reel is built like a tank to overpower gigantic catfish, even in swift current. The rigid, 1-pc. aluminum frame is the foundation—it houses a high-capacity, forged aluminum spool that is double-anodized for long-term durability. The lightweight aluminum sideplates house the high-strength brass gearing and a 4 bearing system with Powerlock™ instant anti reverse. The Bass Pro Shops magnetic braking system is quickly adjustable via an external dial, to ensure long casts without overruns. The drag system is a calibrated stack of 3 carbon fiber and 3 TPFE discs for ultra-smooth, powerful function. Equipped with a bait clicker switch, so you'll know right away when something is moving off with your bait.",
                details: 'Retrieve-Right,Gear Ratio-5.2:1,Model Number-CMX3000C,Ball Bearings-3+1,Max Drag-11 Lbs.,Reel Weight (oz)-12,Line Capacity-14/240,Braid Capacity-30/400,Recovery-25" Per Turn',
                imageurl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1263,q_auto,w_1300/c_limit,h_1263,w_1300/v1/ProductImages/100/master1_100822891_main?pgw=1&pgwact=1'
            },
            {
                name: "Shimano SLX DC Baitcast Reel",
                manufacturer: "Shimano",
                price: 199.99,
                description: "Specially equipped with Digital Control braking, the Shimano® SLX DC Baitcast Reel brings Shimano's most advanced casting system ever into the realm of affordability. The brand's legendary quality is unmistakable in the low-profile SLX DC, starting with its palm-friendly, all-metal Hagane® body; extremely tight and rigid, this design prevents body flex, ensuring smooth, balanced winding with exceptional cranking power. Altogether, it's the perfect framework for the unmatched precision of Shimano's extraordinary DC braking technology, a computerized cast control system that monitors the reel's spool speed 1,000 times per second and automatically applies the correct brake pressure to prevent backlash and maximize casting distance. On the retrieve, you'll find the 4+1 bearing system to be lean and efficient, while the sturdy drag system provides up to 11-12 lbs. of maximum drag – more than enough to turn any bass headed for cover. Extended handle for extra cranking power.",
                details: 'Retrieve-Right,Gear Ratio-6.3:1,Model Number-SLXDC150,Ball Bearings-4+1,Max Drag-12 Lbs.,Reel Weight (oz)-7.6,Line Capacity-10/120,Braid Capacity-30/135,Recovery-26" Per Turn',
                imageurl: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_1263,q_auto,w_1300/c_limit,h_1263,w_1300/v1/ProductImages/100/master1_100272880_main?pgw=1&pgwact=1'
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageurl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageurl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageurl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageurl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageurl: ''
            },
            {
                name: "",
                manufacturer: "",
                price: 59.95,
                description: "",
                details: '',
                imageurl: ''
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
