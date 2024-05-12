

const topsList = [
     {   
        id : 1,
        image : "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F05%2Fb1%2F05b1b9b523274efb56e784436e048a7487db9e14.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        name : "Motif-front T-shirt",
        price: "Rs.799"
     },

     {   
        id : 2,
        image : "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F97%2Fc8%2F97c80274f36f9ddb05225a77427f485845e1a29b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        name : "Printed T-shirt",
        price: "Rs.499"
     },


     {   
        id : 3,
        image : "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F04%2F7b%2F047bfde069cf2d6b68029515e469f2cf37e6f315.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name : "Printed T-shirt",
        price: "Rs.760"
     },


     {   
        id : 4,
        image : "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F62%2Fc9%2F62c9d5c0a4e9f037d4c99116afd0ebcb954748f5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        name : "Picot-trimmed jersey dress",
        price: "1490"
     },

     {   
        id : 5,
        image : "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F4c%2Fd6%2F4cd6086a44a7d7e7011163409824d7654a687045.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        name : "Short-sleeved top",
        price: "1299"
     },


     {   
        id : 6,
        image : "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3a%2F04%2F3a044a0f32aa03fb41b7b45ca3c72d3a90d888c5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name : "Long-sleeved jersey top",
        price: "799"
     },


     {   
        id : 7,
        image : "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9c%2F23%2F9c238f1273a604aa1a6245e11d06a2ea8b336c36.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name : "Sweatshirt",
        price: "1290"
     },

     {   
        id : 8,
        image : "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F40%2F7d%2F407de5489ca16b3c05b900a9b5884531ca2a8993.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name : "Sweatshirt",
        price: "1380"
     },

     {   
        id : 9,
        image : "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe5%2F2f%2Fe52fc6c9229b9bbe5314505e8a01f03dcc1ad867.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name : "Ribbed modal-blend top",
        price: "799"
     },

     {   
        id : 10,
        image : "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8c%2F6a%2F8c6a8f1ac40ed7afd0f9d2fa42b4f8338a895336.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name : "Ribbed button-top vest top",
        price: "799"
     },

];


const bottomsList = [
      {
        id:1,
        image: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fca%2F33%2Fca3348cd15df6330aa76e282282cdcba432b431a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        name: "Straight High Jeans",
        price : "1499"
      },

      {
        id:2,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F93%2F44%2F9344e76ebb9ce149064f9005f3de7c3d8b0b3570.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Wide High Jeans",
        price : "2290"
      },

      {
        id:3,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa3%2F1d%2Fa31d43eb9d19622fbfa65544ab41222addf3bb2e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
        name: "Baggy Regular Jeans",
        price : "2299"
      },

      {
        id:4,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F75%2Fa0%2F75a06bb439dec3c02862ca2ce1ca5a67a44db3c0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Denim pull-on trousers",
        price : "1499"
      },

      {
        id:5,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F80%2F1c%2F801c89fa689c2b69467e49e25d81d9ded3ca26de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Wide High Cropped Jeans",
        price : "1799"
      },

      {
        id:6,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd0%2F5f%2Fd05fdaec2ec6e46c3af123ffbfe2bd85540a5974.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Feather Soft Straight Regular Jeans",
        price : "1999"
      },

      {
        id:7,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9d%2F00%2F9d0046841ec566d4976e1b20033a3b1e5e6c0cc5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Slim Straight High Jeans",
        price : "1999"
      },

      {
        id:8,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F13%2Fab%2F13abd0ef59f59f3b7f29629bc4b65fc56c018171.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Wide High Jeans",
        price : "2299"
      },

      {
        id:9,
        image: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F11%2F90%2F119016e2ea14d34da510c2c8e481d0e901129c64.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        name: "Denim pull-on trousers",
        price : "1499"
      },

      {
        id:10,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2F26%2F73264cca27a03c990ea2a3ed92d06775d0ec6313.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Skinny High Jeans",
        price : "1480"
      }



]


const jumpsuitsList = [

    {
        id:1,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe9%2F66%2Fe966dcc00d2df343b957ac1ac704446a17539c91.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
        name: "Linen-blend jumpsuit",
        price :"2999"
    },

    {
        id:2,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7f%2Fac%2F7face7e8a401066da1d130bce34bf4c4e39f7124.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Glittery jumpsuit",
        price :"1900"
    },

    {
        id:3,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F62%2F23%2F6223b49a6aaa937926205d275cb620c6dc5aa5b3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Twist-detail off-the-shoulder jumpsuit",
        price :"2999"
    },

    {
        id:4,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9e%2Ff2%2F9ef21224606f676225fcc3c0fcf279fca9ce5592.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Open-back jumpsuit",
        price :"3999"
    },

    {
        id:5,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa5%2F86%2Fa58644efc2363df319e71386e120e221cd0cd780.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Tie-belt jersey jumpsuit",
        price :"1499"
    },

    {
        id:6,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc9%2F42%2Fc942932a6138241bf06ad806397c7c53a4e0b906.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Dressy jumpsuit",
        price :"4999"
    },

    {
        id:7,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2f%2Fc1%2F2fc12a9ccd33e3221604da68f166f3bcf80bda19.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Crêpe V-neck jumpsuit",
        price :"4999"
    },

    {
        id:8,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F51%2F29%2F51292a1e3da5ece6dedab5af4e815f1f1622d2bb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
        name: "Tie-belt jersey jumpsuit",
        price :"1499"
    },


    {
        id:9,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4d%2Fa3%2F4da3c3132062df773f6330c2083377df751869b7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Linen-blend jumpsuit",
        price :"4999"
    },

    {
        id:10,
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F74%2F33%2F743323735d5fdeb53bd857b553bd5672fac213df.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        name: "Open-back jumpsuit",
        price :"3999"
    }
]