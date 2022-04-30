import {navbar} from "../components/navbar.js"



let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML = navbar();
var mensData = [
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
      price: 1170,
      strikedoffprice: 2599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3921/reebok_EX3921_1.jpg.plp",
      name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
      price: 699,
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4160/reebok_EX4160_1.jpg.plp",
      name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
      price: 945,
      strikedoffprice: 2099,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV8798/MEN_SWIM_SLIPPERS_FV8798_1.jpg.plp",
      name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
      price: 399,
      strikedoffprice: 799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EW5173/reebok_EW5173_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV7329/reebok_FV7329_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
      price: 1440,
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GD8567/MEN_TRAINING_PANTS_GD8567_1.jpg.plp ",
      name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
      price: 1999,
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GQ8758/reebok_GQ8758_1.jpg.plp ",
      name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
      price: 769,
      strikedoffprice: 1099,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GP7180/reebok_GP7180_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING WORKOUT  TEE  ",
      price: 1299,
      strikedoffprice: 1440,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3924/reebok_EX3924_1.jpg.plp ",
      name: "MEN'S REEBOK SUPER SOFT FLIP SLIPPERS",
      price: 699,
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0343/reebok_FW0343_1.jpg.plp ",
      name: "MEN'S REEBOK RUNNING RUN SHOES  ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4285/reebok_EX4285_1.jpg.plp ",
      name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV9519/MEN_SWIM_SLIPPERS_FV9519_1.jpg.plp ",
      name: "MEN'S REEBOK SWIM RUSSLE FLIP SLIPPERS  ",
      price: 599,
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
      price: 1575,
      strikedoffprice: 3499,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-H00024/reebok_H00024_1.jpg.plp ",
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II SHOES  ",
      price: 9999,
      strikedoffprice: 12000,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK9170/reebok_GK9170_1.jpg.plp ",
      name: " MEN'S REEBOK TRAINING BAS POLO TEE ",
      price: 779,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK9175/reebok_GK9175_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING FOUNDATION  PANTS  ",
      price: 1019,
      strikedoffprice: 1699,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK9176/reebok_GK9176_1.jpg.plp ",
      name: "MEN'S REEBOK TRAINING FOUNDATION PANTS  ",
      price: 1019,
      strikedoffprice: 1699,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND SHOES",
      price: 1575,
      strikedoffprice: 3499,
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-G57776/reebok_G57776_1.jpg.plp ",
      name: "  MEN'S REEBOK RUNNING ZTAUR RUN SHOES ",
      price: 3499,
      strikedoffprice: 4999,
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-FV9555/MEN_SWIM_SLIPPERS_FV9555_1.jpg.plp  ",
      name: "MEN'S REEBOK SWIM ULTRA FLIP SLIPPERS   ",
      price: 749,
      strikedoffprice: 1499,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3994/reebok_EX3994_1.jpg.plp   ",
      name: "  MEN'S REEBOK SWIM FLEX CONNECT SANDALS ",
      price: 1149,
      strikedoffprice: 2299,
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-EX4287/reebok_EX4287_1.jpg.plp  ",
      name: " MEN'S REEBOK RUNNING GENESIS RUNNER SHOE  ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-GK9180/reebok_GK9180_1.jpg.plp  ",
      name: " MEN'S REEBOK TRAINING RUNNER SHORTS  ",
      price: 779,
      strikedoffprice: 1299,
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-HB5732/reebok_HB5732_1.jpg.plp  ",
      name: " MEN REEBOK CLASSICS TRACKSUIT HOODIE  ",
      price: 3499,
      strikedoffprice: 4999,
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-HB5733/reebok_HB5733_1.jpg.plp  ",
      name: "MEN'S REEBOK CLASSIC TRACKSUIT GOLF HOODIE   ",
      price: 3499,
      strikedoffprice: 4999,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FQ5364/reebok_FQ5364_1.jpg.plp   ",
      name: " UNISEX REEBOK TRAINING ACTIVE  BAG ",
      price: 1399,
      strikedoffprice: 2799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
      price: 1575,
      strikedoffprice: 3499,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-G57705/reebok_G57705_1.jpg.plp",
      name: "UNISEX REEBOK CLASSICS  BASKETBALL SHOES",
      price: 3919,
      strikedoffprice: 5599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0344/reebok_FW0344_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING RUN FUSION  SHOES",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4272/reebok_EX4272_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING QUICK DRIFTER SHOES",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-H02293/reebok_H02293_1.jpg.plp",
      name: "MEN'S REEBOK DYNAMIC ZIGZAG SHOES",
      price: 7599,
      strikedoffprice: 9999,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV9551/MEN_SWIM_SLIPPERS_FV9551_1.jpg.plp",
      name: "MEN'S REEBOK SWIM SUPERSOFT FLIP SLIPPERS",
      price: 909,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-HC3528/reebok_HC3528_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING ACTIVE BASIC POLO TEE",
      price: 779,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-HF3794/reebok_HF3794_01.JPG.plp ",
      name: "MEN'S REEBOK TRAINING ACTIVE MOVE TEE ",
      price: 1749,
      strikedoffprice: 2499,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-HG5456/reebok_HG5456_1.jpg.plp",
      name: "MEN'S REEBOK FITNESS TRAINING  SWEATSHIRT",
      price: 1079,
      strikedoffprice: 1799,
    },
  ];
  window.addEventListener("load", function () {
      displayData(mensData);
    });

    function handlePriceSort() {
      var selected = document.querySelector("#sortPrice").value;
      console.log(selected);
      if (selected == "htl") {
        mensData.sort(function (a, b) {
          return b.price - a.price;
        });
        console.log(mensData)
        displayData(mensData);
      }

      if (selected == "lth") {
        mensData.sort(function (a, b) {
          return a.price - b.price;
        });
        console.log(mensData)
        displayData(mensData);
      }
       // localStorage.setItem("jobApplications", JSON.stringify(appliedJobs));
        // window.location.reload();
    }

    function handleNameSort() {
      //console.log('inside name sort')
      var selected = document.querySelector("#sortNames").value;
      console.log(selected);

      if (selected == "ascending") {
        mensData.sort(function (a, b) {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });

        console.log(appliedJobs);
        displayData(mensData);

        // localStorage.setItem("jobApplications", JSON.stringify(appliedJobs));
        // window.location.reload();
      }

      if (selected == "descending") {
        mensData.sort(function (a, b) {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
        // console.log(appliedJobs);
        displayData(mensData);

        // localStorage.setItem("jobApplications", JSON.stringify(appliedJobs));
        // window.location.reload();
      }
    }
    var cartData = JSON.parse(localStorage.getItem("cart")) || [];
    function displayData(mensData){


  mensData.map(function (elem) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;

    var btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      addToCart(elem);
    });

    box.append(img, name, price, btn);

    document.querySelector("#container").append(box);
  });
}

  function addToCart(elem) {
    console.log(elem);
    cartData.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("item added to cart");
  }