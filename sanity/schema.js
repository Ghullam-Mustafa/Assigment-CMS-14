// import blockContent from './schemas/blockContent'
// import category from './schemas/category'
// import post from './schemas/post'
// import author from './schemas/author'

import courseWeOffer from "./schemas/courdeWeOffer";
import header from "./schemas/header";
import imageHeading from "./schemas/imageHeading";
import majorPrograms from "./schemas/majorPrograms";
import ourFacilities from "./schemas/ourFacilities";
import studentsSays from "./schemas/studentsSays";
import virtualTour from "./schemas/virtualTour";

export const schema = {
  types: [majorPrograms,virtualTour,ourFacilities,studentsSays,imageHeading,header,courseWeOffer],
}
