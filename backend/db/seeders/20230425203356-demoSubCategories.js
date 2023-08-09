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
        await queryInterface.bulkInsert('SubCategories', [
            {
                title: 'Baitcast Reels',
                category_id: 1,
                imageUrl: 'https://images.unsplash.com/photo-1689576408373-bcb41174a964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            },
            {
                title: 'Spinning Reels',
                category_id: 1,
                imageUrl: 'https://images.unsplash.com/photo-1687143011322-67bcdb248d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            },
            {
                title: 'Spincast Reels',
                category_id: 1,
                imageUrl: 'https://huntingfishinggear.com/wp-content/uploads/2017/07/Zebco-33-Spincast-Reel.jpg'
            },
            {
                title: 'Saltwater Reels',
                category_id: 1,
                imageUrl: 'https://i.ebayimg.com/00/s/MTU2MVgxNTAw/z/~o0AAOSw29JcNaeS/$_57.JPG?set_id=2'
            },
            {
                title: 'Fly Reels',
                category_id: 1,
                imageUrl: 'https://i.stpost.com/lamson-litespeed-3-series-iv-fly-reel~a~147my_3~1500.1.jpg'
            },
            {
                title: 'Hard Bait Lures',
                category_id: 2,
                imageUrl: 'https://i5.walmartimages.com/asr/f8d99894-abd4-4e2d-be09-204bae035309_1.a253666c9259fd13ff9c12732d782518.jpeg'
            },
            {
                title: 'Soft Bait Lures',
                category_id: 2,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1Y_X5NpXXXXXjXFXXq6xXFXXXg/isca-Artificial-Soft-baits-wholesale-fishing-tackle-soft-plastic-fishing-baits-13CM-8G-soft-bait-lure.jpg'
            },
            {
                title: 'Spinnerbaits & Buzzbaits',
                category_id: 2,
                imageUrl: 'https://i5.walmartimages.com/asr/96d19a54-b4dd-463b-b9bb-11051c36dd57_1.7310a31fd471ddef20384e180051b264.jpeg'
            },
            {
                title: 'Bass Jigs',
                category_id: 2,
                imageUrl: 'https://res.cloudinary.com/mysterytacklebox/image/fetch/q_auto,f_auto/w_1098,h_824,c_limit/w_1098,h_824,c_pad,b_white/https://karls.azureedge.net/media/catalog/product/t/h/thunderhawkbassjig.jpg'
            },
            {
                title: 'Saltwater Lures',
                category_id: 2,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB16gYYLMHqK1RjSZFgq6y7JXXaY/BassLegend-Fishing-Saltwater-Lure-Topwater-Surface-Pencil-Bait-Sea-Bass-Pike-Lure-Walk-The-Dog-120mm.jpg'
            },
            {
                title: 'Panfish Lures',
                category_id: 2,
                imageUrl: 'https://www.sharetheoutdoors.com/wp-content/uploads/2016/11/For-STO-11212016-Picture-1of2.jpg'
            },
            {
                title: 'Fishing Spoons',
                category_id: 2,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1b_zKbb7U5uJjSZFFq6yYHpXaC/5pcs-lot-3-5cm-4-5g-fishing-spoon-trout-lures-fluttering-spoons-Japanese-freshwater-fishing-lures.jpg'
            },
            {
                title: 'Lure Kits',
                category_id: 2,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1qPE4c6rguuRjy0Feq6xcbFXay/Goture-31pcs-33pcs-Fishing-Lure-Kit-Wobblers-Popper-Spinnerbait-Soft-lure-Crankbaits-Set-For-Freshwater-And.jpg'
            },
            {
                title: 'Fillet Knives & Tables',
                category_id: 3,
                imageUrl: 'https://image.sportsmansguide.com/adimgs/l/6/670669m3_ts.jpg'
            },
            {
                title: 'Fishing Nets',
                category_id: 3,
                imageUrl: 'https://i5.walmartimages.com/asr/08479664-239a-466c-80fc-66a639e88fc1_1.9ea231961f550005c31268b086405585.jpeg'
            },
            {
                title: 'Bait Buckets & Management',
                category_id: 3,
                imageUrl: 'https://image.sportsmansguide.com/adimgs/l/2/225365_ts.jpg'
            },
            {
                title: 'Saltwater Accessories',
                category_id: 3,
                imageUrl: 'https://www.etrailer.com/static/images/pics/3/0/302-5106_14_1000.jpg'
            },
            {
                title: 'Rod & Reel Accessories',
                category_id: 3,
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51FeTWWC2aL.jpg'
            },
            {
                title: 'Rod Holders & Racks',
                category_id: 3,
                imageUrl: 'https://image.sportsmansguide.com/adimgs/l/2/231533_ts.jpg'
            },
            {
                title: 'Tools & Pliers',
                category_id: 3,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1wFmESXXXXXc.apXXq6xXFXXXo/New-design-Alumimum-Multi-function-Fishing-Pliers-Lure-Fishing-Tool-Fishing-Tackle-Free-Shipping.jpg'
            },
            {
                title: 'Rulers & Scales',
                category_id: 3,
                imageUrl: 'https://i5.walmartimages.com/asr/5ddc0f7d-775e-453a-a055-6ba29b5d45b7_1.8d702e18f498cf64495421faa945acad.jpeg'
            },
            {
                title: 'Baitcast Combos',
                category_id: 4,
                imageUrl: 'https://i5.walmartimages.com/asr/a3fc5e61-8c41-490c-aa6e-071f80ccbcef_1.bc4839fd271d550e81cc2fd33fbace1e.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff'
            },
            {
                title: 'Spinning Combos',
                category_id: 4,
                imageUrl: 'https://www.sportsmans.com/medias/pflueger-president-spinning-combo-7ft-medium-2pc-1538900-2.jpg?context=bWFzdGVyfGltYWdlc3w2MjY2M3xpbWFnZS9qcGVnfGltYWdlcy9oZmYvaGE0Lzk3Mzg2MDI3NzQ1NTguanBnfGUzY2I0NDdhOTcwMThhODM5MTg1ZWRjOWM3MDBmZjUwMzMxOGFiOWExY2M1NWNiM2ZkMjQxMTI0YTBkODk0NTI'
            },
            {
                title: 'Spincast Combos',
                category_id: 4,
                imageUrl: 'https://i5.walmartimages.com/asr/64d0a013-c03a-41dc-b5b5-0169cd269e61_1.cc63c2526e575e692863ef5be19d62de.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff'
            },
            {
                title: 'Saltwater Combos',
                category_id: 4,
                imageUrl: 'https://www.sportsmans.com/medias/penn-wrath-saltwater-spinning-combo-8ft-medium-heavy-2pc-1538968-3.jpg?context=bWFzdGVyfGltYWdlc3w0NDA5N3xpbWFnZS9qcGVnfGltYWdlcy9oMTgvaDlmLzk3Mzg2MzQ0OTM5ODIuanBnfDU4OTQ5ZGIyOWRiNmQ2Mzc3ZTRkMzIxYzg3NzFjN2U3OWQ3OTk2YTgzODNiNzAxMmFmZGIyNWMxYTc2ZGI3ODI'
            },
            {
                title: 'Fly Outfits',
                category_id: 4,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1o5Zli3KTBuNkSne1q6yJoXXaB/fly-fish-Clothes-flies-rain-boots-men-waders-for-fishing-Breathable-tactical-hunting-flieas-chest-Clothings.jpg'
            },
            {
                title: 'Casting Rods',
                category_id: 5,
                imageUrl: 'https://image.sportsmansguide.com/adimgs/l/7/718755m12_ts.jpg'
            },
            {
                title: 'Spinning Rods',
                category_id: 5,
                imageUrl: 'https://image.sportsmansguide.com/adimgs/l/6/670773_ts.jpg'
            },
            {
                title: 'Saltwater Rods',
                category_id: 5,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1O4EaHVXXXXX1XVXXq6xXFXXXm/2-1-2-4m-M-Fast-Action-Carbon-Blue-4-Section-6-6lb-Saltwater-Fishing-Rod.jpg'
            },
            {
                title: 'Fly Rods',
                category_id: 5,
                imageUrl: 'https://image.sportsmansguide.com/adimgs/l/6/658133m2_ts.jpg'
            },
            {
                title: 'Kayaks & Fishing Kayaks',
                category_id: 6,
                imageUrl: 'https://i5.walmartimages.com/asr/efa350d0-0e8c-429c-94be-fe4178e7004a_2.35f4117d186dd6b6b9a0159d6b15c7dc.jpeg'
            },
            {
                title: 'Kayak & Canoe Accessories',
                category_id: 6,
                imageUrl: 'https://scotty.com/wp-content/uploads/2020/08/302.jpg'
            },
            {
                title: 'Paddles & Oars',
                category_id: 6,
                imageUrl: 'https://i5.walmartimages.com/asr/c2e56ee6-2138-4f65-aea1-b70c84dc304e.cb5188e87b519b483ab3519f70a7355f.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff'
            },
            {
                title: 'Fishing Line',
                category_id: 7,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1Z2pjKf5TBuNjSspcq6znGFXaJ/Braided-Fishing-Line-Sea-Saltwater-Fishing-4-Strands-6lb-60lb-100-PE-Multifilament-Fly-Crap-Fishing.jpg'
            },
            {
                title: 'Fish Hooks',
                category_id: 7,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1ph35b8USMeJjSszeq6AKgpXan/Hyaena-30pcs-3551-Big-Game-Fishing-Hooks-Fishing-O-Shaughnessy-Treble-Hooks-High-Carbon-Steel-Artificial.jpg'
            },
            {
                title: 'Weights & Sinkers',
                category_id: 7,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1m5wXXzlxYKJjSZFuq6yYlVXa6/6PCS-Fishing-Weight-Sinker-Weight-10g-60g-Water-Droplets-Lead-Weights-Fishing-Lead-Sinkers-Casting-Fishing.jpg'
            },
            {
                title: 'Jig Heads',
                category_id: 7,
                imageUrl: 'https://www.fishermanswarehouse.com/mfiles/product/image/mrcshjh_1.5dcf3191da225.jpg'
            },
            {
                title: 'Saltwater Terminal',
                category_id: 7,
                imageUrl: 'https://cdn11.bigcommerce.com/s-tzlolsdzap/images/stencil/original/z/saltwater_terminal_hooks__50282.original.jpg'
            },
            {
                title: 'Lure Building & Molds',
                category_id: 7,
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/919bsSI-QSL._SL1500_.jpg'
            },
            {
                title: 'Floats',
                category_id: 7,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1WqqfXErrK1RkSne1q6ArVVXa5/Night-Glow-Fishing-Float-2pcs-5g-15g-30g-40g-EVA-Fishing-Floats-Lighting-Floats-For-Night.jpg'
            },
            {
                title: 'Tackle Boxes',
                category_id: 8,
                imageUrl: 'https://image.sportsmansguide.com/adimgs/l/1/180920_ts.jpg'
            },
            {
                title: 'Tackle Bags',
                category_id: 8,
                imageUrl: 'https://i5.walmartimages.com/asr/1d1107a6-f736-47a1-91f5-f788a92f02f1_1.268254b5ef6f66f903052e3625681bcb.jpeg'
            },
            {
                title: 'Utility Bags',
                category_id: 8,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1zJaJsL5TBuNjSspmq6yDRVXan/100cm-150cm-Folding-Fishing-Rod-Bags-Fishing-Bags-420D-Zipped-Case-Fish-Pole-Tools-Storage-Bag.jpg'
            },
            {
                title: 'Fishing Apparel',
                category_id: 10,
                imageUrl: 'https://ae01.alicdn.com/kf/HTB1WzxLNXXXXXaYXFXXq6xXFXXXQ/Free-Shipping-Brand-Men-Hiking-climbing-Cycling-Fishing-Clothes-Anti-UV-Breathable-Quick-drying-Professional-Man.jpg'
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('SubCategories', null, {});
    }
};
