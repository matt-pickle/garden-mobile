export default function iconPicker(plantName) {
  let icon = require("../assets/plant-icons/none.png");
  switch (plantName) {
    case "bell pepper":
      icon = require("../assets/plant-icons/bell-pepper.png");
      break;
    case "broccoli":
      icon = require("../assets/plant-icons/broccoli.png");
      break;
    case "cabbage":
      icon = require("../assets/plant-icons/cabbage.png");
      break;
    case "carrot":
      icon = require("../assets/plant-icons/carrot.png");
      break;
    case "chard":
      icon = require("../assets/plant-icons/chard.png");
      break;
    case "cauliflower":
      icon = require("../assets/plant-icons/cauliflower.png");
      break;
    case "corn":
      icon = require("../assets/plant-icons/corn.png");
      break;
    case "cucumber":
      icon = require("../assets/plant-icons/cucumber.png");
      break;
    case "green bean":
      icon = require("../assets/plant-icons/green-bean.png");
      break;
    case "jalapeno":
      icon = require("../assets/plant-icons/jalapeno.png");
      break;
    case "kale":
      icon = require("../assets/plant-icons/kale.png");
      break;
    case "lettuce":
      icon = require("../assets/plant-icons/lettuce.png");
      break;
    case "onion":
      icon = require("../assets/plant-icons/onion.png");
      break;
    case "okra":
      icon = require("../assets/plant-icons/okra.png");
      break;
    case "potato":
      icon = require("../assets/plant-icons/potato.png");
      break;
    case "radish":
      icon = require("../assets/plant-icons/radish.png");
      break;
    case "spinach":
      icon = require("../assets/plant-icons/spinach.png");
      break;
    case "strawberry":
      icon = require("../assets/plant-icons/strawberry.png");
      break;
    case "sugar snap pea":
      icon = require("../assets/plant-icons/sugar-snap-pea.png");
      break;
    case "summer squash":
      icon = require("../assets/plant-icons/summer-squash.png");
      break;
    case "sweet pea":
      icon = require("../assets/plant-icons/sweet-pea.png");
      break;
    case "sweet potato":
      icon = require("../assets/plant-icons/sweet-potato.png");
      break;
    case "tomato":
      icon = require("../assets/plant-icons/tomato.png");
      break;
    case "turnip":
      icon = require("../assets/plant-icons/turnip.png");
      break;
    case "winter squash":
      icon = require("../assets/plant-icons/winter-squash.png");
      break;
  }
  return icon;
}